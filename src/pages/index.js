import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import logoBg from './logo-BG.svg'

const frameworks = [
  'React',
  'Angular',
  'Vue.js',
  'Preact',
  'Ember',
  'Inferno',
  'AngularJS',
  'Svelte',
  'VanillaJS',
  '...and more!'
]

export default class IndexPage extends React.Component {
  state = {
    showTyping: true
  }

  render() {
    return(
      <div>
        <section className={`${styles.index} sspa-container`}>
          <h1 className={styles.h1}>The javascript metaframework</h1>
          <div className={styles.typing}>
            { this.state.showTyping &&
              <Typist startDelay={1000} avgTypingDelay={120} onTypingDone={this.onTypingDone} cursor={{element: "_"}}>
                { frameworks.map(framework => (
                  <span key={framework}>
                    <Typist.Delay ms={500}/>
                    {framework}
                    <Typist.Backspace count={framework.length} delay={1000}/>
                  </span>
                ))}
              </Typist>
            }
          </div>
          <div className={styles.buttons}>
            <Link className="sspa-button sspa-button-gray" to="/docs/getting-started.index.html">Get Started</Link>
            <span className={styles.buttonSeparator}>
              <a className="sspa-button" href="https://single-spa.surge.sh/" target="_blank">View Demo</a>
            </span>
          </div>
        </section>
        <section className={`sspa-primary-bg ${styles.index2Section}`}>
          <div className="sspa-container">
            <img src={logoBg} alt="single-spa logo" className={styles.indexLogo} height="150" width="150"/>
            <h2 className={styles.indexH2}>
              WHY SINGLE-SPA
            </h2>
          </div>
          <div className={`${styles.indexReasons} sspa-container`}>
            <div className={styles.indexReason}>
              <h3>Enjoy Framework Freedom</h3>
              <div>
                Use multiple frameworks in one SPA, allowing you to split code by functionality rather than technology, and coexist Angular and React apps without reloading the page. 
              </div>
            </div>
            <div className={styles.indexReason}>
              <h3>Lazy load entire applications</h3>
              <div>
                Stand up new apps next to the old one. You write the applications, single-spa makes them work together. Move fast without coding yourself into a corner. 
              </div>
            </div>
            <div className={styles.indexReason}>
              <h3>Create microservices for the browser</h3>
              <div>
                Combine many small apps, empowering teams to choose their technology. Stay nimble as your team and product grows over time.
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }

  onTypingDone = () => {
    this.setState({showTyping: false}, () => {
      this.setState({showTyping: true})
    })
  }
}

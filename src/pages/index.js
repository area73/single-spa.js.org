import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

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
        <section className={styles.index}>
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
              <a className="sspa-button" href="https://single-spa.surge.sh/">View Demo</a>
            </span>
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

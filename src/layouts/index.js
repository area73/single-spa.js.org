import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import 'prismjs/themes/prism-okaidia.css'
import './global.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="single-spa Documentation"
      meta={[
        { name: 'description', content: 'single-spa is a Javascript library that allows front-end developers to use microservices in the browser. ReactJS, Angular, Vue, etc. can all coexist on the same website.' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <section>
      {children()}
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

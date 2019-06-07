import React from 'react'
import ReactDOM from 'react-dom'
import App from '../bundles/App/components/App'
// import PropTypes from 'prop-types'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.body.appendChild(document.createElement('div')),
    )
})
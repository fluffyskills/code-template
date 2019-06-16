import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import Layout from './components/Layout/Layout'
import './global.scss'

class App extends Component {
    render() {
        return (
          <Fragment>
            <Layout />
          </Fragment>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
)
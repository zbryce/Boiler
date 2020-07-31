import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux'
import Baseball from './components/Baseball'

ReactDOM.render(
    <Provider store={store}>
        <Baseball />
    </Provider>,
    document.getElementById('app')
)
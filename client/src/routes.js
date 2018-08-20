import React from 'react'
import Layout from './HOC/global_layout'
import { Route } from 'react-router-dom'
import Home from './components/home/home'


function Routes() {
    return (
        <Layout>
            <Route path='/' exact component={Home} />
        </Layout>
    )
}

export default Routes

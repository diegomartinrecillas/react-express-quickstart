// React
import React from 'react';
// Layout
import Layout from './layout';

export default class Error extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <h1>this.props.message</h1>
                <h2>this.props.status</h2>
                <pre>this.props.error.stack</pre>
            </Layout>
        );
    }
}
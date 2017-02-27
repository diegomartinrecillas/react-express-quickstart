import React from 'react';

export default class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    {process.env.NODE_ENV == 'production' && (
                        <link rel='stylesheet' href='/dist/client.css'/>
                    )}
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
}
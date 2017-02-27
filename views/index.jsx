// React
import React from 'react';
// Layout
import Layout from './layout';

export default class Index extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <div id='client'/>
                {process.env.NODE_ENV == 'production' ? (
                    <div>
                        <script src='/dist/vendor.js'/>
                        <script src='/dist/client.js'/>
                    </div>
                ) : (
                    <div>
                        <script src='/dev/client.js'/>
                    </div>
                )}
                <script
                    dangerouslySetInnerHTML={{__html:
                        `var WebFontConfig = {
                            google: { families: [ 'Roboto:400,300,500:latin' ] }
                        };
                        (function() {
                            var wf = document.createElement('script');
                            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                            wf.type = 'text/javascript';
                            wf.async = 'true';
                            var s = document.getElementsByTagName('script')[0];
                            s.parentNode.insertBefore(wf, s);
                        })();`
                    }}
                    />
            </Layout>
        );
    }
}

// React
import React from 'react';
import { Link } from 'react-router';
// Styles
import styles from './IndexComponent.scss';

export default class IndexComponent extends React.Component {
    render() {
        return (
            <div className={ styles.root }>
                <p className={ styles.text }>IndexComponent</p>
            </div>
        );
    }
}

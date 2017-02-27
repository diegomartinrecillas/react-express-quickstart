// React
import React from 'react';
import { Link } from 'react-router';
// Styles
import styles from './ComponentA.scss';

export default class ComponentA extends React.Component {
    render() {
        return (
            <div className={ `${styles.root}` }>
                <p className={ `${styles.text} root` }>ComponentA</p>
            </div>
        );
    }
}

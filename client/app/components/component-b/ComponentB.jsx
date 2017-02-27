// React
import React from 'react';
import { Link } from 'react-router';
// Styles
import styles from './ComponentB.scss';

export default class ComponentB extends React.Component {
    render() {
        return (
            <div className={ styles.root }>
                <p className={ styles.text }>ComponentB</p>
            </div>
        );
    }
}

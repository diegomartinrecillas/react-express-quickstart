// React
import React from 'react';
import { Link } from 'react-router';
// Styles
import styles from './RootComponent.scss';

export default class ComponentA extends React.Component {
    render() {
        return (
            <div>
                <Link className={styles.link} to={`/`}>IndexComponent</Link>
                <Link className={styles.link} to={`/component-a`}>ComponentA</Link>
                <Link className={styles.link} to={`/component-b`}>ComponentB</Link>
                {this.props.children}
            </div>
        );
    }
}

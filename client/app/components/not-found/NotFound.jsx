// React
import React from 'react';
import { Link } from 'react-router';
// Styles
import styles from './NotFound.scss';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className={styles.background}>
                <p className={styles.text}>
                    404 Not Found
                </p>
            </div>
        );
    }
}

import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p className={styles.footer}>
                    تمامی حقوق برای توسعه دهنده <a href="https://google.com" title="amina98.ir">مهدی جعفرزاده</a> محفوظ است.
                </p>
            </div>
        );
    }
}

export default Footer;
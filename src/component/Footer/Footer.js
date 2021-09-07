import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p className={styles.footer}>
                    تمامی حقوق برای توسعه دهنده <a href="https://github.com/amina98" rel="noreferrer" target="_blank" title="amina98.ir">مهدی جعفرزاده</a> محفوظ است.
                </p>
            </div>
        );
    }
}

export default Footer;
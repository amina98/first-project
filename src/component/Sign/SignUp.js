import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            email: "",
            password: "",
            address: ""
        }
    }
    changeHandler = event => {
        this.setState({
        [event.target.name] : event.target.value,
        });
        console.log(this.state)
    }
    render() {
        const {name, lastName, email, password, address} = this.state;
        return (
            <div className={styles.container}>
                <h1>فروشگاه - ثبت نام</h1>
                <form className={styles.form}>
                    <div className={styles.inputBox}>
                        <div className={styles.input}>
                            <label htmlFor="name">نام</label>
                            <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="نام خود را وارد کنید ..." />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="lastName">نام خانوادگی</label>
                            <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} placeholder="نام خانوادگی خود را وارد کنید ..." />
                        </div>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.input}>
                            <label htmlFor="email">ایمیل</label>
                            <input type="email" name="email" value={email} onChange={this.changeHandler} placeholder="ایمیل خود را وارد کنید ..." />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="password">رمز عبور</label>
                            <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="رمز عبور خود را وارد کنید ..." />
                        </div>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={`${styles.input} ${styles.address}`}>
                            <label htmlFor="address">آدرس</label>
                            <textarea type="text" name="address" value={address} onChange={this.changeHandler} placeholder="آدرس خود را وارد کنید ..." />
                        </div>
                    </div>
                    <button type="submit">ثبت نام</button>
                </form>
                <span>حساب کاربری دارید؟ <Link to="/sign-in">ورود</Link></span>
            </div>
        );
    }
}

export default SignUp;
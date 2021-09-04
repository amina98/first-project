import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            logged: false
        };
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    clickHandler = (event) => {
        event.preventDefault();
        this.setState({
            logged : true,
        });
        this.props.logged(true)
    };
    render() {
        return (
            <div className={styles.container}>
                <h1>فروشگاه - ورود</h1>
                <form className={styles.signForm}>
                    <div className={styles.input}>
                        <label htmlFor="email">ایمیل</label>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            name="email"
                            placeholder="ایمیل خود را وارد کنید ..."
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">رمز عبور</label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            name="password"
                            placeholder="رمز عبور خود را وارد کنید ..."
                        />
                    </div>
                    <button type="submit" onClick={this.clickHandler}>
                        <Link to="/">ورود</Link>
                        
                    </button>
                </form>
                <span>
                    حساب کاربری ندارید؟
                    <Link to="/sign-up"> ایجاد حساب کاربری</Link>
                </span>
            </div>
        );
    }
}

export default SignIn;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import { validate } from "../../validate";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = (props) => {
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        status: false,
    });
    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data);
    };
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        email: false,
        password: false,
    });
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            console.log(errors)
            notify("you sign up Successfully", "success");
        } else {
            setTouched({
                email: true,
                password: true,
            });
            notify("Inalid data!", "error");
        }
    };
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });
    };
    const notify = (text, type) => {
        if (type === "success") {
            toast.success(text, { theme: "colored" });
        } else {
            toast.error(text, { theme: "colored" });
        }
    };
    useEffect(() => {
        setErrors(validate(data));
    }, [data]);
    return (
        <div className={styles.container}>
            <h1>فروشگاه - ورود</h1>
            <form className={styles.signForm} onSubmit={submitHandler}>
                <div className={styles.input}>
                    <label htmlFor="email">ایمیل</label>
                    <input
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={changeHandler}
                        placeholder="ایمیل خود را وارد کنید ..."
                        onFocus={focusHandler}
                        className={
                            errors.email && touched.email
                                ? styles.uncomplited
                                : styles.inputField
                        }
                    />
                </div>
                {errors.email && touched.email && <span>{errors.email}</span>}
                <div className={styles.input}>
                    <label htmlFor="password">رمز عبور</label>
                    <input
                        type="password"
                        value={data.password}
                        name="password"
                        onChange={changeHandler}
                        placeholder="رمز عبور خود را وارد کنید ..."
                        onFocus={focusHandler}
                        className={
                            errors.password && touched.password
                                ? styles.uncomplited
                                : styles.inputField
                        }
                    />
                </div>
                {errors.password && touched.password && (
                    <span>{errors.password}</span>
                )}
                {/* <Link to="/"> */}
                <button type="submit">ورود</button>
                {/* </Link> */}
            </form>
            <span>
                حساب کاربری ندارید؟
                <Link to="/sign-up"> ایجاد حساب کاربری</Link>
            </span>
            <ToastContainer />
        </div>
    );
};

export default SignIn;

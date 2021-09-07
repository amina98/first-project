import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { validate } from "../../validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
    });

    const [errors, setErrors] = useState({});
    const [toched, setToched] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false,
    });
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
    const focusHandler = (event) => {
        setToched({
            ...toched,
            [event.target.name]: true,
        });
    };
    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("you sign up Successfully", "success");
        } else {
            setToched({
                name: true,
                lastName: true,
                email: true,
                password: true,
            });
            notify("Inalid data!", "error");
        }
    };
    const { name, lastName, email, password, address } = data;
    return (
        <div className={styles.container}>
            <h1>فروشگاه - ثبت نام</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.inputBox}>
                    <div className={styles.hidden}>
                        <div className={styles.input}>
                            <label htmlFor="name">نام</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={changeHandler}
                                placeholder="نام خود را وارد کنید ..."
                                onFocus={focusHandler}
                                className={(errors.name &&toched.name) ? styles.uncomplited : styles.inputFeild}
                            />
                        </div>
                        {errors.name && toched.name && (
                            <span>{errors.name}</span>
                        )}
                    </div>
                    <div className={styles.hidden}>
                        <div className={styles.input}>
                            <label htmlFor="lastName">نام خانوادگی</label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={changeHandler}
                                placeholder="نام خانوادگی خود را وارد کنید ..."
                                onFocus={focusHandler}
                                className={(errors.lastName &&toched.lastName) ? styles.uncomplited : styles.inputFeild}
                            />
                        </div>
                        {errors.lastName && toched.lastName && (
                            <span>{errors.lastName}</span>
                        )}
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <div className={styles.hidden}>
                        <div className={styles.input}>
                            <label htmlFor="email">ایمیل</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={changeHandler}
                                placeholder="ایمیل خود را وارد کنید ..."
                                onFocus={focusHandler}
                                className={(errors.email &&toched.email) ? styles.uncomplited : styles.inputFeild}
                            />
                        </div>
                        {errors.email && toched.email && (
                            <span>{errors.email}</span>
                        )}
                    </div>
                    <div className={styles.hidden}>
                        <div className={styles.input}>
                            <label htmlFor="password">رمز عبور</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={changeHandler}
                                placeholder="رمز عبور خود را وارد کنید ..."
                                onFocus={focusHandler}
                                className={(errors.password &&toched.password) ? styles.uncomplited : styles.inputFeild}
                            />
                        </div>
                        {errors.password && toched.password && (
                            <span>{errors.password}</span>
                        )}
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <div className={`${styles.input} ${styles.address}`}>
                        <label htmlFor="address">آدرس</label>
                        <textarea
                            type="text"
                            name="address"
                            value={address}
                            onChange={changeHandler}
                            placeholder="آدرس خود را وارد کنید ..."
                        />
                    </div>
                </div>
                <button type="submit">ثبت نام</button>
            </form>
            <span>
                حساب کاربری دارید؟ <Link to="/sign-in">ورود</Link>
            </span>
            <ToastContainer />
        </div>
    );
};

export default SignUp;

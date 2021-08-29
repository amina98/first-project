import React, { Component } from 'react';
import styles from './Timer.module.css';

class Timer extends Component {
    constructor(){
        super();
        this.timer = React.createRef();
    }
    componentDidMount(){
        setInterval(()=>{
            const date = new Date();
            const time = {
            h : date.getHours(),
            m : date.getMinutes(),
            s : date.getSeconds(),
        }
        let {h , m , s} = time;
        if(h<10){
            h = `0${h}`;
        }
        if(m<10){
            m = `0${m}`;
        }
        if(s<10){
            s = `0${s}`;
        }
        console.log(time)
        this.timer.current.innerText = `${h}:${m}:${s}`;},1000)
    }
    render() {
        return (
            <div>
                <p ref= {this.timer} className={styles.timer}></p>
            </div>
        );
    }
}

export default Timer;
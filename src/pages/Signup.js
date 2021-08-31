import React, { Component } from 'react';
import SignIn from '../component/Sign/SignIn';
import SignUp from '../component/Sign/SignUp';

class Signup extends Component {
    render() {
        return (
            <div>
                <SignIn />
                <SignUp />
            </div>
        );
    }
}

export default Signup;
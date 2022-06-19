import React, { Component } from 'react';
import '../css/Login.css';
import axios from 'axios';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberPhone: ''
        };
    }

    handleInputChange = async (event) => {
        const target = event.target;
        const value = target.value.replace(/\D/g, '');;
        const name = target.name;

        await this.setState({
            [name]: value
        });
    }

    verifyInputLength = (event) => {
        const target = event.target;
        const name = target.name;

        if (this.state[name].length === 10) {
            this.login();
        }
    }

    login = async () => {

        let request = {
            mobilephone: this.state.numberPhone
        }

        window.location.href = '/home';

        /*
        await axios.post(process.env.REACT_APP_DOMAIN + process.env.REACT_APP_LOGIN, request, {
            xsrfHeaderName: "X-XSRF-TOKEN",
            withCredentials: true
        }).then(res => {
            console.log(res);
        });
        */
    }

    render() {
        return (
            <div className='main-container'>
                <div className='icon-container'>
                    <img src="https://mitienda.moda/img/logo.e38c8b41.png" alt="" />
                </div>
                <div className='text-container'>
                    <span>Ingresa el número de teléfono
                        de tu asesora independiente.</span>
                </div>
                <form className='input-container'>
                    <input
                        name="numberPhone"
                        type="text"
                        value={this.state.numberPhone}
                        onChange={this.handleInputChange}
                        maxLength="10" 
                        onKeyUp={this.verifyInputLength}/>
                </form>
            </div>
        )
    }
}
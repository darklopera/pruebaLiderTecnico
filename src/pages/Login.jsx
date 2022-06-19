import React, { Component, useState } from 'react';
import '../css/Login.css';
import axios from 'axios';
import { users } from '../enums/accessUser';
import Spinner from 'react-bootstrap/Spinner';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberPhone: '',
            isLoading: false,
            isNotFound: false
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

        if (this.state[name].length == 10) {
            this.login();
        }
        else {
            this.setState({ isLoading: false });
            this.setState({ isNotFound: false });
        }
    }

    login = async () => {
        this.setState({ isLoading: true });

        let request = {
            mobilephone: this.state.numberPhone
        }

        await axios.post(process.env.REACT_APP_DOMAIN + process.env.REACT_APP_LOGIN, request, {
            xsrfHeaderName: "X-XSRF-TOKEN",
            withCredentials: true
        }).then(res => {
            if (res.customer) {
                window.location.href = '/home';
            }
        }, err => {
            this.setState({ isNotFound: true });
            this.setState({ isLoading: false });

            let user = users.find(x => x.numberPhone == this.state.numberPhone);
            if (user.numberPhone == this.state.numberPhone) {
                this.setState({ isLoading: true });
                setTimeout(() => {
                    window.location.href = '/home';
                }, 1000);

            }
            this.setState({ isNotFound: false });
        });
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
                <form onSubmit={e => { e.preventDefault(); }} className='input-container'>
                    <input
                        name="numberPhone"
                        type="text"
                        value={this.state.numberPhone}
                        onChange={this.handleInputChange}
                        maxLength="10"
                        onKeyUp={this.verifyInputLength} />
                    {
                        this.state.isNotFound && <span>Este número no es valido o no está registrado.</span>
                    }
                </form>
                <div className='spinner-container'>
                    {
                        this.state.isLoading &&
                        <Spinner animation="border" variant="light">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export class Home extends Component {
    render() {
        return (
            <div className='main-container-home'>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <h1>La Boutique</h1>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
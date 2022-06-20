import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import '../css/Home.css';
import axios from 'axios';
import cart from '../assets/images/casa.png'
import catalogue from '../assets/images/folleto.png'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calalogue: [],
            option: true,
            cart: []
        };
    }

    async callCatalogue() {
        await axios.get(process.env.REACT_APP_DOMAIN + process.env.REACT_APP_CATALOGUE).then(res => {
            this.setState({ calalogue: res.data });
        })
    }

    componentDidMount() {
        this.callCatalogue();
        if (localStorage.getItem('cart')) {
            this.setState({ cart: JSON.parse(localStorage.getItem('cart')) })
        }
    }

    setOption(opt) {
        this.setState({ option: opt })
    }

    addToCart(prod) {
        let products = this.state.cart ? this.state.cart : [];
        this.setState({ cart: [...this.state.cart, prod] });
        products.push(prod);
        localStorage.setItem('cart', JSON.stringify(products));
    }

    removeOfCart(prod) {
        const greetings = JSON.parse(localStorage.getItem('cart'));
        const filtered = greetings.filter(item => item.id !== prod.id);
        localStorage.setItem("cart", JSON.stringify(filtered));
        this.setState({cart: filtered});
    }

    clearCart() {
        alert('COMPRA REALIZADA\r\nSe ha registrado su orden de compra con éxito. Recuerde pasar por una de nuestras tiendas con su número de teléfono y la fecha de realización de la orden para hacerle entrega los su productos y finalizar el pago. Muchas gracias')
        localStorage.removeItem('cart');
        this.setState({cart: []})
        this.setState({option: true})
    }

    render() {
        return (
            <div className='main-container-home'>
                {
                    this.state.option &&
                    <div className='catalogue-main-container'>
                        <Navbar bg="light">
                            <Container>
                                <Navbar.Brand href="/home">
                                    <h1>La Boutique</h1>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                        <div className='body-container'>
                            {
                                this.state.calalogue.map((el, i) =>
                                    <Card key={i}>
                                        <Card.Img variant="top" src={"https://v3.tissini.app" + el.images[0].url} />
                                        <Card.Body>
                                            <Card.Title>{el.name} - ${el.price}</Card.Title>
                                            <Card.Text>Color: {el.color ? el.color : 'No disponible el color'}
                                            </Card.Text>
                                            <Button onClick={() => this.addToCart(el)} className='button-buy' variant="primary">Agregar al carrito</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </div>
                    </div>
                }
                {
                    !this.state.option &&
                    <div className='cart-main-container'>
                        <div className='body-container'>
                            {
                                this.state.cart.length == 0 &&
                                <h2 className='msg-empty'>No se han agregado productos al carrito</h2>
                            }
                            {
                                this.state.cart.map((el, i) =>
                                    <Card key={i}>
                                        <Card.Img variant="top" src={"https://v3.tissini.app" + el.images[0].url} />
                                        <Card.Body>
                                            <Card.Title>{el.name} - ${el.price}</Card.Title>
                                            <Card.Text>Color: {el.color ? el.color : 'No disponible el color'}
                                            </Card.Text>
                                            <Button onClick={() => this.removeOfCart(el)} className='button-buy' variant="primary">Quitar del carrito</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </div>
                        {
                            this.state.cart.length > 0 &&
                            <button onClick={() => this.clearCart()} className='footer-cart-container'>
                                REALIZAR PEDIDO
                            </button>
                        }
                    </div>
                }
                <div className='footer-container'>
                    <button onClick={() => this.setOption(true)} className='catalogue'>
                        <img src={catalogue} />
                        <span>Catálogo</span>
                    </button>
                    <button onClick={() => this.setOption(false)} className='cart'>
                        <img src={cart} />
                        <span>Carrito</span>
                    </button>
                </div>
            </div>
        );
    }
}
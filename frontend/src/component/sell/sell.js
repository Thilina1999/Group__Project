import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './sell.css';

export default function Sell() {
    return (
        <div className="sell">
            <div className="row2">
                <div className="row-2">
                    <div className="col-1" style={{ flexGrow: '1', backgroundColor: 'white', height: '250px' }}>
                        
                    </div>
                    <div className="col-2">
                        <p style={{ fontSize: '14px'}}><b>Become A Seller</b></p>
                        <Button className="btn btn-primary" style={{ marginTop: '10px' }} href="/signin/signup">Sign Up</Button>
                    </div>
                </div>

            </div>
            <div className="row2">
                <h5>Introduction to E-commerce Selling</h5>
                <div className="row-2">
                    <div className="col-1" style={{ flexGrow: '1' }}></div>
                    <div className="col-2" style={{ flexGrow: '1' }}></div>
                    <div className="col-3" style={{ flexGrow: '1' }}></div>
                </div>
            </div>
            <div className="row3">
                <Carousel variant="dark" style={{ height: '400px' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=f5f5f5"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=eee"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

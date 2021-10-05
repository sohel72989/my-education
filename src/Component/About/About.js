import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './About.css'



const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Container>
                <div className="about-us">

                    <div className="single-about">
                        <div>
                            <i class="fas fa-phone-square-alt"></i>
                        </div>
                        <div>
                            <h3 className="otherHead">+088 01704283235</h3>
                            <p>We are open 10am to 10pm without friday.</p>
                        </div>
                    </div>
                    <div className="single-about">
                        <div>
                            <i className="far fa-envelope"></i>
                        </div>
                        <div>
                            <h3 className="otherHead">rana72989@gmail.com</h3>
                            <p>We will respond to your mail within business hour </p>
                        </div>
                    </div>
                    <div className="single-about">
                        <div>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h3 className="otherHead">Whatsapp:+002 88 33</h3>
                            <p>We are open 10am to 10pm</p>
                        </div>
                    </div>

                </div>


            </Container>


            <Row>

                <Col sm={12} lg={6}>
                    <div className="mt-5">
                        <h2 className="display-4 Head-dep">Head Of Department</h2>
                        <ul>
                            <li className="fw-bold fs-5 Head-dep">DEV:Sohel Rana</li>
                            <li><i class="fas fa-phone-alt text-warning"></i>01704283235</li>
                            <li></li>

                        </ul>
                    </div>

                    <div className="mt-5">
                        <h2 className="display-4 Head-dep">Mirpur Branch</h2>
                        <ul>
                            <li className="fs-5 fw-bold"><i class="fas fa-map-marker-alt text-warning Head-dep"></i>Mirpur-10,Dhaka</li>
                            <li><i class="fas fa-phone-alt text-warning"></i>01704283235</li>
                            <li></li>
                        </ul>
                    </div>
                </Col>




                <Col sm={12} lg={5} className="pt-5">

                    <Form className="form ">

                        <h2 className="display-3 text-warning pt-5 ">Registration Form</h2>

                        <input className="inp p-2 form my-4" type="text" lg placeholder="Enter Your First Name" />
                        <br />


                        <input className="inp p-2 my-4 form" type="text" placeholder="Enter Your Last Name" />

                        <input className="inp form p-2 mt-4" type="password" name="" id="" placeholder="Password" />
                        <br />

                        <textarea className="mt-5 form" name="" id="" cols="70" rows="10"></textarea> <br />

                        <div class="d-grid gap-2 col-8 mx-auto py-3">
                            <button class="button" type="button">Button</button>

                        </div>

                    </Form>
                </Col>

            </Row>



            <Footer></Footer>
        </div>
    );
};

export default About;
import { Container, Row, Col, Form, Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { GetWeather } from '../Fetch.js';

function MainSection() {
    let weatherData = '';
    const [weather, setWeather] = useState('');
    const [temp, setTemp] = useState('');
    const [iconCode, setIconCode] = useState('');
    const [location, setLocation] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    // async function GetWeather() {
    //     const data = await promise.json();
    //     weatherData = data;
    //     setWeather(weatherData);
    //     console.log(weatherData.weather[0].main);
    //     console.log(weather.weather[0].main);
    // }


    // GetWeather();
    // console.log(weather);
    // weatherData = weather;

    useEffect(() => {
        (async () => {
            weatherData = await GetWeather();
            setWeather(weatherData.weather[0].main);
            setTemp(weatherData.main.temp);
            setIconCode(weatherData.weather[0].icon);
            setLocation(weatherData.name);
            // setIcon('https://openweathermap.org/img/wn/' + iconCode + '@2x.png');
            // console.log(weatherData);
        })();
    }, []);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <Navbar className='topBar' variant="dark">
                <Container>
                    <Navbar.Brand onClick={handleShow}>Favorites</Navbar.Brand>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Favorite Locations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className='favoritesList'>
                            <Col className='favoritesItem'>
                                <h5>Stockton, CA</h5>
                                <p>52</p>
                                <p>Raining</p>
                            </Col>
                            <Col className='favoritesItem'>
                                <h5>Manteca, CA</h5>
                                <p>51</p>
                                <p>Raining</p>
                            </Col>
                            <Col className='favoritesItem'>
                                <h5>City, ST</h5>
                                <p>00</p>
                                <p>Weather</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Container>

                <Form className='searchBar'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Search for a Location" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>

            </Container>
            <Container>
                <Row className='topWeather'>
                    <Col className='weatherDataLeft'>
                        <h2>Today</h2>
                        <h1>{temp}°</h1>
                        <h2>{weather}</h2>
                        <h2>{location}</h2>
                    </Col>
                    <Col className='weatherDataRight'>
                        <img src={'https://openweathermap.org/img/wn/' + iconCode + '@4x.png'} />
                    </Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row className='threeDays'>
                    <Col>
                        <p>Morning</p>
                        <p>Weather Icon</p>
                        <h2>Temperature</h2>
                        <p>Precipitation</p>
                    </Col>
                        <br/>
                    <Col>
                        <p>Noon</p>
                        <p>Weather Icon</p>
                        <h2>Temperature</h2>
                        <p>Precipitation</p>
                    </Col>
                        <br/>
                    <Col>
                        <p>Evening</p>
                        <p>Weather Icon</p>
                        <h2>Temperature</h2>
                        <p>Precipitation</p>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row className='fiveDays'>
                    <Col className='weatherDay'>
                        <p>Tuesday</p>
                        <p>Temperature</p>
                        <p>Weather Icon</p>
                        <p>Precipitation</p>
                        <p>Wind</p>
                    </Col>
                    <Col className='weatherDay'>
                        <p>Wednesday</p>
                        <p>Temperature</p>
                        <p>Weather Icon</p>
                        <p>Precipitation</p>
                        <p>Wind</p>
                    </Col>
                    <Col className='weatherDay'>
                        <p>Thursday</p>
                        <p>Temperature</p>
                        <p>Weather Icon</p>
                        <p>Precipitation</p>
                        <p>Wind</p>
                    </Col>
                    <Col className='weatherDay'>
                        <p>Friday</p>
                        <p>Temperature</p>
                        <p>Weather Icon</p>
                        <p>Precipitation</p>
                        <p>Wind</p>
                    </Col>
                    <Col className='weatherDay'>
                        <p>Saturday</p>
                        <p>Temperature</p>
                        <p>Weather Icon</p>
                        <p>Precipitation</p>
                        <p>Wind</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default MainSection
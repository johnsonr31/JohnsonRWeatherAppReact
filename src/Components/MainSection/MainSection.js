import { Container, Row, Col, Form, Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { GetWeather } from '../Fetch.js';
// The import statements above import several things that are needed to create this web app. The GetWeather function fetches the data from the API, which is one of the most important parts of the project. There are also the React Bootstrap elements, which are needed to build up the scaffolding for the page. Lastly, there are the useState and useEffect hooks, which are necessary to have the data show up correctly on the page.

// This function contains most of the logic for this weather app, as well as a return for the JSX elements that will show up in the browser when the user views the app
function MainSection() {
    let weatherData = '';
    const [weather, setWeather] = useState('');
    const [temp, setTemp] = useState('');
    const [iconCode, setIconCode] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');


    const [searchBar, setSearchBar] = useState('');
    const [searchTerm, setSearchTerm] = useState(searchBar);

    let favsHasItems = false;

    const handleSearch = (e) => {
        setSearchBar(e.target.value);
    }

    const handleSubmit = () => {
        setSearchTerm(searchBar);
        console.log(searchTerm.toLowerCase());
        // GetCoord(searchTerm);
    }

    // The code below get the current date, specifically the day of the week, allowing it to be displayed in the app.
    const d = new Date();
    let day = d.getDay();
    let today = '';
    // console.log(day);

    // Since the day of the week is returned as a number, the switch statement below will examine which number it is, and then assign the name of the current day to the "today" string variable, which will then be displayed on the page in the browser, along with the weather data.
    switch(day) {
        case 0:
            today = 'Sunday';
            break;
        case 1:
            today = 'Monday';
            break;
        case 2:
            today = 'Tuesday';
            break;
        case 3:
            today = 'Wednesday';
            break;
        case 4:
            today = 'Thursday';
            break;
        case 5:
            today = 'Friday';
            break;
        case 6:
            today = 'Saturday';
            break;
    }

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

    // This useEffect hook takes each useState for each variable that is needed, and assigns it a value that has been fetched from the OpenWeatherMap API. Dot Notation is then used to make sure the correct data from the API is displayed in the browser.
    useEffect(() => {
        (async () => {
            weatherData = await GetWeather();
            setWeather(weatherData.weather[0].main);
            setTemp(weatherData.main.temp);
            setIconCode(weatherData.weather[0].icon);
            setLocation(weatherData.name);
            setDescription(weatherData.weather[0].description);
            // setIcon('https://openweathermap.org/img/wn/' + iconCode + '@2x.png');
            // console.log(weatherData);
        })();
    }, []);

    // The useState below decides wether or not the modal displaying the favorites list will be visible on screen
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
                    {
                        // The ternary operator below decides if the Favorites modal will display the favorites item, if there are any, or a message stating "You do not currently have any favorites" if there are none.
                        favsHasItems ? 
                        <Row>
                            <Col className='favoritesItem'>
                                
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <p>You do not currently have any favorites.</p>
                            </Col>
                        </Row>
                    }
                        
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
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Search for a Location" onChange={handleSearch}/>
                    </Form.Group>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Form>

            </Container>
            <Container>
                <Row className='topWeather'>
                    <Col className='weatherDataLeft'>
                        {/* The HTML tags below have the variables for the weather data inside of them, which are between curly brackets so that they can be placed in the middle of JSX code, being javascript variables */}
                        <h2>{today}</h2>
                        {/* The temperature is displayed as a decimal, so Math.floor is used to round it down to a whole number */}
                        <h1>{Math.floor(temp)} °F</h1>
                        <h2>{location}</h2>
                        <h2>{weather}</h2>
                        <p>{description}</p>
                        <Button variant="warning">Add to Favorites</Button>{' '}
                    </Col>
                    <Col className='weatherDataRight'>
                        <img alt='An icon depicting the current weather' src={'https://openweathermap.org/img/wn/' + iconCode + '@4x.png'} />
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
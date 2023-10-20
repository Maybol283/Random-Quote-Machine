import React, { Component } from 'react';
import './QuoteBoard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class QuoteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteMessage: { quote: '', author: '', category: '' },
      ThemeColor: getRandomRGBColor(),
    };
  }

  ColorChange = () => {
    const newColor = getRandomRGBColor();
    this.setState({
      ThemeColor: newColor,
    });
  
    // Call the callback function to pass the new color to the parent (App)
    this.props.onThemeColorChange(newColor);
  };

  fetchQuote = async () => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=';
    const headers = {
      'x-api-key': 'Ib252CbX0j1oaL7rj/E1sw==LvntPjKieLGYgDZZ',
    };

    try {
      const response = await axios.get(url, { headers });
      this.setState({ quoteMessage: response.data[0] });
    } catch (err) {
      console.log(err.message);
    }
  };

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    const { quoteMessage, ThemeColor } = this.state;
    const TextStyle = {
      fontSize: quoteMessage.quote.length > 175 ? "1.5vw" : "2vw",
    };

    return (
      <Container className="pt-5" style={{ width: '50vw', height: '50vh' }}>
        <Card className="p-0 pt-lg-0 pt-5">
          <Card.Body className=''>
            <Card.Text className="CardText" style={TextStyle}>
              {quoteMessage.quote}
            </Card.Text>
            <footer className="blockquote-footer ">{quoteMessage.author}</footer>
            <Row className="mt-sm-5 mt-lg-3 mt-5 ">
              <Col className="d-flex justify-content-start align-items-center">
                <a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram fa-2xl me-2"></i></a>
                <a href="https://twitter.com/?lang=en"><i className="fa-brands fa-square-x-twitter fa-2xl mx-2"></i></a>
                <a href="https://www.tumblr.com/"><i className="fa-brands fa-tumblr fa-lg fa-lg-2xl mx-2"></i></a>
                <a href="https://www.reddit.com/"><i className="fa-brands fa-square-reddit fa-2xl mx-2"></i></a>
              </Col>
              <Col className="d-flex justify-content-end ">
                <Button className="button"  onClick={() => {
                    this.fetchQuote();
                    this.ColorChange();
                  }}variant="dark">Next</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

export default QuoteBoard;








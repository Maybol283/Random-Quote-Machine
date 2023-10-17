import React from 'react'
import './QuoteBoard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuoteBoard() {
    return (
      <Card style={{ width: '50rem', height: '25rem' }}>
        <Card.Body>
          <Card.Text className="p-5 h1">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
            <Row>
              <Col >
          <footer className="blockquote-footer">Someone famous</footer>
             </Col>
             </Row>
             <Row>
             <Col className="d-flex justify-content-start">
             <i class="fa-brands fa-square-instagram fa-2xl mx-2"></i>
             <i class="fa-brands fa-square-x-twitter fa-2xl mx-2"></i>
             <i class="fa-brands fa-tumblr fa-2xl mx-2"></i>
             <i class="fa-brands fa-square-reddit fa-2xl mx-2"></i>
             </Col>
              <Col>
          <Button variant="dark" className="justify-content-right">Next</Button>
             </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
  
  export default QuoteBoard;
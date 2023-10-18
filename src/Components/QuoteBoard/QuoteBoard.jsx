import React from 'react'
import './QuoteBoard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function QuoteBoard() {
    return (
      <Card className="p-0 pt-5"style={{ width: '50vw', height: '50vh' }}>
        <Card.Body  >
          <Card.Text className="pb-3"style={{fontSize: "2.5vw"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container>
          <footer className="blockquote-footer">Someone famous</footer>
             <Row className="mt-sm-5 mt-lg-3 mt-5">
             <Col className="d-flex justify-content-start align-items-center">
             <i class="fa-brands fa-square-instagram fa-2xl me-2"></i>
             <i class="fa-brands fa-square-x-twitter fa-2xl mx-2"></i>
             <i class="fa-brands fa-tumblr fa-lg fa-lg-2xl mx-2"></i>
             <i class="fa-brands fa-square-reddit fa-2xl mx-2"></i>
             </Col>
              <Col className="d-flex justify-content-end">
          <Button variant="dark">Next</Button>
             </Col>
          </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
  
  export default QuoteBoard;
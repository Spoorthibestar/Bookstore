import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form, Button, Card, Navbar, Nav, Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#books">Books</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img1.jpg" className="d-block w-100" alt="Book 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Featured Book 1</h5>
              <p>Description of the featured book 1.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img2.jpg" className="d-block w-100" alt="Book 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Featured Book 2</h5>
              <p>Description of the featured book 2.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img3.jpg" className="d-block w-100" alt="Book 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Featured Book 3</h5>
              <p>Description of the featured book 3.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Book Cards */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/img1.jpg" />
              <Card.Body>
                <Card.Title>THE STAND </Card.Title>
                <Card.Text>Author: STEPHEN KING</Card.Text>
                <Card.Text>Price: $9.99</Card.Text>
                <Card.Text>The Stand is a post-apocalyptic dark fantasy novel written by American author Stephen King and first published in 1978 by Doubleday. The plot centers on a deadly pandemic of weaponized influenza and its aftermath, in which the few surviving humans gather into factions that are each led by a personification of either good or evil and seem fated to clash with each other. King started writing the story in February 1975,[1] seeking to create an epic in the spirit of The Lord of the Rings. The book was difficult for him to write because of the large number of characters and storylines.</Card.Text>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/img2.jpg" />
              <Card.Body>
                <Card.Title>THE HOBBIT</Card.Title>
                <Card.Text>Author: J.R.R.TOLKIEN</Card.Text>
                <Card.Text>Price: $12.99</Card.Text>
                <Card.Text>The Hobbit, or There and Back Again is a children's fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book is recognized as a classic in children's literature and is one of the best-selling books of all time, with over 100 million copies sold.The story is told in the form of a episodic quest; several chapters introduce a new type of monster.</Card.Text>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/img3.jpg" />
              <Card.Body>
                <Card.Title>TO KILL A MOCKINGBIRD</Card.Title>
                <Card.Text>Author:HARPEER LEE </Card.Text>
                <Card.Text>Price: $15.99</Card.Text>
                <Card.Text>To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in June 1960 and became instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature; a year after its release, it won the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.</Card.Text>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Modal */}
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="contact-name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group controlId="contact-email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group controlId="contact-message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Bookstore. All rights reserved.</p>
        <p>
          <a href="#" className="text-white">Privacy Policy</a> | <a href="#" className="text-white">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

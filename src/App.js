import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import bg from './img/bg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg +')'}}></div>
      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg
  " width="80%" />
          </Col>
          <Col xs={6}>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg
  " width="80%" />
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg
  " width="80%" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg
  " width="80%" />
          </Col>
          <Col xs={5}>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg
  " width="80%" />
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg
  " width="80%" />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;

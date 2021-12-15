import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import banana from "../../assets/banana.png";
import "./Header.scss";

export const Header = (props) => {
    const [value, setValue] = useState(100);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <img src={banana} alt="bananas" className="header__img"></img>
                    <p className="header__description">{value}</p>
                    <Button variant="outline-secondary" onClick={() => setValue(value + 10)}>+</Button>
                </Container>
            </Navbar>
        </>
    )
}
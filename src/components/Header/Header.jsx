import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import banana from "../../assets/banana.png";
import "./Header.scss";


export const Header = (props) => {
    const [count, setCount] = useState(100);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href='build'>Build</Nav.Link>
                        <div className="header">
                            <img src={banana} alt="bananas" className="header__img"></img>
                            <p className="header__description">{count}</p>
                            <Button variant="outline-secondary" onClick={() => setCount(count + 10)}>+</Button>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
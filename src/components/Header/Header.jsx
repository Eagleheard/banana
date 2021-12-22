import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "./Header.scss";


export const Header = ({banana, count, addBanana}) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href='build'>Build</Nav.Link>
                        <div className="header">
                            <img src={banana} alt="bananas" className="header__img"></img>
                            <p className="header__description">{count}</p>
                            <Button variant="outline-secondary" onClick={addBanana}>+</Button>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
    return (
        <div className="App">
            <Navbar className='fixed-top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        React Bootstrap
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart <span className='text-danger'>{props.count}</span></Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
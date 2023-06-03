import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  


function Navbarbody() {

    return (
<Navbar bg="primary" expand="md">  
    <Container>  
        <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
        <Nav.Link href="/PostList">PostList</Nav.Link>  
        <Nav.Link href="/UserSpecifics">UserSpecifics</Nav.Link> 
        <Nav.Link href="/AboutMe">AboutMe</Nav.Link>  
        </Nav>  
        </Navbar.Collapse>  
    </Container>  
</Navbar>  
    )
}

export default Navbarbody;

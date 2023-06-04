import 'bootstrap/dist/css/bootstrap.min.css';  
import { useEffect, useState } from 'react';
import {Nav, Navbar, Container, NavDropdown,Form,Button} from 'react-bootstrap';  
import { useSelector, useDispatch } from 'react-redux';
import { serarchPosts, getPosts } from '../redux/actions/actionCreator';


function Navbarbody() {
    const [search,setSearch] = useState("");
    const dispatch = useDispatch();
    const handler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const searchSend = () => {
        console.log(search);
        dispatch(serarchPosts(search));
    }


    useEffect(()=>{
        if(search===""){
            dispatch(getPosts())
        }
    },[search])
    return (
<Navbar bg="primary" expand="md">  
    <Container>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
        <Nav.Link href="/PostList">PostList</Nav.Link>  
        <Nav.Link href="/UserSpecifics">UserSpecifics</Nav.Link> 
        <Nav.Link href="/AboutMe">AboutMe</Nav.Link>  
        </Nav>  
        <Form className="d-flex">
            <Form.Control
            onChange={(e)=>handler(e)}
            value={search}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button onClick={searchSend} variant="outline-dark">Search</Button>
        </Form>

        </Navbar.Collapse>  
    </Container>  
</Navbar>  
    )
}

export default Navbarbody;

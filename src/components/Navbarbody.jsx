import 'bootstrap/dist/css/bootstrap.min.css';  
import { useEffect, useState } from 'react';
import {Nav, Navbar, Container, NavDropdown,Form,Button, Toast} from 'react-bootstrap';  
import { useSelector, useDispatch } from 'react-redux';
import { serarchPosts, getPosts } from '../redux/actions/actionCreator';


function Navbarbody() {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
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
<Navbar bg="primary" expand="true">  
    <Container>  
        <Navbar.Toggle onClick={toggleShowA} aria-controls="basic-navbar-nav" /> 
        <Toast style={{position:"absolute",marginTop:"16vh",zIndex:"10",padding:"1vh 2vw"}} show={showA} onClose={toggleShowA}>
        <Nav className="me-auto">  
        <Nav.Link href="/PostList">PostList</Nav.Link>  
        <Nav.Link href="/UserSpecifics">UserSpecifics</Nav.Link> 
        </Nav> 
        </Toast>  
 
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
    </Container>  
</Navbar>  
    )
}

export default Navbarbody;

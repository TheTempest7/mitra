import 'bootstrap/dist/css/bootstrap.min.css';  
import { useEffect, useState } from 'react';
import { Nav, Navbar, Container, Form, Button, Toast } from 'react-bootstrap';  
import {  useDispatch } from 'react-redux';
import { serarchPosts, getPosts, sortPosts } from '../redux/actions/actionCreator';
import { useMediaQuery } from 'react-responsive';
import useNavbarBody from '../hooks/useNavbarBody';

function Navbarbody() {
    const  { showA, toggleShowA, search, sortTitlePost, searchSend, handler } = useNavbarBody();
    const tiny = useMediaQuery({ query: '(max-width: 400px)' })

    const styles = {
        searchBar : {
            width:"100px"
        },
        searchBarHuge:{
        }
    }

    // const [showA, setShowA] = useState(false);
    // const toggleShowA = () => setShowA(!showA);
    // const [search,setSearch] = useState("");
    // const dispatch = useDispatch();
    // const handler = (e) => {
    //     setSearch(e.target.value);
    // }


    // const sortTitlePost = () => {
    //     dispatch(sortPosts())
    //     }
        

    // const searchSend = () => {
    //     dispatch(serarchPosts(search));
    // }


    // useEffect(()=>{
    //     if(search===""){
    //         dispatch(getPosts())
    //     }
    // },[search])
    return (
<Navbar  bg="primary" expand="true">  
    <Container>  
        <Navbar.Toggle onClick={toggleShowA} aria-controls="basic-navbar-nav" /> 
        <Toast style={{backgroundColor:"white",
        position:"absolute",top:"50px",zIndex:"10",
        padding:"1vh 2vw",maxWidth:"200px"}} show={showA} onClose={toggleShowA}>
        <Nav className="me-auto">  
        <Nav.Link href="/PostList">PostList</Nav.Link>  
        <Nav.Link href="/AboutMe">AboutMe</Nav.Link>
        </Nav>
        <Toast.Body style={{padding:"0",display:"flex",flexWrap:"wrap",
        justifyContent:"space-between", marginTop:"1vh" }}>
        <svg onClick={()=>sortTitlePost()} height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 272.383 272.383" xmlSpace="preserve">  
            <g>
	            <g>
		            <path style={{fill:"#010002"}} d="M223.214,152.723h-32.237c16.306-20.152,26.76-47.195,26.76-71.415
			C217.737,36.474,181.262,0,136.428,0S55.114,36.474,55.114,81.309c0,24.22,10.454,51.263,26.76,71.415H49.164
			c-14.86,0-28.544,7.468-36.599,19.972c-5.673,8.811-6.864,24.242-3.535,45.868l4.259,27.701
			c2.246,14.647,15.621,26.118,30.437,26.118h184.928c14.816,0,28.191-11.471,30.442-26.118l4.259-27.701
			c3.329-21.626,2.138-37.056-3.535-45.868C251.758,160.191,238.073,152.723,223.214,152.723z M248.342,244.616
			c-1.409,9.154-10.427,16.888-19.689,16.888H43.725c-9.263,0-18.281-7.734-19.689-16.888l-4.259-27.701
			c-2.828-18.389-2.143-31.998,1.931-38.324c6.043-9.388,16.312-14.99,27.456-14.99h42.838
			c12.901,11.988,28.229,19.668,44.421,19.668s31.525-7.68,44.421-19.668h42.37c11.145,0,21.414,5.602,27.456,14.985
			c4.079,6.326,4.759,19.94,1.931,38.324L248.342,244.616z M207.408,81.309c0,24.438-12.276,52.786-30.263,71.415
			c-1.86,1.925-3.775,3.737-5.749,5.439c-2.29,1.974-4.64,3.813-7.065,5.439c-8.686,5.831-18.145,9.339-27.908,9.339
			s-19.216-3.508-27.902-9.339c-2.426-1.626-4.775-3.465-7.065-5.439c-1.974-1.702-3.889-3.514-5.749-5.439
			c-17.987-18.629-30.263-46.972-30.263-71.415c0-39.14,31.84-70.985,70.985-70.985S207.408,42.169,207.408,81.309z"/>
	            </g>
            </g>
        </svg>
        <p style={{flexG:"1"}}>Yegor</p>
        <p>140145</p>
        </Toast.Body>
        </Toast>  
        <Form className="d-flex">
            <Form.Control style={tiny?styles.searchBar:styles.searchBarHuge}
            onChange={(e)=>handler(e)}
            value={search}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button onClick={searchSend} variant="outline-dark">Search</Button>
        </Form>
        <Button onClick={sortTitlePost} variant="outline-dark">Sort</Button>
    </Container>  
</Navbar>  
    )
}

export default Navbarbody;

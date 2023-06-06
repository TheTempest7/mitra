import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from "react-redux";
import { getComments, blockComments } from '../../redux/actions/actionCreator';
import { useEffect, useState, useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from "react-router";
import { PostComments } from './PostComments';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useMediaQuery } from 'react-responsive'
import { Overlay } from 'react-bootstrap';
import { Loader } from '../Loader/Loader';


export const PostItem = ({body,title,id,userId}) =>{


    const fullHD = useMediaQuery({ query: '(min-width: 1079px)' })
    const middle = useMediaQuery({ query: '(min-width: 775px)' })
    // const isPortrait = useMediaQuery({ query: '(max-width: 1224px)' })
    // const isRetina = useMediaQuery({ query: '(max-width: 1224px)' })
    
    const url = "https://img.uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png";
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {currentComments,postID,toggleComments} = useSelector(store => store.comments)
    const errorComments = useSelector(store=>store.errors.errorsCommemt);
    console.log(currentComments,postID,toggleComments);
    const commentsHandler = () =>{
            setTimeout(()=>dispatch(getComments(id)),500)
        
    }

    const commentBlockHandler = () => {
        dispatch(blockComments());
    }
    const redirect = () => {
        navigate('/UserSpecifics',{state:{body,title,id,userId}})
    }

    const styles = {
        fullHD:{
            display:"flex", justifyContent:'center',flexBasis:"33.3%",border:"none",
        },
        middle:{
            display:"flex", justifyContent:'center',backgroundColor:"blue",flexBasis:"50%"
        },
        small:{
            display:"flex", justifyContent:'center',backgroundColor:"blue",flexBasis:"100%"
        },
        title:{
            "&::after":{
                content:"123",
                position:"relative",
                zIndex:100
            }
    }
    }

    // popup
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => {
        setShowA(!showA);
    };

    const buttonClick = () =>{
        if(!toggleComments && !showA){
            commentBlockHandler();
            toggleShowA();
            commentsHandler();
        } else if(toggleComments && showA){
            commentBlockHandler();
            toggleShowA();
        }
    }

    return(
    <ListGroup.Item style={fullHD?styles.fullHD:middle?styles.middle:styles.small}>
        <Card style={{padding:"1vh 2vw" }}>
            <Card.Img variant="top" style={{ width: '25%',margin:"0 auto" }}  
            src={url} onClick={()=>redirect()} />
                <Card.Body style={{backgroundColor:"yellow",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"}}>
                        <Card.Title style={styles.title} >
                            {title}
                        </Card.Title>
                        <Card.Text style={{flexGrow:"1"}}>
                            {body}
                        </Card.Text>
                        <Col style={{flexShrink:"1",display:"flex",alignItems:"flex-end"}}>
                            <Button onClick={()=>{buttonClick()}} className="mb-2">
                                {!showA ? "Show Comments" : "Hide Comments"}
                            </Button>
                        </Col>
                        <PostComments toggleShowA={toggleShowA}
                        postID={postID} 
                        currentComments={currentComments} 
                        id={id}
                        showA={showA} />
                        {errorComments&&
                        toggleComments&& 
                        showA&& 
                        <h3 
                        style={{position:"absolute",
                        backgroundColor:"white",
                        marginTop:"30vh",
                        zIndex:"11",
                        padding:"1vh 2vw",
                        border:"solid 1px blue",
                        borderRadius:"20px",}}>
                        {errorComments}</h3>}
                </Card.Body>
        </Card>
    </ListGroup.Item>
    )
}
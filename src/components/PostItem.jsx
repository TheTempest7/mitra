import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from "react-redux";
import { getComments } from '../redux/actions/actionCreator';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Loader } from './Loader/Loader';

export const PostItem = ({body,title,id}) =>{
    const [curtain,setCurtain] = useState(false);
    const dispatch = useDispatch();
    const {currentComments,postID} = useSelector(store => store.comments)
    console.log(currentComments,postID);
    const commentsHandler = () =>{
        if(currentComments.length && postID===id){
            setCurtain(prev=>!prev)
        } else {
            setTimeout(()=>dispatch(getComments(id)),500)
            setCurtain(true)
        }
        
    }




    return(
    <ListGroup.Item style={{display:"flex", justifyContent:'center'}}>
        <Card style={{ width: '60vw' }}>
            <Card.Img variant="top" style={{ width: '18rem' }}  src="https://img.uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        {/* <Button onClick={commentsHandler} variant="primary">Comments</Button>
                        { curtain &&
                        <ListGroup>
                            {currentComments?.map((i)=>{
                                if(i.postId === id) return <ListGroup.Item key={i.id-1000}>{i.email}</ListGroup.Item>
                                })}
                        </ListGroup>
                        } */}
                        
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <Button onClick={commentsHandler} variant="primary">Comments</Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        {(!currentComments.length || postID!==id) ? <Loader/>
                                        :
                                        currentComments.map((i)=>{
                                        if(i.postId === id) 
                                        return <ListGroup.Item key={i.id-1000}>{i.email}</ListGroup.Item>
                                        })}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                </Card.Body>
        </Card>
    </ListGroup.Item>
    )
}
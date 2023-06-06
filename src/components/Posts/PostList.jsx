import { useEffect, useState, useCallback } from "react";
import { useSelector,useDispatch } from "react-redux";
import {getPosts} from "../../redux/actions/actionCreator";
import ListGroup from 'react-bootstrap/ListGroup';
import { PostItem } from "./PostItem";
import { Loader } from "../Loader/Loader";
import { Container } from "react-bootstrap";

function PostList({page,errorPost}) {

const store = useSelector(store => store);
const posts = useSelector(store => store.posts.posts);
console.log(errorPost);



const dispatch = useDispatch();

useEffect(()=>{
  setTimeout(()=>dispatch(getPosts(page)),1000) ;
},[page])



return (<Container style={{display:"flex",justifyContent:"center",marginTop:"5vh"}}>
        { posts.length ? <ListGroup style={{display:"flex", flexWrap:"wrap",flexDirection:"row"}} >
                {posts?.map((i)=>{
                return <PostItem key={i.id} body={i.body} title={i.title} id={i.id} userId={i.userId} />
                })}
                </ListGroup> :
                errorPost ? <h2>{errorPost}</h2> :
        <Loader/>
        }
        </Container>
)
}

export default PostList;

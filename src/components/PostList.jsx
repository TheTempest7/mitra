import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {getPosts} from "../redux/actions/actionCreator";
import ListGroup from 'react-bootstrap/ListGroup';
import { PostItem } from "./PostItem";

function PostList() {
const store = useSelector(store => store)
const posts = useSelector(store => store.posts.posts)

console.log(store);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getPosts());
},[])



return (
    <div style={{margin:"0px auto",width:"80vw"}}>
        PostList
        <ListGroup style={{width:"30vw",margin:"0px auto"}}>
                {posts?.map((i)=>{
            return <PostItem key={i.id} body={i.body} title={i.title} id={i.id} />
        })}
        </ListGroup>
    </div>
)
}

export default PostList;

import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {getPosts} from "../../redux/actions/actionCreator";
import ListGroup from 'react-bootstrap/ListGroup';
import { PostItem } from "./PostItem";
import { Loader } from "../Loader/Loader";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function PostList({page,errorPost}) {

const posts = useSelector(store => store.posts.posts);
const dispatch = useDispatch();



useEffect(()=>{
        setTimeout(()=>dispatch(getPosts(page)),1000) ;
},[page])


const small = useMediaQuery({ query: "(min-width: 600px)" })

const styles = {
        container: {
                display:"flex",
                justifyContent:"center",
                marginTop:"5vh"
        },
        error :{
                maxWidth:"80%",
                textAlign:"center",
                paddingBottom:"15%",
                fontSize: "50px",
                fontWeight: "600",
                background: "linear-gradient(to left, #553c9a, #b393d3)",
                color: "transparent",
                "WebkitBackgroundClip": "text",
        },
        errorAdaptive: {
                maxWidth:"80%",
                textAlign:"center",
                paddingBottom:"15%",
                fontSize: "28px",
                fontWeight: "600",
                background: "linear-gradient(to left, #553c9a, #b393d3)",
                color: "transparent",
                "WebkitBackgroundClip": "text",
        },
        commentsList: {
                display:"flex", 
                flexWrap:"wrap",
                flexDirection:"row"
        },

}


return (<Container style={styles.container}>
                { posts.length ? 
                <ListGroup style={styles.commentsList} >
                        {posts?.map((i)=>{
                        return <PostItem key={i.id} body={i.body} 
                        title={i.title} id={i.id} userId={i.userId} />
                        })}
                </ListGroup> :
                errorPost ? 
                <h3 style={small?styles.error:styles.errorAdaptive}>{errorPost}</h3> :
                <Loader/>
                }
        </Container>
        )
}

export default PostList;

import { useLocation} from "react-router";
import { useSelector } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import { PostItem } from "./Posts/PostItem";
import {Nav} from "react-bootstrap";
import { Loader } from "./Loader/Loader";

function UserSpecifics() {
    const location = useLocation();
    const posts = useSelector(store => store.posts.posts);

    return (
    <Container style={{marginTop:"5vh",display:"flex",justifyContent:"center"}}>
        { posts.length?
        <div>
        <Nav.Link style={{display:"flex",justifyContent:"center",whiteSpace:"nowrap",border:"solid 1px blue",padding:"1vh 2vw", width:"230px",borderRadius:"20px"}} href="/PostList">Get back to list of posts</Nav.Link>
            <ListGroup style={{display:"flex", flexWrap:"wrap",flexDirection:"row",marginTop:"5vh"}}>
                {posts?.map((i)=>{
            return <PostItem key={i.id} body={i.body} title={i.title} id={i.id} userId={i.userId} />
            })}
            </ListGroup>
        </div>
        :
        <Loader />
        }
    </Container>
    )
    }
    
    export default UserSpecifics;
    
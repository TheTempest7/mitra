import { useSelector } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import { PostItem } from "./Posts/PostItem";
import {Nav} from "react-bootstrap";
import { Loader } from "./Loader/Loader";
import { useNavigate } from "react-router";

function UserSpecifics() {
    const navigate = useNavigate();
    const posts = useSelector(store => store.posts.posts);

    const styles = {
        container: {
            marginTop:"5vh",
            display:"flex",
            justifyContent:"center",
        },
        link: {
            display:"flex",
            justifyContent:"center",
            whiteSpace:"nowrap",
            border:"solid 1px blue",
            padding:"1vh 2vw",
            width:"230px",
            borderRadius:"20px"
        },
        listFather: {
            display:"flex", 
            flexWrap:"wrap",
            flexDirection:"row",
            marginTop:"5vh"
        },
    }
    const backToPost = ()  => {
        navigate("/");
    }
    return (
    <Container style={styles.container}>
        { posts.length?
        <div>
        <Nav.Link style={styles.link} onClick={backToPost} >
            Get back to list of posts
        </Nav.Link>
        <ListGroup style={styles.listFather}>
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
    
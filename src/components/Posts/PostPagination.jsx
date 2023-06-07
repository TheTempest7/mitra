import Pagination from "react-bootstrap/Pagination";
import PostList from "./PostList";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import usePostPagination from "../../hooks/usePostPagination";

function PostPagination() {

    const errorPost = useSelector(store =>store.errors.errorsPosts);
    const { page, items } = usePostPagination()


return (
    <Pagination style={{display:"flex",flexDirection:"column"}}>
        <Container style={{display:"flex",justifyContent:"center",width:"100%",marginTop:"5vh"}}>
                    {!errorPost && items}
        </Container>
        <PostList page={page} errorPost={errorPost}/>
    </Pagination>
    )
}


export default PostPagination;

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import PostList from './PostList';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function PostPagination() {
    const [page, setPage] = useState(1);
    const errorPost = useSelector(store =>store.errors.errorsPosts);
    const handleChangePage = (page)=>{
        setPage(page);
    }
    let total = 10;
    let items = [];

    items.unshift(<Pagination.First  key="first" onClick={()=>handleChangePage(1)}/>)
    if(page>1) {
        items.push(
            <Pagination.Prev key="prev" onClick={()=>handleChangePage(page-1)}/>)
    }
    


for(let pages = 1; pages <= total; pages++) {
    if(page===pages){
        if(1<page){
            items.push(
                <Pagination.Item  key={pages-1} data-page={pages-1}  onClick={()=>handleChangePage(page-1)}>
                    {pages-1}
                </Pagination.Item>
                )
        }
        items.push(
            <Pagination.Item  key={pages} data-page={pages} active={pages === page} onClick={()=>handleChangePage(pages)}>
                {pages}
            </Pagination.Item>
            )
        if(page<10){
            items.push(
                <Pagination.Item  key={pages+1} data-page={pages+1}  onClick={()=>handleChangePage(page+1)}>
                    {pages+1}
                </Pagination.Item>
                )
            }
    }

}


if(page < total){
    items.push(
    <Pagination.Next key="next" onClick={()=>handleChangePage(page+1)}/>)
}

items.push(<Pagination.Last  key="last" onClick={()=>handleChangePage(10)}/>)

return (
    <Pagination style={{display:'flex',flexDirection:"column"}}>
        <Container style={{display:'flex',justifyContent:'center',width:"100%",marginTop:"5vh"}}>
                    {!errorPost && items}
        </Container>
        <PostList page={page} errorPost={errorPost}/>
    </Pagination>
    )
}


export default PostPagination;

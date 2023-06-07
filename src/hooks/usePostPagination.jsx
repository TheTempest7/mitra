import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";

export default function usePostPagination() {
    const [page, setPage] = useState(1);
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

return { page, items };
}
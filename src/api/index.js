import axios from "axios";
import { useSelector } from "react-redux";

export const getPosts = async (values) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${values}`)
    return res;
}  



export const getComments = async (values) => {
        console.log(values);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${values}`)
        return res;
    }  
    


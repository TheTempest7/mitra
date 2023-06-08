import axios from "axios";

export const getPosts = async (values) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${values}`)
    return res;
}  



export const getComments = async (values) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${values}`)
        return res;
    }  
    


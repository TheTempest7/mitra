import axios from "axios";
import { useSelector } from "react-redux";

export const getPosts = async () => {
try{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res;
} catch (e) {
    return e;
}
}  



export const getComments = async (values) => {
    try{
        console.log(values);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${values}`)
        return res;
    } catch (e) {
        return e;
    }
    }  
    


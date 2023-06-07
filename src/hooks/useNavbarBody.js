import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { serarchPosts, getPosts, sortPosts } from "../redux/actions/actionCreator";

export default function useNavbarBody() {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [search,setSearch] = useState("");
    const dispatch = useDispatch();
    const handler = (e) => {
        setSearch(e.target.value);
    }


    const sortTitlePost = () => {
        dispatch(sortPosts())
        }
        

    const searchSend = () => {
        dispatch(serarchPosts(search));
    }


    useEffect(()=>{
        if(search===""){
            dispatch(getPosts())
        }
    },[search])

    return { showA, toggleShowA, search, sortTitlePost, searchSend, handler }
}
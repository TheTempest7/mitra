import { useDispatch } from "react-redux";
import {  blockComments, start } from "../redux/actions/actionCreator";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function usePostItem({ body, title, id, userId, toggleComments, currentComments }) {
    const [showA, setShowA] = useState(false);
    const navigate = useNavigate();
    const toggleShowA = () => {
        setShowA(!showA);
    };

    const dispatch = useDispatch();
    const commentsHandler = () =>{
        setTimeout(()=>dispatch(start(id)),500)
    }
    const commentBlockHandler = () => {
        dispatch(blockComments());
    }
    const redirect = () => {
        navigate("/UserSpecifics",{state:{body,title,id,userId}})
    }

    const buttonClick = () =>{
        if(!toggleComments && !showA){
            commentBlockHandler();
            toggleShowA();
            commentsHandler();
        } else if(toggleComments && showA){
            commentBlockHandler();
            toggleShowA();
        }
    }
    return { showA ,toggleShowA,buttonClick, redirect };
}


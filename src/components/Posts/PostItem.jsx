import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { PostComments } from "./PostComments";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive"
import { url } from "../../redux/constants";
import usePostItem from "../../hooks/usePostItem";


export const PostItem = React.memo(({body,title,id,userId}) =>{

    const {currentComments,postID,toggleComments} = useSelector(store => store.comments)
    const errorComments = useSelector(store=>store.errors.errorsCommemt);

    const { showA, toggleShowA,buttonClick, redirect } = usePostItem({body,title,id,userId,toggleComments});

    const fullHD = useMediaQuery({ query: "(min-width: 1079px)" })
    const middle = useMediaQuery({ query: "(min-width: 775px)" })



    const styles = {
        fullHD: {
            display:"flex", justifyContent:"center",flexBasis:"33.3%",border:"none",
        },
        middle: {
            display:"flex", justifyContent:"center",backgroundColor:"blue",flexBasis:"50%"
        },
        small: {
            display:"flex", justifyContent:"center",backgroundColor:"blue",flexBasis:"100%"
        },
        card: {
            padding:"1vh 2vw" 
        },
        cardImg: { 
            width: "25%",
            margin:"0 auto",
        },
        cardBody: {
            position:"relative",
            backgroundColor:"yellow",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
        },
        cardText: {
            flexGrow:"1"
        },
        btnBody: {
            display:"flex",
            flexShrink:"1",
            alignItems:"flex-end",
        },
        error: {
            position:"absolute",
            bottom:"-20%",
            zIndex:"11",
            backgroundColor:"white",
            padding:"1vh 2vw",
            border:"solid 1px blue",
            borderRadius:"20px",
        },
    }


    return(
    <ListGroup.Item style={fullHD?styles.fullHD:middle?styles.middle:styles.small}>
        <Card style={styles.card}>
            <Card.Img variant="top" style={styles.cardImg}  
            src={url} onClick={()=>redirect()} />
                <Card.Body style={styles.cardBody}>
                    <Card.Title style={styles.title} >
                        {title}
                    </Card.Title>
                    <Card.Text style={styles.cardText}>
                        {body}
                    </Card.Text>
                    <Col style={styles.btnBody}>
                        <Button onClick={()=>{buttonClick()}} className="mb-2">
                            {!showA ? "Show Comments" : "Hide Comments"}
                        </Button>
                    </Col>
                    <PostComments toggleShowA={toggleShowA}
                    postID={postID} 
                    currentComments={currentComments} 
                    id={id}
                    showA={showA} />
                    {errorComments&&
                    toggleComments&& 
                    showA&& 
                    <h3 
                    style={styles.error}>
                    {errorComments}
                    </h3>}
                </Card.Body>
        </Card>
    </ListGroup.Item>
    )
})
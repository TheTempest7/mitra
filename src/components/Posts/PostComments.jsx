
import { Loader } from '../Loader/Loader';
import Toast from 'react-bootstrap/Toast';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const PostComments = ({currentComments, id,toggleShowA,showA}) => {
    const styles = {
        fatherContainer: {
            display:"flex",
            justifyContent:"center",
            position:'absolute',
            zIndex:'10',
            flexWrap:'wrap',
            width:'100%',
            top:"90%"
        },
        toast: {
            background:"white"
        },
        loaderContainer: {
            display:"flex",
            justifyContent:"center",
            margin:" -20% -20% 0 0 ",
        }
    }
    const postID = useSelector(store=>store.comments.postID)
    console.log(postID,currentComments[0]?.['postId']);

    return ( showA&&  
    <Container style={styles.fatherContainer}>
        { (postID===id) ?
        <Container>
                {currentComments?.map((i)=>{
                return <Toast 
                        style={styles.toast}  key={i.id-1000} 
                        show={showA} onClose={toggleShowA}>
                        <Toast.Body>
                            {i.email}
                        </Toast.Body>
                        <Toast.Body>
                            {i.body}
                        </Toast.Body>
                        </Toast>
                })}
        </Container> :
        <Container style={styles.loaderContainer} >
            <Loader/>
        </Container>
        }
    </Container> 
    )}


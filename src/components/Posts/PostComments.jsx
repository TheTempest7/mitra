import ListGroup from 'react-bootstrap/ListGroup';
import { Loader } from '../Loader/Loader';
import Toast from 'react-bootstrap/Toast';
import { Container } from 'react-bootstrap';

export const PostComments = ({currentComments, postID, id,toggleShowA,showA}) => {
    // <Container style={{display:"flex",justifyContent:"center",
    // position:'absolute',zIndex:'10',flexWrap:'wrap',width:'100%',marginTop:"22vh"}}>
    return ( showA&&
    <Container style={{display:"flex",justifyContent:"center",
    position:'absolute',zIndex:'10',flexWrap:'wrap',width:'100%',top:"90%"}}>
        { postID===id ?
        <Container>
                {currentComments?.map((i)=>{
                return <Toast 
                        style={{background:"white"}}  key={i.id-1000} 
                        show={showA} onClose={toggleShowA}>
                        <Toast.Body>
                            {i.email}
                        </Toast.Body>
                        <Toast.Body>
                            {i.body}
                        </Toast.Body>
                        </Toast>
                })}
        </Container>:
        <Container style={{display:"flex",justifyContent:"center",margin:"-20% -20% 0 0 "}} >
            <Loader/>
        </Container>
    }
    </Container> 
    )}

    // <Container style={{display:"flex",justifyContent:"center",}} >
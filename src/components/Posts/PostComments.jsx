import ListGroup from 'react-bootstrap/ListGroup';
import { Loader } from '../Loader/Loader';
import Toast from 'react-bootstrap/Toast';

export const PostComments = ({currentComments, postID, id,toggleShowA,showA}) => {
    
    return ( 
    <div style={{display:"flex",position:'absolute',zIndex:'10',flexWrap:'wrap',maxWidth:'100%',marginTop:"30vh"}}>
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
    </div>
    
    )
}
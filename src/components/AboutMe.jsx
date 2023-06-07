import { Card, Col, Container, Image, Row } from "react-bootstrap";
import photoMe from "../assets/photoMe.jpg";
import { useMediaQuery } from "react-responsive";



function AboutMe() {
    const miData = [
        ["Telegram","@The Tempest"],
        ["Phone","8-985-962-39-46"],
        ["Email","galaxy.yegor.uaz.s4@gmail.com"],
        ["Address","Gzhel, Novaya 21, Moscow region, Ramensky district, Russia"],
        ["Date of birth","September 11, 1996"],
        ["Name","Khrapunov"],
    ]
    const middle = useMediaQuery({ query: '(min-width: 775px)' })
    const small = useMediaQuery({ query: '(max-width: 600px)' })
    const styles = {
        photo:{backgroundColor:"green",flex:"1 0 15%"},
        photoAdaptive:{flex:"0 0 40%", margin:"0 auto"},
        text:{backgroundColor:"grey",flex:"1 0 50%"},
        textAdaptive:{order:"3"},
        info:{flex:"1 0 20%"},
        infoAdaptive:{flexBasis:"100%"},
        listInfoItem:{display:"flex"},
        listInfoItemFirst:{display:"flex",justifyContent:"flex-start",flexBasis:"40%"},
        listInfoItemSecond:{display:"flex",justifyContent:"flex-start",flexBasis:"60%"},
    }
    return (
        <Container>
            <Row style={{display:"flex",flexWrap:"wrap"}}>
                <div style={small?styles.photoAdaptive:styles.photo}>
                    <Image style={{maxWidth:"100%"}} src={photoMe} rounded />
                </div>
                <div  style={middle?styles.text:styles.textAdaptive}>
                    <Card style={{ width: "100%" }}>
                        <Card.Body>
                            <Card.Title>Khrapunov Yegor</Card.Title>
                            <Card.Text>
                                I was born on a cold autumn night, when even time seemed to stand still, 
                                in my native Gzhel, Moscow region. I do not remember much of my early 
                                childhood, but my mom said I was a very active, curious, and communicative 
                                child. I would ask dozens of questions each minute, even without waiting for 
                                the answers. I suppose this is why my parents offered me books and 
                                educational movies as early as my third birthday.
                            </Card.Text>
                            <Card.Text>
                                Unfortunately, my thirst for knowledge did  come to an end when 
                                I was at school. I was passionate about history and science. 
                                Also I was lazy and this laziness exceed my passione.
                                Since that time my brain had been sleeping and I did not tackle the study.
                            </Card.Text>
                            <Card.Text>
                                As a student I had a sense of purpose and almost every times I got what i want.
                                I graduated University but only when I had finished it I undestood that i want to
                                become fronted developer. Thanks God I met my friend which put me on my way. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div  style={small?styles.infoAdaptive:styles.info}>
                <ul>
                    {miData.reverse().map((i=>{
                        return <li style={styles.listInfoItem} key={i[0]}>
                        <Col  style={styles.listInfoItemFirst}>{i[0]}</Col>
                        <Col style={styles.listInfoItemSecond} >{i[1]}</Col>
                    </li>
                    }))}
                </ul>
                </div>
            </Row>
        </Container>
    )
    }
    
    export default AboutMe;
    
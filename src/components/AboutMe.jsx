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
    const middle = useMediaQuery({ query: '(max-width: 999px)' })
    const small = useMediaQuery({ query: '(max-width: 600px)' })
    const styles = {
        upestContainer:{
            marginTop:"5vh"
        },
        photo:{
            flex:"0 0 15%"
        },
        photoAdaptive:{
            flex:"0 0 40%", 
            margin:"0 auto"
        },
        photoMiddle: {
            flex:"0 0 40%", 
            margin:"0 auto",
        },
        text:{
            flex:"1 0 50%",
            whiteSpace:"no-wrap",
            order:"2",
        },
        textAdaptive: {
            order:"3",
            flex:"1 0 50%"
        },
        textMiddle: {
            marginTop:"2vh",
        },
        info:{
            flex:"1 0 30%",
            padding: "10px 20px",
            order:"3",
        },
        infoAdaptive:{
            flexBasis:"90%",
            order:"2",
            margin:"2vh auto",
        },
        infoMiddle: {
            flexBasis:"100%",
            marginTop:"2vh",
        },
        ul: {
            padding:"0",
        },
        listInfoItem:{
            display:"flex",
            marginTop:"10px"
        },
        listInfoItemFirst:{
            display:"flex",
            justifyContent:"flex-start",
            flexBasis:"30%"
        },
        listInfoItemSecond:{
            display:"flex",
            justifyContent:"flex-start",
            flexBasis:"70%"},
        row: {
            display:"flex",
            flexWrap:"wrap",
        },
        img: {
            maxWidth:"100%",
        },
        card: {
            width: "100%",
        }
    }
    return (
        <Container style={styles.upestContainer}>
            <Row style={styles.row}>
                <div style={small?styles.photoAdaptive:middle? styles.photoMiddle:styles.photo}>
                    <Image style={styles.img} src={photoMe} rounded />
                </div>
                <div  style={small?styles.text:middle?styles.textMiddle:styles.textAdaptive}>
                    <Card style={styles.card}>
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
                            <Card.Text>
                                Of course, I understand that life is not just a bed of roses, and challenges and 
                                hardships are an integral element of life. Since I realize that I am the only person 
                                whom responded for my future, immersing into Wev-dev has become an important 
                                challenge for me. I combine a part-time job and full-time study to earn my knowledge 
                                and some money. I feel triumphant at the beginning of every month when I receive 
                                my salary and plan how I am going to develope my own skills. 
                            </Card.Text>
                            <Card.Text>
                                I have come to believe that two main factors determine success. 
                                The first is a person’s determination and will to succeed. Are you ready 
                                to make sacrifices to achieve your goal, like working and studying at the 
                                same time? Are you prepared to recover after failure and proceed to your goal 
                                again? Without strong internal motivation, it is nearly impossible to become 
                                successful.
                            </Card.Text>
                            <Card.Text>
                                Equally important is the support of people around you. Being determined to succeed
                                does not mean alienating everyone and stepping on other people to 
                                achieve your goal. On the contrary, success is about recognizing your 
                                weaknesses and accepting support from people who genuinely want to help you. 
                                For instance, if it were not for my parents’ support of my educational endeavors, 
                                I might not be a decent human being. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <Card  style={small?styles.infoAdaptive:middle?styles.infoMiddle:styles.info}>
                <ul style={styles.ul}>
                    {miData.reverse().map((i=>{
                        return <li style={styles.listInfoItem} key={i[0]}>
                        <Col  style={styles.listInfoItemFirst}>{i[0]+":"}</Col>
                        <Col style={styles.listInfoItemSecond} >{i[1]}</Col>
                    </li>
                    }))}
                </ul>
                </Card>
            </Row>
        </Container>
    )
    }
    
    export default AboutMe;
    
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
                            <Card.Text>Autobiography
                                My name is Michael Smith and I was born on the 30th of August, 1967 in Long Beach,
California. My parents were Eddie Smith and Joan Smith. Both of my parents are deceased.
My mom died at the age of 57 in 1994 from lung cancer which was the result of smoking her
whole lifetime. My father died at the age of 69 in 2006 from a massive heart attack, which was
also the likely result from a lifetime of smoking. Fortunately I have been smart enough to avoid
that bad habit.
 My early childhood was a typical middle class environment circa the 1960's. My dad
worked for Simpson Buick as a parts salesman and my mom was a stay at home mother. I had a
happy, normal childhood as an only child, leaving me somewhat spoiled. My mom and dad
divorced when I was eight years old and both remarried within a year or so of the divorce. My
dad remained married to my stepmom Bev until his death. My mom would marry two more
times. My first stepdad Vince became a big part of my life and I maintained close contact with
him until his death in 2006, two days after my real dad died. Yes, that was a very bad week,
losing both of my dads.
 Growing up with split parents was not especially difficult since each of my parents kept
me out of their divorce and they got along fine at events where both of them were present. I
lived with my mom until I was 16 and in high school. By my sophomore year in high school I
had begun to hang around with friends that got me into a lot of trouble with a number of things
including smoking pot and drinking. I was rapidly heading down a negative path, but was
fortunate enough to notice it before I had done any serious damage. I moved in with my dad and
changed high schools and friends.
 With the fresh start I was able to finish high school without further incident, graduating
from Downey High School in 1985. Even with my questionable behavior earlier in my life I had
always wanted to become a police officer, which I could not do until I was 21 years of age. So,
to kill time and stay out of trouble I joined the United States Army immediately after turning 18.
I joined the army and was sent to Fort Benning, Georgia for basic training, advanced infantry
training, and finally airborne jump school. After becoming a paratrooper (11B1P, Airborne
Infantry) I was assigned to Bravo Company, 2/325th Airborne Infantry Regiment.
 What stands out the most about my time in the army are the extremes that you are
subjected to. Some of my happiest memories and some of my worst memories come from my
time in the army. One thing that I am sure of is that it shaped me to become the man that I am
now. The army really straightened me out from my troubled teenage years. When I came out of
the army I had put on 50 solid pounds and was old enough to attempt to become a police officer.
 Fresh out of the service I waited on tables and did some bartending while in the long
application process for law enforcement. I applied to the Long Beach Police Department, the
Los Angles Police Department, and the California Highway Patrol. My hope and dream was to
be accepted by the Long Beach Police Department and it came true for me. I was accepted into
the Long Beach Police Academy on July 10th, 1988. My military experience definitely made the
police academy much easier for me. I was already conditioned to withstand the extreme stress of
the police academy. The only difficulty I had in the police academy was a number of injuries
suffered during it, but I was able to continue in spite of them. I attribute this to my time in the
army as well because I had learned to "Play through the pain." During the time that I was in the
police academy I was living with my girlfriend. Shortly after graduating from the police
academy we made the mistake of getting married. As so happens in law enforcement we ended
up divorced two years later, which was a mutual decision and really the best thing for both of us.
Fortunately, (and unlike many other police officers, both male and female) she is my only exwife.
 After five months I graduated from the police academy and was assigned as a police
rookie in training for the Patrol Division. My field training period went quickly and I was able
to complete field training without any problems. It became immediately clear to me that I had
made the right career choice. The excitement of being a police officer lived up to all my
expectations. I literally enjoyed the police work so much that I looked forward to going to work
and I could not believe that I was getting paid for it. The job only got better as I became more
experienced, leading to more confidence that I could handle the job regardless of what came
along.
 During my career in law enforcement I worked in patrol as an officer, later as a field
training officer, and finally as a patrol sergeant. Over the course of my career I also worked in
detectives, in the Gang Enforcement Section, and as a detective sergeant. One of the best things
about being a police officer is that once what you are doing becomes routine or boring, you can
change what you are doing. By the time I had been a patrol officer and field training officer for
five years and beginning to burn out on it I was able to go to detectives. This gave me a new
dimension of experience and I learned a lot during my years as a detective, particularly while I
was assigned to the Gang Enforcement Section. I did this for several years and eventually
became an acting detective sergeant in gangs.
 After my time in detectives and the Gang Enforcement Section I decided to return to the
patrol division as a patrol sergeant. Of all of the assignments I had as a police officer being a
patrol sergeant was easily my favorite. In law enforcement sergeants are the middle men in
between the patrol officers (aka "The Troops") and the lieutenants and above (aka "The Brass").
Unlike many careers where being the middle man is a bad thing ("Being stuck in the middle"), in
law enforcement I found the opposite to be true. As a patrol sergeant you don't get stuck with
the routine paper calls that the patrol officers do, but you can still handle calls that are
interesting, require a supervisor, or are more complicated. While being a sergeant does bring
around a lot of paperwork, it is still less than the ranks above you often have to handle.
 My retirement from law enforcement came sooner than I would have liked because of a
number of injuries sustained in the line of duty. The primary of these injuries required having
my spine fused at the L5-S1. This injury alone was enough to end my law enforcement career. I
miss my time in law enforcement nearly every day. But, I try to look at it as getting to do a
whole career of doing something that I loved. My father worked at the same place for 30 years
and hated every day of it. I got to spend a slightly shortened career doing something I loved.
 Since my retirement I have run a private investigations company that I built from the
ground up. I'm now going to school for a bachelor's degree in psychology and will move on to a
master's degree afterwards. I am planning to go into counseling for police officers and military
veterans. Both police and military are fields that are likely to cause the need for counseling, but
each of those careers are often closed to outsiders. As a veteran of both the military and law
enforcement I believe that I have the insight to be helpful to both groups, and share a common
ground with them that may make it easier for them to open up to me.
 I will close out this autobiography with the most important thing in my life, my family. I
am married to my best friend, Amanda. We knew each other and were just close friends for the
first five or six years but we became a couple nine years ago and have been married for eight
years. Neither of us can have children, but we have a large family of dogs and cats that are our
"kids." All of our animals are rescues, some of which we have bottle fed from birth when the
animal's mother died during birth. It makes us a happy, close knit pack of two people, three
dogs, and two cats. 
                            </Card.Text>
                            <Card.Text>Some quick example text to build on 
                                the card title and make up the
                                bulk of the card's content.
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
    
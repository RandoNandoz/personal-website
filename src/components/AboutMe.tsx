import './AboutMe.css'
import {Body1, Card, CardHeader, Link} from "@fluentui/react-components";
import MyPictureURL from '../assets/mypicture.png'


const AboutMe = () => {
    return (
        <Card className={'card'}>
            <CardHeader image={<img alt={"A picture of the creator of the website"} src={MyPictureURL}/>}
                        header={
                            <h2>About me</h2>
                        }
                        description={
                            <em>Second year CS @UBC, Power Platform Developer at Teck Resources, CPSC 210 TA</em>
                        }
            />
            <Body1>
                Hi, I'm Randy, I just wrapped up my second year of computer science, minoring in mathematics at UBC's beautiful
                Vancouver campus.

                <br/><br/>

                Currently, I'm on co-op working at <Link href={"https://www.teck.com/"}>Teck Resources</Link> in their
                Projects
                Group as a Power Platform Developer. It's a fantastic mix of business analyst and software developer.

                <br/><br/>

                This summer, starting May 2025, I will be working on Explotest together with <Link href={'https://wevie.dev/'}>Kevin Liu</Link>, an NSERC USRA summer research project originally made
                by <Link href={'https://www.linkedin.com/in/zihao-huang-a24931206'}>Zihao Huang</Link> under the supervision of <Link href={'https://www.carolemieux.com/'}>Dr. Caroline Lemieux</Link>!
                    
                <br/><br/>

                On the side, I also am a teaching assistant at UBC's Department of Computer Science for CPSC 210, a
                second year software engineering course which teaches object-oriented design in Java. Incredibly fun to
                work with students and carry my passion for computer science! In the summer, I might switch courses and
                help teach CPSC 213, a second-semester computer systems course.
            </Body1>
        </Card>
    )
}

export default AboutMe
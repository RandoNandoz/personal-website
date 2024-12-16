import './AboutMe.css'
import {Card, CardHeader} from "@fluentui/react-components";
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
            <p>
                Hi, I'm Randy, I'm in my second of computer science at UBC's beautiful Vancouver campus. I hope to minor
                in mathematics. More stuff will be here soon I promise.
            </p>
        </Card>
    )
}

export default AboutMe
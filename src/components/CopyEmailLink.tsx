import {useState} from "react";
import {Button, Link} from "@fluentui/react-components";
import {CopyRegular} from "@fluentui/react-icons";


interface ClickableEmailButtonProps {
    email: string
}

interface Clickable {
    description: string
}


const CopyEmailLink = ({email}: ClickableEmailButtonProps) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const copyTextToClipboard = (text: string) => {
        return () => {
            navigator.clipboard.writeText(text)
                .then(() => {
                    setClicked(!clicked)
                    console.log("Successfully copied email to clipboard!")
                })
                .catch(err => {
                    console.log(`Unable to copy email to clipboard, error: ${err}`)
                })
        }
    }

    console.log(clicked)

    return (

        clicked ? <div className={"emailHBox"}>
                <Link
                    onClick={() => {
                        setClicked(!clicked)
                    }} href={`mailto:${email}`}>{email}
                </Link>
                <Button icon={<CopyRegular/>} onClick={copyTextToClipboard(email)} appearance={"transparent"}/>
            </div> :

            <Link onClick={handleClick}>Email</Link>

    )
}

export default CopyEmailLink;
import './Header.css'
import {Link} from "@fluentui/react-components";
import CopyEmailLink from "./CopyEmailLink.tsx";

const Header = () => {
    return (
        <header>
            <section>
                <h1>Randy Zhu</h1>
            </section>
            <section>
                <CopyEmailLink email={"randy@randyzhu.com"}/>
                <Link href={"https://www.linkedin.com/in/rzhu08/"}>LinkedIn</Link>
                <Link href={"https://www.instagram.com/randyyyyzhu/"}>Instagram</Link>
            </section>
        </header>
    )
}

export default Header
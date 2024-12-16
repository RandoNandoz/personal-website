import './App.css'
import {FluentProvider, webLightTheme} from "@fluentui/react-components";
import Header from "./components/Header.tsx";
import AboutMe from "./components/AboutMe.tsx";

const App = () => {
    return (
        <FluentProvider
            theme={webLightTheme}
        >
            <div className={'container'}>
                <Header/>
                <AboutMe/>
            </div>
        </FluentProvider>
    )
}

export default App

import './App.css'
import {FluentProvider, webLightTheme} from "@fluentui/react-components";
import Header from "./components/Header.tsx";

const App = () => {
    return (
        <FluentProvider
            theme={webLightTheme}
        >
            <div>
                <Header/>
            </div>
        </FluentProvider>
    )
}

export default App

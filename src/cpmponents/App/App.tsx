import React from 'react';
import Layout from "../Layout/Layout";
import "./App.scss";
import Button from "../../ua-kit/Button/Button";
import Icon from "../../ua-kit/Icon/Icon";


const App: React.FC = () => {
    const handleButtonClick = (event: React.MouseEvent) => {
        console.log("Button click event", event);
    }
    return (
        <div className="App">
            <Layout>
                <h1>React TypeScript UI Library</h1>
                <hr/>
                <h2>Button</h2>
                <Button typeButton={"button"} isDisabled={false} onClick={handleButtonClick}> Send </Button>
                <hr/>
                <h2>Icon SVG</h2>
                <Icon type={"Pdf"}/>
            </Layout>
        </div>
    )
}
export default App

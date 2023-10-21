import React from 'react';
import Layout from "../Layout/Layout";
import "./App.scss";
import Button from "../../ua-kit/Button/Button";

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
                <Button isDisabled={false} onClick={handleButtonClick}> Send </Button>
            </Layout>
        </div>
    )
}
export default App

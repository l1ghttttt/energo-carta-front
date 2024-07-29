import React from 'react';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Collapsible from "../Collapsible/Collapsible";
import YMap from "../YMap/MyMap";

const App = () => {
    return (
        <div>
            <div
                className={`absolute flex flex-col items-center justify-center z-[5] top-[30px] left-[30px] gap-[50px]`}>
                <Header/>
                <Menu/>
            </div>
            <Collapsible/>
            <YMap/>

        </div>
    );
};

export default App;
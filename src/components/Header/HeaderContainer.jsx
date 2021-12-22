import { Header } from "./Header";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Content } from "../Content/Content";
import { BuildContainer } from "../Build/BuildContainer";
import banana from "../../assets/banana.png";

export const HeaderContainer = (props) => {
    const [count, setCount] = useState(100);
    const eatBanana = (cost) => {
        return setCount(count - parseInt(cost));
    }
    const addBanana = () => {
        return setCount(count + parseInt(10));
    }
    return (
        <>
            <Header count={parseInt(count)} addBanana={addBanana} banana={banana} />
            <Routes>
                <Route path="/build" element={<BuildContainer eatBanana={eatBanana} count={parseInt(count)} />}></Route>
                <Route path="/content" element={<Content />}></Route>
            </Routes>
        </>
    )
}
import axios from "axios";
import { useEffect } from "react";
import './Main.css';
import Header from '../Home/Header';
import Body from '../Home/Body';

const Main = () => {
    /*
    axios.get("/api/tests").then((res)=>(
        console.log(res.data)
    ))*/

    return (
        <div className="full_container">
            <Header />
            <Body />
        </div>
    )
}
export default Main;
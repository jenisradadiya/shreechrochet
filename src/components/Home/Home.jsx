import { useEffect } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDatafromapi } from "../../utils/api";

const Home = () => {

    useEffect(() =>{
        getCategories()
    },[])

    const getCategories = () => {
        fetchDatafromapi("/api/categories").then((res) => console.log(res))
    } 
    return (<div >
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category/>
            <Products headingText="Popular Product"/>
            </div>
        </div>
    </div>);
};

export default Home;

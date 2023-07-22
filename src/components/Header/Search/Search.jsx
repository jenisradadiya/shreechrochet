import {MdClose} from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({ setshowSearch }) => {
    return <div className="search-model">
        <div className="form-filed">
            <input type="text" autoFocus placeholder="Search for prodcts" />
            <MdClose onClick={( ) => setshowSearch(false) }/>
        </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">product name</span>
                        <span className="desc">product desc</span>
                
                    </div> 
                </div>
            </div>
        </div>
    </div>;
};

export default Search;

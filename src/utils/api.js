import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer" + 
        process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDatafromapi = async (URL) =>{
    try{
        const {data}= await axios.get(
            process.ENV.REACT_APP_SHREE_URL + URL,
            params
            );
        return data;
    }catch(error){
        console.log(error)
        return error;
    }
    
};
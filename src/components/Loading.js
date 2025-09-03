import { useEffect, useState } from "react";

const Loading = () => {
    const [error,setError]=useState(false);
    useEffect(()=>{
        const time=setTimeout(() => {
            setError(true);
        }, 9000);
    },[]);
    if(!error){
        return (
        <div className="loading-container">
        <div className="spinner">
        </div>
        <p>⚠️ Check Your Internet Connection again</p>
        </div>
    );
    }
    else{
        return(
            <div className="loading-container">
                <p>Network error. Please verify your settings.</p>
                <button className="search-btn">Retry</button>
            </div>
        );
    }
};

export default Loading;
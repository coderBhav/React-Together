import { useEffect, useState } from "react";

const useBio=()=>{
    const [ficData,useFicData]=useState(" ");
    useEffect(()=>{
        const fetchFiction=async()=>{
            const res = await fetch("https://openlibrary.org/subjects/biography.json");
            const data = await res.json();
            useFicData(data);
        }
        fetchFiction();
    },[]);
    return ficData;
};
export default useBio;
import { useEffect, useState } from "react";

const useFiction=()=>{
    const [ficData,useFicData]=useState(" ");
    useEffect(()=>{
        const fetchFiction=async()=>{
            const res = await fetch("https://openlibrary.org/subjects/fiction.json");
            const data = await res.json();
            useFicData(data);
        }
        fetchFiction();
    },[]);
    return ficData;
};
export default useFiction;
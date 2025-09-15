import { useEffect, useState } from "react";

const useNon=()=>{
    const [ficData,useFicData]=useState(" ");
    useEffect(()=>{
        const fetchFiction=async()=>{
            const res = await fetch("https://openlibrary.org/subjects/nonfiction.json");
            const data = await res.json();
            useFicData(data);
        }
        fetchFiction();
    },[]);
    return ficData;
};
export default useNon;
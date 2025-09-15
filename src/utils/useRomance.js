import { useEffect, useState } from "react";

const useRomance=()=>{
    const [ficData,useFicData]=useState("");
    useEffect(()=>{
        const fetchRomance=async()=>{
            const res=await fetch("https://openlibrary.org/subjects/romance.json");
            const data = await res.json();
            useFicData(data);
        }
        fetchRomance();
    },[]);
    return ficData;
};

export default useRomance;
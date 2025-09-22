import Bio from "./Bio";
import Fiction from "./Fiction";
import Nonfic from "./Nonfic";
import Romantic from "./Romantic";
import { useState } from "react";
const New = () => {
    const [acc,setAcc]=useState("");
    const toggle=(bookGenre)=>{
        setAcc((prev)=>(prev===bookGenre?"":bookGenre));
    };
    return(
        <div>
            <Fiction acc={acc=== "Fiction"} toggle={() => toggle("Fiction")} />
            <Romantic acc={acc ==="Romantic"} toggle={() => toggle("Romantic")} />
            <Bio acc={acc === "Bio"} toggle={() => toggle("Bio")} />
            <Nonfic acc={acc=== "Nonfic"} toggle={() => toggle("Nonfic")} />
        </div>
    )
};

export default New;

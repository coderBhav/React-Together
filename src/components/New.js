import Bio from "./Bio";
import Fiction from "./Fiction";
import Nonfic from "./Nonfic";
import Romantic from "./Romantic";

const New = () => {
    return(
        <div>
            <Fiction/>
            <Romantic/>
            <Bio/>
            <Nonfic/>
        </div>
    )
};

export default New;

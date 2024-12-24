import { useRef, useState } from "react";
import "./Mizu5.css";

const Mizu5 = () => {
    const mizu5 = useRef(null);
    const bell = useRef(new Audio("./bell.mp3"));
    const [count, setCount] = useState(0);

    const toll = () => {
        const image = mizu5.current;

        if (image) {
            const clonedBell = bell.current.cloneNode(true);
            clonedBell.play();

            image.style.transition = "none";
            image.style.opacity = "1";
            image.offsetHeight;

            image.style.transition = "opacity 7s ease-out";
            image.style.opacity = "0";

            setCount(count + 1);
        }
    };

    return (
        <>
            <div className="intro">{count <= 0 ? "Tap anywhere" : ""}</div>
            <div className="container" ref={mizu5} onClick={toll}>
                <img src="./bells.png" className="bells" />
                <div className="count">{count}</div>
            </div>
        </>
    );
};

export default Mizu5;

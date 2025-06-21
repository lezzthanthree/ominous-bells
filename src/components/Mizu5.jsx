import { useRef, useState } from "react";
import "./Mizu5.css";

const Mizu5 = () => {
    const mizu5 = useRef(null);
    const [count, setCount] = useState(0);

    const toll = () => {
        const image = mizu5.current;

        if (image) {
            const bellVariants = Math.floor(Math.random() * 2000);
            console.log(bellVariants);
            (bellVariants === 1003 | count === 1003)
                ? new Audio("./bell1.mp3").play()
                : new Audio("./bell.mp3").play();

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
            {count <= 0 && <div className="intro">Tap anywhere</div>}
            <div className="container" ref={mizu5} onClick={toll}>
                <img src="./bells.png" className="bells" />
                <div className="count">{count}</div>
            </div>
        </>
    );
};

export default Mizu5;

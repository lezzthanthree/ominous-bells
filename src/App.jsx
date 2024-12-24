import { useEffect } from "react";
import Mizu5 from "./components/Mizu5";

function App() {
    useEffect(() => {
        const handleContextMenu = (event) => event.preventDefault();
        const handleTouchStart = (event) => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("touchstart", handleTouchStart);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <>
            <Mizu5 />
        </>
    );
}

export default App;

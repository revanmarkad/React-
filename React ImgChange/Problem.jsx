import React, { useState } from "react";
 

function App() {
    const [showImage1, setShowImage1] = useState(true);

    const handleImageChange = () => {
        setShowImage1((prevValue) => !prevValue);
    };

    return (
        <div className="menDiv">
            <div className="img-panel">
                {showImage1 ? (
                    <img src="https://4kwallpapers.com/images/walls/thumbs_3t/2517.jpg" alt="Display" />
                ) : (
                    <img src=" https://picstatio.com/large/knnzsy/sunset-tree-landscape-nature-wallpaper.jpg" alt="Display" />
                )}
            </div>
            <div className="btn-panel">
                <button onClick={handleImageChange}>Change Pic</button>
            </div>
        </div>
    );
}

export default App;

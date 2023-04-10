import React, { useState } from "react";

function App() {
    // create state to track whether the mouse is currently over the h1 element
    const [isMouseOver, setIsMouseOver] = useState(false);

    // create state to store the logs of when the mouse entered and exited the h1 element
    const [logData, setLogData] = useState([]);

    // function to handle mouse over event
    const handleMouseOver = () => {
        setIsMouseOver(true);

        // add a log entry for when the mouse entered the h1 element
        const now = new Date();
        setLogData([...logData, { event: "Mouse Over", timestamp: now.toLocaleString() }]);
    };

    // function to handle mouse out event
    const handleMouseOut = () => {
        setIsMouseOver(false);

        // add a log entry for when the mouse exited the h1 element
        const now = new Date();
        setLogData([...logData, { event: "Mouse Out", timestamp: now.toLocaleString() }]);
    };

    // function to render the log table rows
    const renderLogRows = () => {
        return logData.map((row, index) => (
            <tr key={index}>
                <td>{row.event}</td>
                <td>{row.timestamp}</td>
            </tr>
        ));
    };

    return (
        <div>
            <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover over me</h1>
            {isMouseOver ? <h2>The mouse is currently over the h1 element</h2> : null}
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLogRows()}
                </tbody>
            </table>
        </div>
    );
}

export default App;

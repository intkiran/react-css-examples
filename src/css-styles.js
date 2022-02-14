import React from "react";

class CssStyles extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <button
                style={{
                    fontSize: "1rem",
                    fontWeight: 1.5,
                    lineHeight: 1.5,
                    color: "white",
                    borderRadius: "25px",
                    backgroundColor: "blue",
                    padding: "0 2em",
                    outline: "none",
                    border: "none"
                }} type="button">Click Me!</button>
        </div >

    }
}
export default CssStyles;
import React from "react";
import "./styles.css"
class ButtonStyle extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <button className="clickButton"
                type="button">Click</button>
        </div >

    }
}
export default ButtonStyle;

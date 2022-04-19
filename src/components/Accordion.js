import React, {useState, useRef} from "react";
import "./Accordion.css"
import Chevron from "./Chevron";

function Accordion(props){
    const[active, setActive] = useState("");
    const[Height, setHeight] = useState("0px");
    const[Rotate, setRotate] = useState("accordion-icon")

    const content = useRef(null);

    function toggleAccordion(){
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === "active" ? "accordion-icon" : "accordion-icon rotate");
    }

    return (
        <div className="accordion-section">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion-title">{props.title}</p>
                <Chevron className={`${Rotate}`} width={10} fill={"#777"} />
            </button>
            <div ref={content} style={{maxHeight: `${Height}`}} className="accordion-content">
                <div
                    className="accordion-text"
                    dangerouslySetInnerHTML={{__html: props.content}}
                />
            </div>
        </div>
    );
}

export default Accordion;
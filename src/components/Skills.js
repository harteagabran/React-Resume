import Section from "./Section.js";

export default function Skills({front, back}) {
    var frontEnd = front.join(" - ");
    var backEnd = back.join(" - ");
    return (
        <div>
        <Section title="Skills"/>
        <p className="text-gray text-center mb-0">{backEnd}</p>
        <p className="text-gray text-center">{frontEnd}</p>
        </div>
    )
    
}
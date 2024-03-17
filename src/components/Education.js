import Section from "./Section";

export default function Education({schools = []}) {
    return (
        <div id="education">
        <Section title="Education" />
        <ul class="mx-4">
            {schools.map(school => (
             <li>{school}</li>   
            ))}
        </ul>
        </div>
    )
}
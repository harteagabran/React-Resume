import Section from "./Section";

export default function Education({schools = []}) {
    return (
        <div id="education">
        <Section title="Education" />
        <ul class="mx-4 mb-0">
            {schools.map(school => (
             <li>
                {school.line}  -  {school.gpa} / 4.0 accumulative gpa
            </li>   
            ))}
        </ul>
        </div>
    )
}
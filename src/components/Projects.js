import Section from "./Section";
import Project from "./Project";

export default function Projects({projects = []}) {
    console.log(projects);
    return (
        <div id="projects">
        <Section title="Projects" />
        {projects.map(pro => (
            <Project project={pro} />
        ))}
        </div>
    )
}
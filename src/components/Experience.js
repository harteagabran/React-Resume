import Section from "./Section";
import FlushList from "./FlushList.js";

export default function Experience({companies = []}) {
    return (
        <div id="experience">
        <Section title="Experience" />
        <div className="company">
        {companies.map(comp => (
            <>
            <div className="row mx-4 fs-6">
                <p className="col-8 mb-0"><b className="me-4">{comp.job}</b><i className="text-gray">- {comp.position}</i></p>
                <span className="col text-end">{comp.timeframe}</span>
            </div>
            <ul className="list-group list-group-flush mx-3 fs-6">
                <FlushList points={comp.points} />
            </ul>
            </>
        ))}
        </div>
        </div>
    )
}
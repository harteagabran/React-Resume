import Section from "./Section";

export default function Objective(quote) {
    return (
        <div>
        <Section title="Objective" />
        <div className="text-center mx-4">
            <p className="mb-0">{quote.quote}</p>
        </div>
        </div>
    )
}
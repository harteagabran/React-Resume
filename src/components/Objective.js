import Section from "./Section";

export default function Objective(quote) {
    return (
        <div>
        <Section title="Objective" />
        <figure class="text-center mx-4">
            <blockquote className="blockquote">
                <p class="fs-6">{quote.quote}</p>
            </blockquote>
        </figure>
        </div>
    )
}
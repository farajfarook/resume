import { ReactElement } from "react";
import { Keywords, KeywordsProps } from "./keywords";
import { Title, TitleProps } from "./title";

interface ExperienceProps {
    title: TitleProps
    keywords: KeywordsProps
    details: ReactElement[]
}

export function Template(props: ExperienceProps) {
    return (
        <section className="flex flex-col space-y-4 py-4">
            <Title {...props.title} />
            <ul className="ml-4 text-md list-disc">
                {props.details.map((detail, index) => (<li key={index}>{detail}</li>))}
            </ul>
            <Keywords {...props.keywords} />
        </section>
    )
}
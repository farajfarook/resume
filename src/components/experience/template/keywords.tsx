export interface KeywordsProps {
    keywords: string[]
}

export function Keywords(props: KeywordsProps) {
    return (
        <section className="flex flex-row justify-end divide-x divide-dashed text-xs font-bold">
            {props.keywords.map((keyword, index) => (
                <div key={index} className="px-2">{keyword}</div>
            ))}
        </section>
    )
}
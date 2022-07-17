import { ReactElement } from "react";
import { Template } from "./template";
import { KeywordsProps } from "./template/keywords";
import { TitleProps } from "./template/title";

const title: TitleProps = {
    company: "PageUp Ltd",
    title: "Development Team Lead",
    from: "November 2020",
    to: "October 2021",
}

const keywords: KeywordsProps = {
    keywords: [
        "People Leadership",
        "Agile",
        "Kanban",
        "AWS",
        ".NET",
        "BDD"
    ]
}

const details: ReactElement[] = [
    (<p>Plan, execute and deliver <span className="font-medium">$50m revenue generating SaaS product</span> - PageUp Recruitment System.</p>),
    (<p>Implement <span className="font-medium">agile practices and processes</span> to ensure delivery and product quality.</p>),
    (<p>Build close relationship with <span className="font-medium">Stakeholders, Product Managers and Cross Functional Team members</span> and to ensure alignment.</p>),
    (<p><span className="font-medium">Mentor and Coach Leads</span> and Engineers.</p>),
    (<p><span className="font-medium">Set team objectives</span> to alignment with tech and company vision.</p>)
]

export function PageUpTeamLead() {
    return (
        <Template title={title} keywords={keywords} details={details} />
    )
}
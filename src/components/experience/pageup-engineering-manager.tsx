import { ReactElement } from "react";
import { Template } from "./template";
import { KeywordsProps } from "./template/keywords";
import { TitleProps } from "./template/title";

const title: TitleProps = {
    company: "PageUp Ltd",
    title: "Development Manager",
    from: "October 2021",
    to: "Present",
}

const keywords: KeywordsProps = {
    keywords: [
        "Technology",
        "People Leadership",
        "Agile Delivery",
        "Stakeholder Management"
    ]
}

const details: ReactElement[] = [
    (<p><span className="font-medium">Lead a tribe of Engineering Teams (20+)</span>, with the focus on short to mid term revenue growth.</p>),
    (<p>Mentor &amp; Coach Managers and Engineers.</p>),
    (<p>Build <span className="font-medium">high performing - engaging</span> teams, with individual's growth and happiness.</p>),
    (<p>Defining <span className="font-medium">technology roadmap and vision</span>.</p>),
    (<p>Managing expectations and actively communicating with <span className="font-medium">internal and external stakeholders</span> including partners and integration providers.</p>),
    (<p>Coach and Implement Agile processes to streamline delivery.</p>),
    (<p>Work closely with Senior Product, Design and CPO to ensure Product Road-map is align to business vision.</p>),
    (<p>Advocate company wide <span className="font-medium">Platform Health</span> and influence teams across the business for continuous improvement.</p>)
]

export function PageUpEngineeringManager() {
    return (
        <Template title={title} keywords={keywords} details={details} />
    )
}
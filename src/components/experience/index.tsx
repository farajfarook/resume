import { PageUpEngineeringManager } from "./pageup-engineering-manager";
import { PageUpTeamLead } from "./pageup-team-lead";

export function Experience() {
    return (
        <div
            className="w-9/12 divide-y divide dark:divide-gray-700 pr-2 border-t border-dashed dark:border-gray-700">

            <PageUpEngineeringManager />
            <PageUpTeamLead />
            <section className="flex flex-col py-4">
                <div className="flex flex-row space-x-4">
                    <div className="bg-carsales color-exact bg-contain bg-center bg-no-repeat w-12 h-12 mt-1">
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Engineering Team Lead</div>
                        <div className="text-sm">Carsales.com.au Ltd</div>
                        <div className="text-xs">April 2019 - November 2020</div>
                    </div>
                </div>
                <ul className="mt-4 ml-4 text-md list-disc">
                    <li>
                        <span className="font-medium">Plan, execute and deliver</span>
                        real-time market intelligence tool for car dealers – Live Market.
                    </li>
                    <li>
                        <span className="font-medium">Mentor and coach</span>
                        team members on their career goals.
                    </li>
                    <li>
                        Work with product managers on planning and delivery.
                    </li>
                    <li>
                        <span className="font-medium">Architect the technical solution and motivate the
                            team</span> on migrate legacy application to Microservices.
                    </li>
                    <li>
                        Implement <span className="font-medium">agile practices and processes</span> to deliver
                        value and align goals.
                    </li>
                    <li>Integrate QA and DevOps culture inside the team.</li>
                </ul>
                <section className="mt-4 flex flex-row justify-end divide-x divide-dashed text-xs font-bold">
                    <div className="px-2">People Leadership</div>
                    <div className="px-2">Agile</div>
                    <div className="px-2">SCRUM</div>
                    <div className="px-2">AWS</div>
                    <div className="px-2">.NET</div>
                    <div className="px-2">Angular</div>
                </section>
            </section>
            <section className="flex flex-col py-4">
                <div className="flex flex-row space-x-4">
                    <div className="bg-carsales color-exact bg-contain bg-center bg-no-repeat w-12 h-12 mt-1"></div>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Senior Software Engineer</div>
                        <div className="text-sm">Carsales.com.au Ltd</div>
                        <div className="text-xs">February 2018 – April 2019</div>
                    </div>
                </div>
                <ul className="mt-4 ml-4 text-md list-disc">
                    <li>Mobile REST API backend for Android, IOS and Angular clients.</li>
                    <li>Front-end single page application development in angular.</li>
                </ul>
                <section className="mt-4 flex flex-row justify-end divide-x divide-dashed text-xs font-bold">
                    <div className="px-2">AWS</div>
                    <div className="px-2">.NET</div>
                    <div className="px-2">Angular</div>
                    <div className="px-2">DDD</div>
                    <div className="px-2">CQRS</div>
                    <div className="px-2">Kanban</div>
                    <div className="px-2">Bamboo</div>
                </section>
            </section>
            <section className="flex flex-col py-4">
                <div className="flex flex-row space-x-4">
                    <div className="bg-flip color-exact bg-contain bg-center bg-no-repeat w-12 h-12 mt-1"></div>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Senior Software Engineer</div>
                        <div className="text-sm">FLIP Group Pvt Ltd</div>
                        <div className="text-xs">March 2017 – February 2018</div>
                    </div>
                </div>
                <ul className="mt-4 ml-4 text-md list-disc">
                    <li>Oneflo.com.au – Developing a logistic management system.</li>
                    <li>Designing and architecture legacy system as micro services.</li>
                </ul>
                <section className="mt-4 flex flex-row justify-end divide-x divide-dashed text-xs font-bold">
                    <div className="px-2">.NET</div>
                    <div className="px-2">Angular</div>
                    <div className="px-2">Azure</div>
                    <div className="px-2">OpenID</div>
                    <div className="px-2">Identity Server</div>
                    <div className="px-2">Microservices</div>
                </section>
            </section>
            <section className="flex flex-col py-4">
                <div className="flex flex-row space-x-4">
                    <div className="bg-ifs color-exact bg-contain bg-center bg-no-repeat w-12 h-12 mt-1"></div>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Senior Software Engineer</div>
                        <div className="text-sm">IFS & RnD Pvt Ltd, LK</div>
                        <div className="text-xs">September 2014 – February 2017</div>
                        <div className="text-md font-bold">Software Engineer</div>
                        <div className="text-xs">November 2010 – September 2014</div>
                    </div>
                </div>
                <ul className="mt-4 ml-4 text-md list-disc">
                    <li>Consulting on various ERP implementation projects - Wingroup, Maersk, etc.</li>
                </ul>
                <section className="mt-4 flex flex-row justify-end divide-x divide-dashed text-xs font-bold">
                    <div className="px-2">.NET WCF / MVC</div>
                    <div className="px-2">Integration</div>
                    <div className="px-2">RabbitMQ</div>
                    <div className="px-2">PLSQL</div>
                    <div className="px-2">Java</div>
                    <div className="px-2">Agile</div>
                </section>
            </section>
        </div>
    )
}
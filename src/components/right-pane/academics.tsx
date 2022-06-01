export function Academics() {
    return (
        <section className="divide-y divide-dashed dark:divide-gray-700">
            <div className="flex items-center space-x-2 p-2">
                <span className="iconify" data-icon="heroicons-solid:academic-cap" data-width="18"></span>
                <div className="uppercase text-sm font-medium">Academics</div>
            </div>
            <div className="flex flex-col space-y-4 text-xs p-2">
                <section className="flex flex-col">
                    <div className="font-medium">BSc (Hons) Information Technology</div>
                    <div>SLIIT, LK</div>
                    <div>1st Class, GPA 3.59</div>
                </section>
                <section className="flex flex-col">
                    <div className="font-medium">BSc Computer Systems &amp; Network</div>
                    <div>Curtin University, AU</div>
                    <div>1st Class, GPA 3.68</div>
                </section>
                <section className="flex flex-col">
                    <div className="font-medium">BSc Physics &amp; Statistics</div>
                    <div>University of Colombo, LK</div>
                </section>
                <section className="flex flex-col">
                    <div className="font-medium">Adv Dip in Management Accounting</div>
                    <div>CIMA, UK</div>
                </section>
                <section className="flex flex-col">
                    <div className="font-medium">Cisco Certified Network Associate</div>
                </section>
            </div>
        </section>
    )
}
export function OpenSource() {
    return (
        <section className="divide-y divide-dashed dark:divide-gray-700">
            <section className="flex items-center space-x-2 p-2">
                <span className="iconify" data-icon="logos:opensource" data-width="18"></span>
                <div className="uppercase text-sm font-medium">Opensource</div>
            </section>
            <section className="flex flex-col space-y-4 text-xs p-2">
                <section className="flex flex-col">
                    <div className="font-medium">.NET Libraries for microservices</div>
                    <a href="https://github.com/enbiso/enbiso.nlib">github.com/enbiso/enbiso.nlib</a>
                </section>
                <section className="flex flex-col">
                    <div className="font-medium">ESP firmware for IOT devices</div>
                    <a href="https://github.com/eniot">github.com/eniot</a>
                </section>
            </section>
        </section>
    )
}
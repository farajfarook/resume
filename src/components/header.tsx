export function Header() {
    return (
        <header className="flex items-center w-full">
            <div className="flex flex-col space-y-2 w-full">
                <div className="text-4xl"><span className="font-bold">Faraj</span> Farook</div>
                <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-2 w-full text-sm">
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="iconify" data-icon="ph:address-book-duotone" data-width="20"
                            data-height="20"></span>
                        <div>Melbourne, Victoria 3029</div>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="iconify" data-icon="ph:phone-call-duotone" data-width="20"
                            data-height="20"></span>
                        <a href="tel:+61414424394">+61 414 424 394</a>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="iconify" data-icon="ic:twotone-email" data-width="20" data-height="20"></span>
                        <a href="mailto:farajfarook@gmail.com">farajfarook@gmail.com</a>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="iconify" data-icon="logos:linkedin-icon" data-width="20"
                            data-height="20"></span>
                        <a href="https://www.linkedin.com/in/faraj">linkedin.com/in/faraj</a>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="iconify" data-icon="logos:stackoverflow-icon" data-width="20"
                            data-height="20"></span>
                        <a href="https://www.stackoverflow.com/users/1251350">stackoverflow.com/users/1251350</a>
                        <span className="text-green-600 text-xs">(13k reps)</span>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <span className="iconify" data-icon="ci:github" data-width="20" data-height="20"></span>
                        <a href="https://www.github.com/farajfarook">github.com/farajfarook</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
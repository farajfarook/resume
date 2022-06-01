export interface TitleProps {
    title: string
    company: string
    from: string
    to: string
}

export function Title(props: TitleProps) {
    const { title, company, from, to } = props
    return (
        <div className="flex flex-row space-x-4">
            <div className="bg-pageup color-exact bg-contain bg-center bg-no-repeat w-12 h-12 mt-1"></div>
            <div className="flex flex-col">
                <div className="text-lg font-bold">{title}</div>
                <div className="text-sm">{company}</div>
                <div className="text-xs">{from} - {to}</div>
            </div>
        </div>
    )
}
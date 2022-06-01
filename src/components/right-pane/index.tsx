import { Academics } from "./academics";
import { OpenSource } from "./opensource";
import { Reference } from "./reference";

export function RightPane() {
    return (
        <div className="w-3/12 flex flex-col space-y-4">
            <Academics />
            <OpenSource />
            <Reference />
        </div>
    )
}
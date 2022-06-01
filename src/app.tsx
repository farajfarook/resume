import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { RightPane } from "./components/right-pane";
import { Summary } from "./components/summary";

export default function App() {
    return (
        <main className="dark:bg-black dark:text-gray-100">
            <div className="p-6 mx-auto page max-w-3xl print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-16">
                <div className="flex flex-col space-y-4">
                    <Header />
                    <Summary />
                    <div className="flex flex-row w-full divide-x divide-dashed dark:divide-gray-700">
                        <Experience />
                        <RightPane />
                    </div>
                </div>
            </div>
        </main>
    )
}
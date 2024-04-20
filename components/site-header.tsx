import { ThemeToggle } from "@/components/theme-toggle"

export const SiteHeader = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-background border-b">
            <div className="container flex h-16 items-center justify-between space-x-4">
                <div className="text-2xl">glui</div>
                <ThemeToggle />
            </div>
        </header>
    )
}
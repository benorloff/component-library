import { ThemeToggle } from "@/components/theme-toggle"

export const SiteHeader = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-background border-b">
            <div className="container max-w-screen-2xl flex h-16 items-center justify-between">
                <div className="text-2xl">glui</div>
                <ThemeToggle />
            </div>
        </header>
    )
}
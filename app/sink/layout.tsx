import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Glui Docs",
  description: "Componenet library built on top of Tailwind CSS and React.",
};

export default function SinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-w-screen-2xl">
        <div className="relative pt-16 h-full flex flex-row gap-4">
            <Sidebar />
            <Container>
                {children}
            </Container>
        </div>
    </main>
  );
}

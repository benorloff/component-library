import { Sidebar } from "@/components/gluons/sidebar";
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import { Code } from "bright";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PreviewToolbar } from "@/components/preview-toolbar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Tablet } from "lucide-react";
import { Demo } from "@/components/demo";

const PlaygroundPage = () => {
    return (
        <>
            <div>Sidebar</div>
            <div className="relative w-full min-h-96 border mb-10">
                <Sidebar />
            </div>
            <Demo />
        </>
    )
}

export default PlaygroundPage;
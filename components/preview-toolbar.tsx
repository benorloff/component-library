"use client"

import { Check, Clipboard } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

interface PreviewToolbarProps {
    copyText: string;
};

export const PreviewToolbar = ({
    copyText,
}: PreviewToolbarProps) => {

    const [textCopied, setTextCopied] = useState<boolean>(false);

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(copyText);
            setTextCopied(true);
            // toast.success("Referral link copied to clipboard!", { duration: 3000 });
            setTimeout(() => {
                setTextCopied(false);
            }, 3000);
        } catch (error) {
            // toast.error("Failed to copy referral link to clipboard.");
            console.error(error);
        }
    }

    return (
        <div className="flex justify-between items-center w-full">
            <div>
                Variant
            </div>
            <Button 
                size="icon" 
                variant="outline"
                onClick={handleCopy}
                disabled={textCopied}
            >
                {textCopied ? <Check /> : <Clipboard />}
            </Button>
        </div>
    )
}
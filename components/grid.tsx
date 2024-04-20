import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const gridVariants = cva(
    "grid divide-x divide-y w-full",
    {
        variants: {
            columns: {
                1: "grid-cols-1",
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-4",
                5: "grid-cols-5",
                6: "grid-cols-6",
                7: "grid-cols-7",
                8: "grid-cols-8",
                9: "grid-cols-9",
                10: "grid-cols-10",
            },
        },
        defaultVariants: {
            columns: 3,
        },
    }
);

const Grid = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <div
            ref={ref}
            className={cn("grid grid-cols-3", className)}
            {...props}
        />
    </div>
));
Grid.displayName = "Grid";

const GridCell = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col gap-4", className)}
        {...props}
    />
));
GridCell.displayName = "GridCell";

export {
    Grid,
    GridCell,
};
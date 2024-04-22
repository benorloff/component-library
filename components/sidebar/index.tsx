"use client";

import { Wrapper } from "./wrapper";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export const Sidebar = () => {
    return (
        <Wrapper>
            <Navigation />
            <Footer />
        </Wrapper>
    );
};
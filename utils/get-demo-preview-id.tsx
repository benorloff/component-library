"use client"

let demoContainer: HTMLElement | null = null;

if (typeof document !== 'undefined') {
    demoContainer = document.getElementById("demoPreviewContainer");
    console.log(demoContainer, "demoContainer");
}

export const demoPreviewId = demoContainer;
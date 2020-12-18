import React, { useEffect } from "react";
import { OverlayEditorContextProvider } from "./shared/OverlayEditorContext.js";
import { LayerSelectionContextProvider } from "./shared/LayerSelectionContext.js";
import { AnimationSelectionContextProvider } from "./shared/AnimationSelectionContext.js";
import LayoutChanger from "./components/LayoutChanger.jsx";
import "./OverlayEditor.css";

const OverlayEditor = (props) => {

    useEffect(() => {
        const onWheel = (evt) => { if (evt.ctrlKey) { evt.stopPropagation(); evt.preventDefault(); } };
        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel, { passive: false });
    }, []);

    return (
        <OverlayEditorContextProvider {...props}>
            <LayerSelectionContextProvider>
                <AnimationSelectionContextProvider>
                    <LayoutChanger />
                </AnimationSelectionContextProvider>
            </LayerSelectionContextProvider>
        </OverlayEditorContextProvider>
    );
}

export default OverlayEditor;
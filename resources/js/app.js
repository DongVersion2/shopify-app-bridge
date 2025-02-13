import React from "react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import AppRender from ".";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <AppProvider i18n={{}}>
            <AppRender />
        </AppProvider>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);



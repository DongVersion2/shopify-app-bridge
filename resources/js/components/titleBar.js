import { TitleBar } from "@shopify/app-bridge-react";

export function MyTitleBar() {
    return (
        <TitleBar title="Products">
            <button variant="primary">Primary action</button>
            <button>Secondary action</button>
        </TitleBar>
    );
}

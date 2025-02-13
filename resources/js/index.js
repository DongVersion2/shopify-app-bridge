import React from "react";
import { TitleBar } from "@shopify/app-bridge-react";
import { NavMenu } from "@shopify/app-bridge-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function Templates() {
    return <h1>Content templates page !!!</h1>;
}

export default function AppRender() {
    return (
        <Router>
            <div>
                {/* <h1>Hello world</h1> */}
                <TitleBar title="Products">
                    <button variant="primary">Primary action</button>
                    <button>Secondary action</button>
                </TitleBar>
                <NavMenu>
                    <a href="/" rel="home">
                        Home
                    </a>
                    <a href="/templates">Templates</a>
                    <a href="/settings">Settings</a>
                </NavMenu>

                {/* Route xử lý điều hướng */}
                <Routes>
                    <Route path="/templates" component={Templates} />
                </Routes>
            </div>
        </Router>
    );
}

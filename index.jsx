import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
)
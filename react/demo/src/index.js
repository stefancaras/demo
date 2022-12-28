
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./components/App"
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

ReactDOMClient.createRoot(document.querySelector("#root")).render(<App />)

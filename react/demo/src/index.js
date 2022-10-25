
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import Navbar from "./components/Navbar"
import "./style.css"

ReactDOMClient.createRoot(document.querySelector("#root")).render(<Navbar />)

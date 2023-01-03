import * as ReactDOMClient from 'react-dom/client';
import App from "./App"
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

ReactDOMClient.createRoot(document.querySelector("#root")).render(<App />)

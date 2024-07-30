import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./GifApp";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GifApp />
    </React.StrictMode>
);

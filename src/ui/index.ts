import { mountApp } from "./main";

const params = new URLSearchParams(window.location.search);
const word = params.get("word") ?? "GATO";

mountApp(document.getElementById("app")!, word);

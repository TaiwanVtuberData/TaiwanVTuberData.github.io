import "./style/index.css";
import { render } from "preact";
import { App } from "./components/app";
import { MockService } from "./services/MockService";

if (process.env.NODE_ENV !== "production") {
  MockService();
}

render(<App />, document.getElementById("app"));

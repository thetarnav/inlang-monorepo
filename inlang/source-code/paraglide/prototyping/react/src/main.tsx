import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import * as m from "./messages.ts"

console.log("rendering in plain JS", m.loginButton())

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		{/* <React.StrictMode> */}
		<App />
		{/* </React.StrictMode> */}
	</>,
)

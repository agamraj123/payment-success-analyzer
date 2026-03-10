import { useState } from "react"
import Dashboard from "./pages/Dashboard"

function App() {

  const [darkMode, setDarkMode] = useState(false)

const theme = {
  background: darkMode ? "#121212" : "#f5f5f5",
  color: darkMode ? "white" : "black",
  minHeight: "100vh",
  width: "100%"
};

  return (

    <div style={theme}>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          margin: "20px",
          padding: "10px 20px"
        }}
      >
        Toggle Dark Mode
      </button>

      <Dashboard darkMode={darkMode}/>

    </div>

  )
}

export default App

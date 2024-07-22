import viteLogo from '/logo_capa.png'
import './App.css'
import './index.css' // Asegúrate de importar el archivo CSS aquí

function App() {
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div className="div">
          <p id="h2">Loading....<span id="lol"></span></p>
        </div>
      </div>
    </>
  )
}

export default App

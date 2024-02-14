import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [esUnPresupuestoValido, setEsUnPresupuestoValido] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        esUnPresupuestoValido={esUnPresupuestoValido}
        setEsUnPresupuestoValido={setEsUnPresupuestoValido}
      />
    </div>
  )
}

export default App

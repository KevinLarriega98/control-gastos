import { useState } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import NuevoGastoSVG from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [esUnPresupuestoValido, setEsUnPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        esUnPresupuestoValido={esUnPresupuestoValido}
        setEsUnPresupuestoValido={setEsUnPresupuestoValido}
      />

      {esUnPresupuestoValido && (
        <div className="nuevo-gasto">
          <img src={NuevoGastoSVG} alt="Nuevo Gasto" onClick={handleNuevoGasto} />
        </div>
      )}

      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} />}

    </div>
  )
}

export default App

import { useState } from "react"
import Header from "./components/Header"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal"
import { generarId } from "./helpers"
import NuevoGastoSVG from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [esUnPresupuestoValido, setEsUnPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
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
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img src={NuevoGastoSVG} alt="Nuevo Gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} />}

    </div>
  )
}

export default App

import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarSVG from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
    const [nombreGasto, setNombreGasto] = useState("")
    const [cantidadGasto, setCantidadGasto] = useState("")
    const [categoriaGasto, setCategoriaGasto] = useState("")

    const [mensaje, setMensaje] = useState("")

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if ([nombreGasto, cantidadGasto, categoriaGasto].includes('')) {
            setMensaje("Todos los campos son obligatorios")

            setTimeout(() => {
                setMensaje("")
            }, 2000)

            return
        }

        guardarGasto({nombreGasto, cantidadGasto, categoriaGasto})
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarSVG} alt="Cerrar modal" onClick={ocultarModal} />
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombreGasto">Nombre</label>

                    <input type="text" id='nombreGasto' placeholder='Añade el nombre del gasto' value={nombreGasto} onChange={e => setNombreGasto(e.target.value)} />
                </div>

                <div className='campo'>
                    <label htmlFor="nombreGasto">Cantidad</label>

                    <input type="number" id='cantidadGasto' placeholder='Añade la cantidad del gasto' value={cantidadGasto} onChange={e => setCantidadGasto(Number(e.target.value))} />
                </div>

                <div className='campo'>
                    <label htmlFor="categoriaGasto">Categoría</label>

                    <select id="categoriaGasto" value={categoriaGasto} onChange={e => setCategoriaGasto(Number(e.target.value))}>
                        <option value=""> ---Selecciona una categoría--- </option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="otrosGastos">Otros gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    )
}

export default Modal

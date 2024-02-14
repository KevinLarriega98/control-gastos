import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({ presupuesto, setPresupuesto, esUnPresupuestoValido, setEsUnPresupuestoValido }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {esUnPresupuestoValido ? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setEsUnPresupuestoValido={setEsUnPresupuestoValido}
                />
            )}
        </header>
    )
}

export default Header

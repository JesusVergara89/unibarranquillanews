import React, { useState } from 'react'
import Formgeneral from '../Formcreated/Formgeneral'
import Articlesgeneral from '../Formcreated/Articlesgeneral'
import './SectionScience.css'

const SectionScience = ({ IsLogged, name, lastName, database, storagebase, arrayCollections }) => {

    const [math, setMath] = useState(true);

    const actualizarEstado = (estado, valor) => {
        setMath(estado === "math" ? valor : true);
    }

    return (
        <div className="sections-sciences">

            {math && <h2 className='which-one'>Elige en cual sección quieres escribir el articulo</h2>}

            {math &&
                <div className="extent-btn">
                    <button onClick={() => actualizarEstado("math", false)}>Math</button>
                </div>
            }

            {math ?
                ''
                :
                <div className="sections-sciences-make">

                    <Formgeneral
                        math={math}
                        name={name}
                        lastName={lastName}
                        database={database}
                        storagebase={storagebase}
                        arrayCollections={arrayCollections}
                    />

                    <Articlesgeneral
                        IsLogged={IsLogged}
                        database={database}
                        arrayCollections={arrayCollections}
                    />

                </div>
            }

        </div>
    )
}

export default SectionScience
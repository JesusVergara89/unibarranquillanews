import React from 'react'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9, storage10, storage2, storage3, storage4, storage5, storage6, storage7, storage8, storage9 } from '../../firebaseconfig'
import Formgeneral from './Formgeneral'
import './styles/Componentform.css'
import { useSelector } from 'react-redux'
import Articlesgeneral from './Articlesgeneral'


const Componentform = (
    {
        actualidad
        , cultura
        , deporte
        , investigacion
        , universidad
        , vida
        , eventos
        , entrevistas
        , tecnologia
        , access, IsLogged, setIsLogged,
        off
    }
) => {

    const name = useSelector(state => state.emailSlice)
    const lastName = useSelector(state => state.passwordSlice)

    const closeSesion = () => {
        setIsLogged(false)
    }

    return (
        <article className="component-form">

            {!off &&
                <div className="main_collaborators-welcome-close-sesion">
                    <h3>{`Welcome ${name} ${lastName}`}</h3>
                    <button className='main_collaborators-btn' onClick={closeSesion} >cerrar sesión</button>
                </div>
            }

            <div className="component-form-fill">
                {actualidad && <Formgeneral name={name} lastName={lastName} database={db2} storagebase={storage2} />}

                {cultura && <Formgeneral name={name} lastName={lastName} database={db3} storagebase={storage3} />}

                {deporte && <Formgeneral name={name} lastName={lastName} database={db4} storagebase={storage4} />}

                {investigacion && <Formgeneral name={name} lastName={lastName} database={db5} storagebase={storage5} />}

                {universidad && <Formgeneral name={name} lastName={lastName} database={db6} storagebase={storage6} />}

                {vida && <Formgeneral name={name} lastName={lastName} database={db7} storagebase={storage7} />}

                {eventos && <Formgeneral name={name} lastName={lastName} database={db8} storagebase={storage8} />}

                {entrevistas && <Formgeneral name={name} lastName={lastName} database={db9} storagebase={storage9} />}

                {tecnologia && <Formgeneral name={name} lastName={lastName} database={db10} storagebase={storage10} />}
            </div>

            <div className="components-articles">
                {actualidad && <Articlesgeneral IsLogged={IsLogged} database={db2} />}
                {cultura && <Articlesgeneral IsLogged={IsLogged} database={db3} />}
                {deporte && <Articlesgeneral IsLogged={IsLogged} database={db4} />}
                {investigacion && <Articlesgeneral IsLogged={IsLogged} database={db5} />}
                {universidad && <Articlesgeneral IsLogged={IsLogged} database={db6} />}
                {vida && <Articlesgeneral IsLogged={IsLogged} database={db7} />}
                {eventos && <Articlesgeneral IsLogged={IsLogged} database={db8} />}
                {entrevistas && <Articlesgeneral IsLogged={IsLogged} database={db9} />}
                {tecnologia && <Articlesgeneral IsLogged={IsLogged} database={db10} />}
            </div>

        </article>
    )
}

export default Componentform
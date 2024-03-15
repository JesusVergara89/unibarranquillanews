import React, { useEffect, useState } from 'react'
import { auth2, auth3, auth4, auth5, auth6, auth7, auth8, auth9, auth10, db10, db2, db3, db4, db5, db6, db7, db8, db9, storage10, storage2, storage3, storage4, storage5, storage6, storage7, storage8, storage9, db11, storage11, auth11, db12, storage12, auth12 } from '../../firebaseconfig'
import Formgeneral from './Formgeneral'
import './styles/Componentform.css'
import { useSelector } from 'react-redux'
import Articlesgeneral from './Articlesgeneral'
import SinginAuth from '../Auth/SinginAuth'
import SectionScience from '../ScienceComponents/SectionScience'


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
        , ambiente
        , science
        , IsLogged, setIsLogged,
        off
    }
) => {

    const name = useSelector(state => state.emailSlice)
    const lastName = useSelector(state => state.passwordSlice)

    const closeSesion = () => {
        setIsLogged(false)
    }

    const arrayCollections = ["Math"]

    const [enterregister, setEnterregister] = useState(false)
    const enterToFormPost = () => setEnterregister(true)
    const outToFormPost = () => setEnterregister(false)

    return (
        <article className="component-form">

            {enterregister || off ?
                ''
                :
                <div className='Container-post-form'>
                    <h2 className="Containes-post-rules-of-the-house-form">
                        Inicia sesión para autenticarte
                    </h2>
                    <h3 className='Container-post-rules-form'> o </h3>
                    <h3 className='Container-post-rules-form'>Resgistrate si aún no lo has hecho</h3>
                </div>
            }
            {
                enterregister ?
                    <>

                        {!off &&
                            <div className="main_collaborators-welcome-close-sesion">
                                <h3>{`Welcome ${name} ${lastName}`}</h3>
                                <button className='main_collaborators-btn' onClick={closeSesion} >cerrar sesión</button>
                            </div>
                        }

                        <div className="component-form-fill">
                            {actualidad && <Formgeneral name={name} lastName={lastName} database={db2} storagebase={storage2} arrayCollections={arrayCollections}/>}

                            {cultura && <Formgeneral name={name} lastName={lastName} database={db3} storagebase={storage3} arrayCollections={arrayCollections}/>}

                            {deporte && <Formgeneral name={name} lastName={lastName} database={db4} storagebase={storage4} arrayCollections={arrayCollections}/>}

                            {investigacion && <Formgeneral name={name} lastName={lastName} database={db5} storagebase={storage5} arrayCollections={arrayCollections}/>}

                            {universidad && <Formgeneral name={name} lastName={lastName} database={db6} storagebase={storage6} arrayCollections={arrayCollections}/>}

                            {vida && <Formgeneral name={name} lastName={lastName} database={db7} storagebase={storage7} arrayCollections={arrayCollections}/>}

                            {eventos && <Formgeneral name={name} lastName={lastName} database={db8} storagebase={storage8} arrayCollections={arrayCollections}/>}

                            {entrevistas && <Formgeneral name={name} lastName={lastName} database={db9} storagebase={storage9} arrayCollections={arrayCollections}/>}

                            {tecnologia && <Formgeneral name={name} lastName={lastName} database={db10} storagebase={storage10} arrayCollections={arrayCollections}/>}

                            {ambiente && <Formgeneral name={name} lastName={lastName} database={db11} storagebase={storage11} arrayCollections={arrayCollections} />}

                            {science && <SectionScience IsLogged={IsLogged}  name={name} lastName={lastName} database={db12} storagebase={storage12} arrayCollections={arrayCollections} />}
                        </div>

                        <div className="components-articles">
                            {actualidad && <Articlesgeneral IsLogged={IsLogged} database={db2} arrayCollections={arrayCollections} />}
                            {cultura && <Articlesgeneral IsLogged={IsLogged} database={db3} arrayCollections={arrayCollections} />}
                            {deporte && <Articlesgeneral IsLogged={IsLogged} database={db4} arrayCollections={arrayCollections} />}
                            {investigacion && <Articlesgeneral IsLogged={IsLogged} database={db5} arrayCollections={arrayCollections} />}
                            {universidad && <Articlesgeneral IsLogged={IsLogged} database={db6} arrayCollections={arrayCollections} />}
                            {vida && <Articlesgeneral IsLogged={IsLogged} database={db7} arrayCollections={arrayCollections} />}
                            {eventos && <Articlesgeneral IsLogged={IsLogged} database={db8} arrayCollections={arrayCollections} />}
                            {entrevistas && <Articlesgeneral IsLogged={IsLogged} database={db9} arrayCollections={arrayCollections} />}
                            {tecnologia && <Articlesgeneral IsLogged={IsLogged} database={db10} arrayCollections={arrayCollections} />}
                            {ambiente && <Articlesgeneral IsLogged={IsLogged} database={db11} arrayCollections={arrayCollections} />}
                        </div>

                    </>
                    :
                    <div className="components-auth">
                        {actualidad && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth2} />}
                        {cultura && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth3} />}
                        {deporte && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth4} />}
                        {investigacion && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth5} />}
                        {universidad && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth6} />}
                        {vida && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth7} />}
                        {eventos && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth8} />}
                        {entrevistas && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth9} />}
                        {tecnologia && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth10} />}
                        {ambiente && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth11} />}
                        {science && <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth12} />}
                    </div>

            }

        </article>
    )
}

export default Componentform
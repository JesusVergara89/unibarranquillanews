import React, { useEffect } from 'react'
import useOpen from '../Hooks/useOpen'
import Loading from './Loading'
import '../Styles/Workus.css'

const Workus = () => {
    const opens = useOpen()
    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <article className='work'>
            <div className="visualization-div-header"></div>
            <h2>Trabaja con nosotros</h2>
            {opens ? (
                <div className="container-openposition">
                    {opens?.map((open, i) => (
                        <div className="openposition" key={i}>
                            <h3>{open.Name}</h3>
                            <h5 className='open-parrafo'>
                                {open.Description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </h5>
                            <div className="open-dates">
                                <h4>{`Open: ${open.Von}`}</h4>
                                <h4>{`Close: ${open.Bis}`}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Loading />
            )}
        </article>
    )
}

export default Workus




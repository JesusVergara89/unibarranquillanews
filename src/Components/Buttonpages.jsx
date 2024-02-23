import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Buttonpages = ({ Npages }) => {
    let { Seccion, Pagina } = useParams()
    const [Nub, setNub] = useState([])
    let Nubutton = []

    for (let i = 1; i <= parseInt(Npages); i++) {
        Nubutton.push(i)
    }
    if (parseInt(Npages) >= 5) {
        let conteo = Nubutton.slice((parseInt(Pagina) - 1), ((parseInt(Pagina) - 1) + 5))
    }
    return (
        <section className="pagination-controls">
            <Link className={parseInt(Pagina) === 1 ? 'Button-pagi' : 'Button-pagi on'} to={parseInt(Pagina) === 1 ? "" : `/${Seccion}/pages/${parseInt(Pagina) - 1}`}>
                <i className='bx bx-chevron-left' />
            </Link>
            {
                Nubutton.map((user, index) => (
                    <Link className={parseInt(Pagina) === user ? 'Button-pagi on' : 'Button-pagi'} to={`/${Seccion}/pages/${user}`} key={index}>
                        {user}
                    </Link>
                ))
            }
            <Link className={parseInt(Pagina) < Npages ? 'Button-pagi on' : 'Button-pagi'} to={parseInt(Pagina) >= Npages ? "" : `/${Seccion}/pages/${parseInt(Pagina) + 1}`}>
                <i className='bx bx-chevron-right' />
            </Link>
        </section>
    )
}

export default Buttonpages
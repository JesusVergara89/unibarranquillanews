import React, { useState } from 'react'

const Botonera = ({ Totalpages, setStart, Lasdoc, Firstdoc, setOrden, setReverse,Page,setPage }) => {
    const Next = () => {
        if (Page < Totalpages) {
            setStart(Lasdoc)
            setPage(Page + 1)
            setOrden("desc")
            setReverse(false)
        }
    }
    const Prev = () => {
        if (Page > 1) {
            setStart(Firstdoc)
            setPage(Page - 1)
            setOrden("asc")
            setReverse(true)
        }
    }
    return (
        <section className="pagination-controls">
            <p className='Button-pagi-Current'>
                {`${Page} of ${Totalpages}`}
            </p>
            <button onClick={() => Prev()} className={Page > 1 ? 'Button-pagi on' : 'Button-pagi'}>
                <i className='bx bx-chevron-left' />
            </button>
            <button onClick={() => Next()} className={Totalpages > 1 && Page < Totalpages ? 'Button-pagi on' : 'Button-pagi'}>
                <i className='bx bx-chevron-right' />
            </button>
        </section>
    )
}

export default Botonera
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import '../../Styles/colums_skeleto.css'
import '../../Styles/Columns.css'
import 'react-loading-skeleton/dist/skeleton.css'

const Colums_skeleto = () => {
    return (
        <div className='main_colums_skeleto'>
            <div className='Noticia-actual'>
                <div className='Photo-seccion' >
                    <Skeleton height={'100%'} />
                </div>
                <div className='Title-seccion'>
                    <Skeleton height={100} />
                    <Skeleton height={170} />
                    <Skeleton height={40} width={'40%'} style={{ marginLeft: '54%' }} />
                </div>
            </div>
            <div className='Columna'>
                {Array(4).fill(0).map((z,index) => (
                    <Skeleton key={index} className='Mini_cards'/>
                ))
                }
            </div>
        </div>
    )
}

export default Colums_skeleto
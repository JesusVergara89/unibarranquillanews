import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Card_skeleton from './Card_skeleton'

const Pages_seccion_skeleto = () => {
    return (
        <article className="engineering_section">
            <h2 className="title-actualidad">
                <Skeleton height={32} style={{marginLeft:'40%'}} />
            </h2>
            <Skeleton width={'40%'} height={50} style={{ marginLeft: '30%' }} />
            <div className="wrapp-section">
                <Card_skeleton />
            </div>

            : <Skeleton width={'20%'} height={35} style={{ marginLeft: '35%' }} />
        </article>
    )
}

export default Pages_seccion_skeleto
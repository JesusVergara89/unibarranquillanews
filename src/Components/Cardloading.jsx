import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Cardloading = () => {
    return (
        <>
            <section className='section-cards-loading'>
                {

                    Array(10).fill(0).map((user) => (
                        <div className='card-loading'>
                            <div className='section-imagen'>
                                <Skeleton animation='zoom' height={'100%'} />
                            </div>
                            <div className='section-text'>
                                <Skeleton width={'40%'} />
                                <Skeleton width={'85%'} height={50} style={{marginTop:15}} />
                            </div>
                        </div>
                    )
                    )
                }
            </section>
        </>
    )
}

export default Cardloading
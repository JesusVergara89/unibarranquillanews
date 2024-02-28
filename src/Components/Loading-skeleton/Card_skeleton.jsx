import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Card_skeleton = () => {
    return (
        <>

            {Array(10).fill(0).map(()=>(
                <article className="card-newyork">
                <div className="newyork-title">
                    <Skeleton height={60} style={{ marginBottom: 7 }} />
                </div>
                <div className="newyork-img">
                    <Skeleton height={180} />
                </div>
                <div className="newyork-information">
                    <Skeleton height={20} width={'50%'} />
                    <div className="newyork-brief">
                        <div className="newyork-description-autor">
                            <Skeleton height={50} style={{ marginBottom: 20 }} />
                            <Skeleton width={'40%'} />
                        </div>
                        <div className="newyork-img-autor">
                            <Skeleton circle={true} height={45} width={45} style={{ marginBottom: '53%', marginLeft: 10, marginRight: 10 }} />
                        </div>
                    </div>
                </div>
            </article>
            ))
            }
        </>
    )
}

export default Card_skeleton
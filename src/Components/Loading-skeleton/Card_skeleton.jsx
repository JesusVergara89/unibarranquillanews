import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Card_skeleton = () => {
    return (
        <>

            {Array(10).fill(0).map(() => (
                <article className="card-newyork">
                    <div className="newyork-title">
                        <Skeleton height={60} style={{ marginBottom: 7 }} />
                    </div>
                    <div className="newyork-img">
                        <Skeleton height={180} />
                    </div>
                    <div className="newyork-information">
                        <div className="newyork-brief">
                            <Skeleton circle={true} height={40} width={40} />
                            <Skeleton height={20} />
                            <Skeleton height={20} />
                        </div>
                        <div className="newyork-description-autor">
                            <Skeleton height={80} />
                        </div>
                    </div>
                </article>
            ))
            }
        </>
    )
}

export default Card_skeleton
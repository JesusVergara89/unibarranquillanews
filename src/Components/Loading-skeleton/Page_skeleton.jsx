import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../Styles/Singlearticle.css'

const Page_skeleton = () => {
    return (
        <article className="singles-article">
            <div className="single-card">
                <Skeleton height={135} style={{ marginBottom: 35 }} />
                <Skeleton height={250} />
                <div className="single-out">
                    <div className='single-information'>
                        <p><Skeleton circle={true} height={35} width={35} /> </p>
                        <p><Skeleton width={100} height={24} /></p>
                    </div>
                    <p><Skeleton width={120} height={24} /></p>
                </div>

                <div className="single-description">
                    <Skeleton height={"100vh"} style={{ marginTop: 40 }} />
                </div>
            </div>
        </article>
    )
}

export default Page_skeleton
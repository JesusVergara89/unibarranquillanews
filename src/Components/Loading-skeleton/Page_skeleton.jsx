import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Page_skeleton = () => {
    return (
        <article className="singles-article">
            <div className="single-card">
                <Skeleton height={135} style={{marginBottom:35}} />
                <Skeleton height={400} />
                <div className="single-out">
                    <div className="img-autor">
                        <div className="img1-autor">
                        <Skeleton circle={true} height={50} width={50} style={{ marginLeft: '33%' }} />
                        </div>
                        <div className="div-autor">
                            <Skeleton width={'60%'} style={{marginLeft:50}} />
                        </div>
                    </div>
                    <Skeleton height={30} />
                </div>

                <div className="single-description">
                    <Skeleton height={"100vh"} style={{marginTop:40}} />
                </div>
            </div>
        </article>
    )
}

export default Page_skeleton
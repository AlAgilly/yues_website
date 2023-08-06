import React from 'react'
import Header from '../../components/sections/Header'
import styles from '../../style'

const Dota2 = () => {
  return (
    <>
        <Header title="YGE Dota2" colour="red"></Header>
        <div className={`${styles.paddingX} ${ styles.paddingY} max-w-[1140px] m-auto`}>
            <h2 className={`${styles.titleH5}`}>Varsity</h2>
            <div className={`${styles.titleLineBottom}`}>-</div>
            <div className='grid grid-cols-3'>
                <div>
                    hello
                </div>
                <div>
                    hello
                </div>
                <div>
                    hello
                </div>
            </div>
        </div>
    </>
    )
}

export default Dota2
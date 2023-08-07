import React from 'react'
import Header from '../../components/elements/Header'
import styles from '../../style'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Title2 from '../../components/elements/Title2'

const Dota2 = () => {
    const location = useLocation();
    useEffect(() => {
      // Scroll top when location changes
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
        <Header title="YGE Dota2" colour="red"></Header>
        <div className={`${styles.paddingX} ${ styles.paddingY} max-w-[1140px] m-auto`}>
            <Title2 title="Varsity" />
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
import React from 'react'

const Error = () => {
  return (
    <>
      <div className='w-full text-center px-0 py-4 xs:px-8 ss:px-24 xs:py-0 sm:px-32 mm:px-64'>
        <div className='text-red font-bignoodle text-[34px] xs:text-[38px] mm:text-[42px]'>Error :(</div>
        <div className='text-darkGray font-bevietnam text-[18px] xs:text-[18px] mm:text-[20px] py-2'>Oops! The data you were loading seems to have gone somewhere else, try reloading the page</div>
      </div>
    </>
  )
}

export default Error
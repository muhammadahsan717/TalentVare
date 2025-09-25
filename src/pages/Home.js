import React, { Fragment } from 'react'
import MainHome from '../components/Home/MainHome'
import Header from '../common/Header'

function Home() {
  return (
    <Fragment>
<div className='bg-[#F4F4F4] min-h-screen overflow-hidden'>
        <Header />
        <MainHome />
      </div>
    </Fragment>
  )
}

export default Home
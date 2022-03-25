import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <>

    <div><h1 className=' animate__animated  animate__bounceIn'>DC</h1></div>

      <HeroList publisher='DC Comics' />

    </>
  )
}

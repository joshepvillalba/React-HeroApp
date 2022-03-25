import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <>
      <div><h1 className='animate__bounceIn'>MARVEL</h1></div>
      <HeroList publisher = 'Marvel Comics' />
    </>
  )
}

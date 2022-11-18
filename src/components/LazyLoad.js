import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const LazyLoad = ({ children, ...props }) => {
  const [load, setLoad] = useState(false)
  const handleOnEnter = () => {
    console.log('on enter')
    setLoad(true)
  }

  return (
    <>
      <Waypoint onEnter={handleOnEnter} bottomOffset='-50%' {...props}></Waypoint>
      {load && children}
    </>
  )
}

export default LazyLoad

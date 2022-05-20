import React from 'react'
import Sidebar from './Sidebar'

import Slider from "./Slider"
import MainContent from './MainContent'

export default function Main() {
  return (
    <>
    <Slider/>
    <section>
		<div className="container">
			<div className="row">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
    </section>
    </>
  )
}

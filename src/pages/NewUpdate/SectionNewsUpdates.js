import React from 'react'
import Banner from './Banner'
import LatestNews from './LatestNews'
import Video from './Video'
import Newsletter from './Newsletter'
import Sponsors from '../../components/common/Sponsors'

const SectionNewsUpdates = () => {
  return (
    <section>
      <Banner/>
      <LatestNews/>
      <Video/>
      <Newsletter/>
      <Sponsors/>
    </section>
  )
}

export default SectionNewsUpdates

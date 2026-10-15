import React from 'react'
import Hero from '../components/common/Hero'
// import Insights from '../components/common/Insights'
import ImageText from '../components/common/ImageText'
// import NewsUpdates from '../components/common/NewsUpdates'
import Squad from '../components/common/Squad'
import Gallery from '../components/common/Gallery'
import PointTable from '../components/common/PointTable'
import Sponsors from '../components/common/Sponsors'

const Home = () => {
  return (
    <>
    <Hero/>
    {/* <Insights/> */}
    <ImageText/>
    {/* <NewsUpdates/> */}
    <Squad/>
    <Gallery/>
    <PointTable/>
    <Sponsors/>
    </>
  )
}

export default Home
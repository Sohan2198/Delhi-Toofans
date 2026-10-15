import React from 'react'
import FixtureResultBanner from './FixtureResultBanner'
import Sponsors from '../../components/common/Sponsors'
import ResultTable from './ResultTable'
import Fixture from './Fixture'

const SectionFixtureResult = () => {
  return (
    <>
    <FixtureResultBanner/>
    <ResultTable/>
    <Fixture/>
    <Sponsors/>
    </>
  )
}

export default SectionFixtureResult

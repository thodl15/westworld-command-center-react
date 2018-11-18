import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'

// Westworld Imports:
import HostInfo from "./HostInfo";


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = (selected) =>
    selected.length < 1 ?
      (<Image size='medium' src={Images.westworldLogo}/>) :
      (<HostInfo
        selectedHost = { selected[0] }
        toggleActive = { props.toggleActive }
        />)

  return(
    <Segment id="details" className="HQComps">
      {renderSomething(props.selectedHostArr)}
    </Segment>
  )
}

export default Details

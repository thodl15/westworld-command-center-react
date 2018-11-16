import React from 'react';
import { Segment } from 'semantic-ui-react'

// Westworld Imports:
import HostList from './HostList';

const ColdStorage = () => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

      {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}
      <HostList/>

    </Segment>
  </Segment.Group>
)

export default ColdStorage

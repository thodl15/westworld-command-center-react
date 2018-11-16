import React from 'react'
import { Card } from 'semantic-ui-react'

// Westworld Imports:
// import HostInfo from './HostInfo';

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
      props.hosts
    </Card.Group>
  )
}

export default HostList

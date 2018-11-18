import React from 'react';
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return(
    <Card
      className={"host" + props.isSelected}
      onClick={() => props.handleClick(props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host

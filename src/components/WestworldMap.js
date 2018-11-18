import React from 'react';
import { Segment } from 'semantic-ui-react';


const WestworldMap = (props) => {

  


  return (
    <Segment id="map" >
      {/* What should we render on the map? */}
      {props.areaList}
    </Segment>
  )
}

export default WestworldMap

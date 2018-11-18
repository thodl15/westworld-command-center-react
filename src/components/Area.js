import React from 'react';

// Westworld Imports:
import HostListLogic from './HostListLogic';

const Area = (props) => (

  <div className='area' id={props.area.name}>
    <h3 className='labels'>{props.printName(props.area.name)}</h3>

    <HostListLogic
      hosts = {props.hosts}
      setSelectedHost = { props.setSelectedHost }
      selectedHost    = { props.selectedHost    }
    />

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    // console.log(props);
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;

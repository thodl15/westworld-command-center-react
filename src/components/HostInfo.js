import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from './../services/Log';

// Westworld Imports:
import { prettyPrintAreaName } from './Util';


const HostInfo = (props) => {

  const handleChange = (e, {value}) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Don't worry too much about how this works.
    // Just know that Semantic dropdowns take options as an array of objects in this form:
    // {key: "some_text", text: "Some Text", value: "some_text"}
    // You get access to the last one for whatever is selected
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled

    // Also, there's more info on this below
    if(props.areaSpace(value)) {
      props.changeLoc(props.selectedHost.id, value);
    } else {
      let errMsg = `Cannot add ${props.selectedHost.firstName} to ` +
      `${prettyPrintAreaName(value)}.`;

      props.addLogEntry(Log.error(errMsg));
    }
  }


  return (
    <Grid>
      <Grid.Column width={6}>
        <Image style={{overflow: "hidden", height: "160px", width: "130px"}} floated='left' size='small' src={ props.selectedHost.imageUrl }/>
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {props.selectedHost.firstName} | { props.selectedHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
            </Card.Header>
            <Card.Meta>
              <Radio style={{margin: "10px"}} slider 
                onChange={() => props.toggleActive(props.selectedHost.id)} 
                label={"Am I Active?"} checked={props.selectedHost.active}/>
            </Card.Meta>

            <Divider />
            Current Area:
            <Dropdown
              onChange={handleChange}
              value={ props.selectedHost.area }
              // {/*
              //   Pass an array of objects to 'options' like so:
              //   [{key: "area_one" text: "Area One" value: "area_two"}, {key: "area_two" text: "Area Two" value: "area_two"}]
              //   The value should be set to whatever you want currently selected. Like "area_two".
              //   The dropdown will display whatever corresponds to the test key, like "Area Two".
              //     */}
              selection
              options={ props.areaList.map(x => {
                return { 
                  key: x.name,
                  text: prettyPrintAreaName(x.name),
                  value: x.name,
                };
              })}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

// Westworld Imports:
import Details     from './Details';
import ColdStorage from './ColdStorage';
import LogPanel    from './LogPanel';


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
        <ColdStorage
          hosts = {this.props.hosts}
          setSelectedHost = { this.props.setSelectedHost }
          selectedHost    = { this.props.selectedHost    }
        />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            // There will only ever be one output to this
            // if it exists.
            selectedHostArr = { this.props.hosts.filter((x) => {
              return x.id === this.props.selectedHost;
            }) }
            toggleActive = { this.props.toggleHostActivity }
            areas = { this.props.areas }
            changeLoc = { this.props.changeLoc }
            areaSpace = { this.props.areaSpace }
          />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel
          {...(this.props.hosts.filter(x => !x.active).length > 0 ? {
            color: "red",
            btnText: "Activate All",
            sendOrRec: true
          } : {
            color: "green",
            btnText: "Decommission All",
            sendOrRec: false
          })}

          moveAllHosts = { this.props.moveAllHosts }
        />

        </Grid.Column>
      </Grid>
    )
  }
}


export default Headquarters;

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Log     } from './services/Log';

// Westworld Imports
import MapLogic     from './components/MapLogic';
import Headquarters from './components/Headquarters';
import { prettyPrintAreaName } from './components/Util';


class App extends Component {

  // As you go through the components you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  constructor(props) {
    super(props);

    this.state = {
      hosts: [],
      areas: [],
      logs:  [],
      selectedHost: "",
    }

    this.setSelectedHost = this.setSelectedHost.bind(this);
    this.toggleHostActivity = this.toggleHostActivity.bind(this);
    this.doesAreaHaveSpace  = this.doesAreaHaveSpace.bind(this);
    this.changeHostLocation = this.changeHostLocation.bind(this);
    this.moveAllHosts       = this.moveAllHosts.bind(this);
    this.addLogEntry        = this.addLogEntry.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:4000/hosts").then(
      res => res.json(),
      error => console.error(error)
    ).then(
      data => this.setState({
        hosts: data
      })
    );

    fetch("http://localhost:4000/areas").then(
            data => data.json(),
            error => console.error(error)
        ).then(
            areas => this.setState((state,props) => {
                return {
                    areas: areas
                }
            })
        );
  }

  setSelectedHost(host) {
    this.setState((state,props) => {
      return {
        selectedHost: host.id
      }
    })
  }

  toggleHostActivity(id) {
    this.setState((state,props) => {
      for(var i=0; i < state.hosts.length; ++i) {
        if(state.hosts[i].id === id) {
          state.hosts[i].active = !state.hosts[i].active;
          if(state.hosts[i].active) {
            // TODO (David):
            // Set Log for Activating a Host
            // this.addLogEntry(Log.)
            let warnMsg = `Activated ${state.hosts[i].firstName}`;
            state.logs.unshift(Log.warn(warnMsg));
          } else {
            // TODO (David):
            // Set Log for Deactivating a Host
            let notifyMsg = `Decommissioned ${state.hosts[i].firstName}`;
            state.logs.unshift(Log.notify(notifyMsg));
          }
          break;
        }
      }
      return {
        hosts: state.hosts,
        logs:  state.logs,
      }
    });
  }

  // Check to see if there is space
  // within the area to add a host.
  doesAreaHaveSpace(location) {
    for(var i=0; i < this.state.areas.length; ++i) {
      if(this.state.areas[i].name === location) {
        return this.state.hosts.filter((x) => {
          return x.area === location;
        }).length < this.state.areas[i].limit;
      }
    }
  }

  changeHostLocation(id, newLoc) {
    this.setState((state, props) => {
      for(var i=0; i < state.hosts.length; ++i) {
        if(state.hosts[i].id === id) {
          // TODO (David):
          // Add Log statement here (1.)
          
          state.hosts[i].area = newLoc;
          let notifyMsg = `${state.hosts[i].firstName} set in ` +
                          `area ${prettyPrintAreaName(newLoc)}`
          state.logs.unshift(Log.notify(notifyMsg));
          break;
        }
      }
      return {
        hosts: state.hosts,
        logs: state.logs,
      }
    })
  }

  moveAllHosts(activeStatus) {
    this.setState((state, props) => {
      for(var i=0; i < state.hosts.length; ++i) {
        if(state.hosts[i].active !== activeStatus) {
          state.hosts[i].active = activeStatus;
        }
      }
      if(activeStatus) {
        // TODO (David):
        // Add Log for activating all hosts.
        let warnMsg = `Activating all hosts!`;
        state.logs.unshift(Log.warn(warnMsg));
      } else {
        // TODO (David):
        // Add Log for decommissioning all hosts.
        let notifyMsg = `Decommissioning all hosts.`;
        state.logs.unshift(Log.notify(notifyMsg));
      }
      return {
        hosts: state.hosts,
        logs: state.logs,
      }
    })
  }

  addLogEntry(logEntry) {
    // There *really* should be some type checking to ensure
    // that random objects aren't being thrown into the log,
    // but for the time being we can ignore that for
    // simplicity's sake.
    //
    // Maybe look to integrate TypeScript to ensure types?
    this.setState((state,props) => {
      state.logs.unshift(logEntry);
      return {
        logs: state.logs
      }
    })
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <MapLogic
          hosts = { this.state.hosts }
          areas = { this.state.areas }
          setSelectedHost = { this.setSelectedHost }
          selectedHost    = { this.state.selectedHost }
        />
        <Headquarters
          hosts           = { this.state.hosts        }
          areas           = { this.state.areas        }
          setSelectedHost = { this.setSelectedHost    }
          selectedHost    = { this.state.selectedHost }
          toggleHostActivity = { this.toggleHostActivity }
          changeLoc          = { this.changeHostLocation }
          areaSpace          = { this.doesAreaHaveSpace  }
          moveAllHosts       = { this.moveAllHosts       }
          addLogEntry        = { this.addLogEntry        }
          logs               = { this.state.logs         }
        />
      </Segment>
    )
  }
}

export default App;

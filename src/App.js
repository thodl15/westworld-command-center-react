import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

// Westworld Imports
import MapLogic     from './components/MapLogic';
import Headquarters from './components/Headquarters';


class App extends Component {

  // As you go through the components you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  constructor(props) {
    super(props);

    this.state = {
      hosts: [],
      selectedHost: "",
    }

    this.setSelectedHost = this.setSelectedHost.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:4000/hosts").then(
      res => res.json(),
      error => console.error(error)
    ).then(
      data => this.setState({
        hosts: data
      })
    )
  }

  setSelectedHost(host) {
    this.setState((state,props) => {
      return {
        selectedHost: host.id
      }
    })
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <MapLogic/>
        <Headquarters
          hosts           = { this.state.hosts        }
          setSelectedHost = { this.setSelectedHost    }
          selectedHost    = { this.state.selectedHost }
        />
      </Segment>
    )
  }
}

export default App;

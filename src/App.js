import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

// Westworld Imports
import WestWorldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';


class App extends Component {

  // As you go through the components you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestWorldMap/>
        <Headquarters/>
      </Segment>
    )
  }
}

export default App;

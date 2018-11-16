import React from 'react';

// Westworld Imports
import WestworldMap from './WestworldMap';

class MapLogic extends React.Component {
    // We would want to store the areas
    // list in this state, since this is
    // the highest component as of the
    // current design that would want
    // access to that information.

    constructor(props) {
        super(props);

        this.state = {
            areas: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/areas").then(
            data => data.json(),
            error => console.error(error)
        ).then(
            areas => this.setState({
                areas: areas
            })
        );
    }

    render() {
        return (
            <WestworldMap
                areaList = { this.state.areas }
            />
        );
    }
}

export default MapLogic;
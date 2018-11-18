import React from 'react';

// Westworld Imports
import WestworldMap from './WestworldMap';
import Area from './Area';

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

        this.createAreaList  = this.createAreaList.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:4000/areas").then(
            data => data.json(),
            error => console.error(error)
        ).then(
            areas => this.setState((state,props) => {
                return {
                    areas: this.createAreaList(areas)
                }
            })
        );
    }

    createAreaList(list) {
        let areaListArray = [];
        list.forEach(element => {
            areaListArray.push(
                <Area
                    key = { element.id }
                    area = { element }
                    hosts = { this.props.hosts }
                />
            )
        });
        return areaListArray;
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
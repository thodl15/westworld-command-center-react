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
        this.waitForHostData = this.waitForHostData.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:4000/areas").then(
            data => data.json(),
            error => console.error(error)
        ).then(
            areas => this.waitForHostData(areas)
        ).then(
            areas => this.setState((state,props) => {
                // eslint-disable-next-line
                areas: this.createAreaList(areas)
            })
        );
    }

    // Set an interval check to ensure that the host
    // data has been fully process from the server
    // before beginning to construct the area
    // components within the application.
    waitForHostData(areas) {
        return new Promise((resolve, reject) => {
            var interval;

            function checkHostData(data) {
                if(data !== undefined) {
                    clearInterval(interval);
                }

                resolve(areas);
            }

            interval = setInterval(() => checkHostData(this.props.hosts), 0);
        })
    }

    createAreaList(list) {
        let areaListArray = [];
        list.forEach(element => {
            areaListArray.push(
                <Area
                    id = {element.id}
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
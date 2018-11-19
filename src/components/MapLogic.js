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
        
    }

    createAreaList(list) {
        let areaListArray = [];
        list.forEach(element => {
            areaListArray.push(
                <Area
                    key = { element.id }
                    area = { element }
                    hosts = { this.props.hosts.filter(x => {
                        return x.area === element.name && x.active === true;
                    }) }
                    setSelectedHost = { this.props.setSelectedHost }
                    selectedHost    = { this.props.selectedHost }
                />
            )
        });
        return areaListArray;
    }


    render() {
        console.log(this.createAreaList(this.state.areas));
        // console.log(this.props.hosts);
        return (
            <WestworldMap
                // I would rather build the objects once and just
                // have the list update on re-render, but it seems
                // that when I ran the createAreaList() function
                // before the host data completed, it would not
                // update within the precomputed area list
                // whenever the data updated further up the tree.
                areaList = { this.createAreaList(this.props.areas) }
            />
        );
    }
}

export default MapLogic;
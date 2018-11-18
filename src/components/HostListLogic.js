import React from 'react';

// Westworld Imports:
import HostList from './HostList';
import Host from './Host';

class HostListLogic extends React.Component {
    // I want to handle the dynamic creation
    // of HostInfo objects in this class,
    // rather than trying to delegate it to
    // the presentational component.
    constructor(props) {
        super(props);

        this.createHostInfoArray = this.createHostInfoArray.bind(this);
    }

    createHostInfoArray(list) {
        let hostInfoList = [];
        list.forEach(element => {
            hostInfoList.push(
                <Host
                    host = {element}
                    key = {list.indexOf(element)}
                    handleClick = { this.props.setSelectedHost }
                    isSelected =  { element.id === this.props.selectedHost ?
                                                        " selected" : ""}
                />
            )
        });
        return hostInfoList;
    }

    render() {
        return (
            <HostList
                hosts = {this.createHostInfoArray(this.props.hosts)}
            />
        );
    }
}

export default HostListLogic;
import React from 'react';

// Westworld Imports:
import HostList from './HostList';
import HostInfo from './HostInfo';

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
                <HostInfo
                    selectedHost = {element}
                    key = {list.indexOf(element)}
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
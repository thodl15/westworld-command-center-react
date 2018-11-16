import React from 'react';

// Westworld Imports:
import HostList from './HostList';

class HostListLogic extends React.Component {
    // I want to handle the dynamic creation
    // of HostInfo objects in this class,
    // rather than trying to delegate it to
    // the presentational component.
    function createHostInfoArray(list) {
        let hostInfoList = [];
        list.array.forEach(element => {
            hostInfoList.push(
                <HostInfo
                    selectedHost = element
                />
            )
        });
    }

    render() {
        return (
            <HostList
                hosts = hostInfoList
            />
        );
    }
}

export default class HostListLogic;
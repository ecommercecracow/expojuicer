import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile, GET_LIST, GET_MANY } from 'admin-on-rest';

import Welcome from './Welcome';
import restClient from '../api/restClient';

const styles = {
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

class Dashboard extends Component {

    state = {};

    render() {
 
        const { width } = this.props;
        return (
            <div>
                {width === 1 && <AppBarMobile title="meetup" />}
                <Welcome style={styles.welcome} />
                <div style={styles.flex}>
                    <div style={styles.leftCol}>
                        <div style={styles.flex}>
                           

                        </div>
                        <div style={styles.singleCol}>


                        </div>
                    </div>
                    <div style={styles.rightCol}>
                        <div style={styles.flex}>
                          
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withWidth()(Dashboard);
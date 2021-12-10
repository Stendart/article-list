import React, {PureComponent} from 'react';

class AppUsers extends PureComponent {
    componentDidMount() {
        console.log('User')
    }

    render() {
        return (
            <div>
                <h2>USERS</h2>
            </div>
        );
    }
}


export default AppUsers;
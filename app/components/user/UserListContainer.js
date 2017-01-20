import React from "react";
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import UserList from "./UserList";
import withWidth, { LARGE} from '../../utils/WithWidth';
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();

class UserListContainer extends React.Component {
    
    constructor() {
        super();
        //add some code here    
    }
    
    componentDidMount() {
        //add some code here
    }
    
    render() {
        return (
            //you need to change something here
            <UserList username={this.props.params.username} users={this.state.users} />
        )
    }
}

export default UserListContainer;
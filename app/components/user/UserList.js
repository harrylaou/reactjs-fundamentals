import React from "react";
//import users from "../../../var/data/users.js";
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import withWidth, { LARGE} from '../../utils/WithWidth';
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();

class UserList extends React.Component {
    
    constructor() {
        super();
        this.state = { 
            users : []
        }
    }
    
    componentDidMount() {
        fetch('/data/users.js', {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {  
            this.setState({users:data})
        }).catch((err)=> {
            console.log(err);
        });
    }
    
    showUserProfile(user) {
        this.context.router.push(`/users/${user.username}`);
    }
    
    render() {
        let listItems = this.state.users.map(user => (
            <ListItem onClick={this.showUserProfile.bind(this, user)} key={user.username} style={{color: "black"}}
                primaryText={ `${user.name.first} ${user.name.last}`}
                leftIcon={<ActionGrade color={pinkA200} />}
                rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
            />
        ));

        const listView = <List className="view"> {listItems} </List>
        const childrenView = <div className="view"> {this.props.children}</div>

        let masterView, detailView;

        if (this.props.params.username && this.props.width !== LARGE) {
            masterView = childrenView;
            detailView = null;
        } 
        else {
            masterView = listView;
            detailView = childrenView;
        }
        return (
            <div className="view-container">
                {masterView}
                {detailView}
            </div>
        );
    }
}

export default withWidth()(UserList);

UserList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class AppNavDrawer extends React.Component {
   
    menuItemClicked(value) {
        this.context.router.push(value);
        this.props.toggleNav();
    }

    render() {
        return (
            <Drawer 
                open={this.props.open}
                docked={true}  
                onRequestChange={this.props.toggleNav}
            >
                <div onClick={this.menuItemClicked.bind(this, "/")} style={this.props.styles.logo}>
                    Course Manager
                </div>
                <MenuItem onClick={this.menuItemClicked.bind(this,"/users")}>Students</MenuItem>
                <MenuItem>Courses</MenuItem>
            </Drawer>
        )
    }
}

AppNavDrawer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

AppNavDrawer.propTypes = {
    toggleNav: React.PropTypes.func.isRequired,
}

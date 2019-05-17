import React, { Component, Fragment } from 'react';
import MetisMenu from 'react-metismenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ComponentsNav, MainNav, FormsNav } from './NavItems';

class Nav extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        {/* <h5 className="app-sidebar__heading">UI Components</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
        {/* <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu
          content={FormsNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        {/* <h5 className="app-sidebar__heading">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
      </Fragment>
    );
  }

  isPathActive(path) {
    console.log(path, '<-- active path'); // never called
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);

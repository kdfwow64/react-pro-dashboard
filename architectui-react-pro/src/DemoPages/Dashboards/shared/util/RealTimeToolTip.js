/* tslint:disable */
// import * as ToolTip from 'react-portal-tooltip';
import { Tooltip } from 'reactstrap';
import React, { Fragment } from 'react';

class RealTimeToolTip extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    tooltip: false
  };

  toggle() {
    this.setState({
      tooltip: !this.state.tooltip
    });
  }

  render() {
    return (
      <Fragment>
        <span>
          <Tooltip
            placement="bottom"
            isOpen={this.state.tooltip}
            target={this.props.tooltip_target}
            toggle={this.toggle.bind(this)}
          >
            Updates mobile app in real time. New version submission not
            required.
          </Tooltip>
        </span>
      </Fragment>
    );
  }
}

export default RealTimeToolTip;

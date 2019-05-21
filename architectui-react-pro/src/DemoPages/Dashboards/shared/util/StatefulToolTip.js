/* tslint:disable */
import React, { Fragment } from 'react';
import { Tooltip } from 'reactstrap';

class StatefulToolTip extends React.Component {
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
            className="tooltip-light"
            placement="right"
            isOpen={this.state.tooltip}
            target={this.props.tooltip_target}
            toggle={this.toggle.bind(this)}
          >
            {this.props.text}
          </Tooltip>
        </span>
      </Fragment>
    );
  }
}

export default StatefulToolTip;

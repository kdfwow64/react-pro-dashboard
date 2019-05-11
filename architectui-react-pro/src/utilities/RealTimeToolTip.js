/* tslint:disable */
// import * as ToolTip from 'react-portal-tooltip';
import { Tooltip } from 'reactstrap';
import * as React from "react";

export default class RealTimeToolTip extends React.Component {
  render() {
    return (
      <span>
        <span className="badge badge-pill badge-light">RT</span>
        {/* <Badge status="success">RT</Badge> */}
        <Tooltip key="1" id="1'">
          Updates mobile app in real time. New version submission not required.
        </Tooltip>
      </span>
    );
  }
}

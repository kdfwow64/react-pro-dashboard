import axios from "axios";
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import PageTitle from "../../../Layout/AppMain/PageTitle";
var API_ROOT = "https://thesearchit.com";

export default class ScheduledNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scheduledNotifications: []
    };
  }

  getScheduledNotifications = () => {
    axios.get(`${API_ROOT}/api/v1/get-notifications`).then(resp => {
      this.setState({ scheduledNotifications: resp.data });
    });
  };

  render() {
    const notificationArray = [];
    for (const notification of this.state.scheduledNotifications) {
      const d = new Date(0).setUTCSeconds(notification.send_after);
      const dateFormat = require("dateformat");
      const ds = dateFormat(d, "dddd, mmmm dS, yyyy, h:MM:ss TT");
      notificationArray.push([
        notification.headings.en,
        notification.contents.en,
        ds
      ]);
    }

    notificationArray.push(["test", "test", "test"]);
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <PageTitle
            heading="Scheduled Push Notifications"
            subheading="Wide range of integrations in multiple categories."
            icon="pe-7s-speaker icon-gradient bg-amy-crisp"
          />
          <Card className="main-card mb-3">
            <CardBody>
              <CardTitle>Scheduled Notifications</CardTitle>
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Send on</th>
                  </tr>
                </thead>
                <tbody>
                  {notificationArray.map(notification => {
                    return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{notification}</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

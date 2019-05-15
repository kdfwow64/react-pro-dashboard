import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { API_ROOT } from '../../../utilities/api-config';

export default class ScheduledNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scheduledNotifications: []
    };
  }

  componentDidMount() {
    this.getScheduledNotifications();
  }

  getScheduledNotifications = () => {
    axios.get(`${API_ROOT}/api/v1/get-notifications`).then(resp => {
      const data = resp.data;
      this.setState({ scheduledNotifications: data });
      console.log('scheduled notifications');
      console.log(data);
    });
  };

  render() {
    const notificationArray = [];
    for (const notification of this.state.scheduledNotifications) {
      const d = new Date(0).setUTCSeconds(notification.send_after);
      const dateFormat = require('dateformat');
      const ds = dateFormat(d, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
      notificationArray.push([
        notification.headings.en,
        notification.contents.en,
        ds
      ]);
    }

    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear
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
                        <td>{notification[0]}</td>
                        <td>{notification[1]}</td>
                        <td>{notification[2]}</td>
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

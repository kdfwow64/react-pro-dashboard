import { Snackbar } from '@material-ui/core';
import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Row
} from 'reactstrap';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { API_ROOT } from '../../../utilities/api-config';

export default class Integrations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snackbarOpen: false,
      appIntegrations: {
        searchaniseKey: '',
        yotpoAPIKey: '',
        yotpoAPISecret: '',
        judgeMeAPIToken: '',
        jivoChatWidgetId: '',
        intercomAppId: '',
        intercomAPIKeyiOS: '',
        intercomAPIKeyAndroid: ''
      }
    };
  }

  componentDidMount() {
    this.getAppIntegrations();
  }

  getAppIntegrations = () => {
    axios.get(`${API_ROOT}/api/mobile-integration`).then(res => {
      this.setState({ appIntegrations: res.data });
    });
  };

  saveSearchanise = value => {
    value = value.target.value;
    const appIntegrations = this.state.appIntegrations;
    appIntegrations.searchaniseKey = value;
    this.setState({ appIntegrations });
    this.setState({ snackbarOpen: true });
    axios
      .post(`${API_ROOT}/api/mobile-integration/searchanise`, {
        searchaniseKey: value
      })
      .then(() => {
        this.setState({ snackbarOpen: false });
      })
      .catch(() => {
        this.setState({ snackbarOpen: false });
      });
  };

  saveYotpo = value => {
    value = value.target.value;
    const appIntegrations = this.state.appIntegrations;
    appIntegrations.yotpoAPIKey = value;
    this.setState({ appIntegrations });
    this.setState({ snackbarOpen: true });
    axios
      .post(`${API_ROOT}/api/mobile-integration/yotpo`, { yotpoAPIKey: value })
      .then(() => {
        this.setState({ snackbarOpen: false });
      })
      .catch(() => {
        this.setState({ snackbarOpen: false });
      });
  };

  saveJudgeMe = value => {
    value = value.target.value;
    const appIntegrations = this.state.appIntegrations;
    appIntegrations.judgeMeAPIToken = value;
    this.setState({ appIntegrations });
    this.setState({ snackBackOpen: true });
    axios
      .post(`${API_ROOT}/api/mobile-integration/judgeme`, {
        judgeMeAPIToken: value
      })
      .then(() => {
        this.setState({ snackbarOpen: false });
      })
      .catch(() => {
        this.setState({ snackbarOpen: false });
      });
  };

  saveGATrackingId = value => {
    value = value.target.value;
    const appIntegrations = this.state.appIntegrations;
    appIntegrations.gaTrackingId = value;
    this.setState({ appIntegrations });
    this.setState({ snackBackOpen: true });
    axios
      .post(`${API_ROOT}/api/mobile-integration/google-analytics`, {
        gaTrackingId: value
      })
      .then(() => {
        this.setState({ snackbarOpen: false });
      })
      .catch(() => {
        this.setState({ snackbarOpen: false });
      });
  };

  saveJivoChatWidgetId = value => {
    value = value.target.value;
    const appIntegrations = this.state.appIntegrations;
    appIntegrations.jivoChatWidgetId = value;
    this.setState({ appIntegrations });
    this.setState({ snackBackOpen: true });
    axios
      .post(`${API_ROOT}/api/mobile-integration/jivo-chat`, {
        jivoChatWidgetId: value
      })
      .then(() => {
        this.setState({ snackbarOpen: false });
      })
      .catch(() => {
        this.setState({ snackbarOpen: false });
      });
  };

  saveIntercom = () => {
    this.setState({ snackBackOpen: true });
    axios
      .post(`${API_ROOT}/api/mobile-integration/intercom`, {
        intercomAppId: this.state.appIntegrations.intercomAppId,
        intercomAPIKeyiOS: this.state.appIntegrations.intercomAPIKeyiOS,
        intercomAPIKeyAndroid: this.state.appIntegrations.intercomAPIKeyAndroid
      })
      .then(() => {
        this.setState({ snackbarOpen: false });
      })
      .catch(() => {
        this.setState({ snackbarOpen: false });
      });
  };

  render() {
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
            heading="Integrations"
            subheading="Wide range of integrations in multiple categories."
            icon="pe-7s-plugin icon-gradient bg-amy-crisp"
          />
          <Card className="main-card mb-3">
            <CardHeader>Search</CardHeader>
            <CardBody>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <CardTitle>Searchanise </CardTitle>
                      {/* <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="searchaniseToolTip"
                          // tslint:disable-next-line:max-line-length
                          text={`If you want to show search results from Searchanise you can enable Searchanise integration by entering the API Key from Searchanise.`}
                        /> */}
                      <p>Your Searchanise API Key.</p>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Searchanise Key"
                        value={this.state.appIntegrations.searchaniseKey}
                        onChange={this.saveSearchanise}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </CardBody>
          </Card>

          <Card className="main-card mb-3">
            <CardHeader>Reviews & Ratings</CardHeader>
            <CardBody>
              <Card className="mb-3">
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <CardTitle>Yotpo Reviews </CardTitle>
                      {/* <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="yotpoToolTip"
                          // tslint:disable-next-line:max-line-length
                          text={`If you want to show product reviews from Yotpo you can enable the integration by entering the API Key from Yotpo dashboard.`}
                        /> */}
                      <p>Your Yotpo API Key.</p>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Yotpo API Key"
                        value={this.state.appIntegrations.yotpoAPIKey}
                        onChange={this.saveYotpo}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card className="main-card mb-3">
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <CardTitle>Judge.Me Reviews </CardTitle>
                      {/* <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="judgemeToolTip"
                          // tslint:disable-next-line:max-line-length
                          text={`If you want to show product reviews from Judge.Me you can enable the integration by entering the API Key from Judge.Me dashboard.`}
                        /> */}
                      <p>Your Judge.Me API Token.</p>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Judge.Me API Token"
                        value={this.state.appIntegrations.judgeMeAPIToken}
                        onChange={this.saveJudgeMe}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </CardBody>
          </Card>

          <Card className="main-card mb-3">
            <CardHeader>Analytics</CardHeader>
            <CardBody>
              <Card className="main-card mb-3">
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <CardTitle>Google Analytics </CardTitle>
                      {/* <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="gaToolTip"
                          // tslint:disable-next-line:max-line-length
                          text={`Add Google Analytics to your mobile apps and track user activity.`}
                        /> */}
                      <p>Google Analytics Tracking Id.</p>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Google Analytics Tracking Id"
                        value={this.state.appIntegrations.gaTrackingId}
                        onChange={this.saveGATrackingId}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </CardBody>
          </Card>

          <Card className="main-card mb-3">
            <CardHeader>Messaging</CardHeader>
            <CardBody>
              <Card className="main-card mb-3">
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <CardTitle>Intercom </CardTitle>
                      {/* <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="intercomToolTip"
                          // tslint:disable-next-line:max-line-length
                          text={`If you want to show intercom in your mobile app you can enable the integration by entering the API Key and AppId from Intercom dashboard.`}
                        /> */}
                      <p>
                        You'll need to get your Intercom app ID and API key.
                      </p>
                    </Col>
                    <Col md={6}>
                      <div style={{ paddingBottom: '20px' }}>
                        <Input
                          label="Intercom App Id"
                          value={this.state.appIntegrations.intercomAppId}
                          onChange={value => {
                            const appIntegrations = this.state.appIntegrations;
                            appIntegrations.intercomAppId = value.target.value;
                            this.setState({ appIntegrations });
                            this.saveIntercom();
                          }}
                        />
                      </div>
                      <div style={{ paddingBottom: '20px' }}>
                        <Input
                          label="Intercom API Key iOS"
                          value={this.state.appIntegrations.intercomAPIKeyiOS}
                          onChange={value => {
                            const appIntegrations = this.state.appIntegrations;
                            appIntegrations.intercomAPIKeyiOS =
                              value.target.value;
                            this.setState({ appIntegrations });
                            this.saveIntercom();
                          }}
                        />
                      </div>
                      <div>
                        <Input
                          label="Intercom API Key Android"
                          value={
                            this.state.appIntegrations.intercomAPIKeyAndroid
                          }
                          onChange={value => {
                            const appIntegrations = this.state.appIntegrations;
                            appIntegrations.intercomAPIKeyAndroid =
                              value.target.value;
                            this.setState({ appIntegrations });
                            this.saveIntercom();
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card className="main-card mb-3">
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <CardTitle>Jivo Chat </CardTitle>
                      {/* <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="jivoChatToolTip"
                          // tslint:disable-next-line:max-line-length
                          text={`Show chat bubble in your mobile app using Jivo Chat app.`}
                        /> */}
                      <p>
                        Show chat bubble in your mobile app using Jivo Chat app.
                      </p>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Widget Id"
                        value={this.state.appIntegrations.jivoChatWidgetId}
                        onChange={this.saveJivoChatWidgetId}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </CardBody>
          </Card>

          <div
            className="Polaris-Card__Footer"
            style={{ padding: '15px 0rem 2rem' }}
          >
            <Button
              className="btn-shadow"
              color="primary"
              onClick={() => {
                this.setState({ snackbarOpen: true });
              }}
              // loading={loading}
            >
              Save
            </Button>
          </div>
          <Snackbar
            style={{ marginBottom: '10px' }}
            open={this.state.snackbarOpen}
            ContentProps={{ style: { fontSize: '20px' } }}
            message={<span>Saving...</span>}
            autoHideDuration={3000}
            onClose={() => {
              this.setState({ snackbarOpen: false });
            }}
          />
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

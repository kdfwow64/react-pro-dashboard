import axios from 'axios';
import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Snackbar } from '@material-ui/core';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  FormText,
  Input,
  Label,
  Row
} from 'reactstrap';
import {
  DatePicker,
  RadioButton,
  RadioButtonGroup,
  TimePicker
} from 'material-ui';
import Select from 'react-select';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { API_ROOT } from '../../../utilities/api-config';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

export default class PushNotifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbar_open: false,
      snackbar_message: 'Notification Sent 👍',
      titleText: '',
      // subtitle: "",
      body: '',
      image: '', // "https://mobileit-app-image-upload.s3.us-west-1.amazonaws.com/myappit-app-v2.myshopify.com/push_notification/16391_wallpaper-minimalist-desktop-wallpapers-minimalistic-1800381_1920x1200_h.jpg",
      deeplinkType: 'none',
      deeplinkHandle: '',
      deeplinkList: [],
      deeplinkSelected: [],
      textFieldValue: '',
      scheduleLater: false,
      scheduleDateTime: new Date(),
      scheduledNotifications: [],
      showNotification: 'none',
      apiInProgress: false
    };
  }

  onTitleChange = event => {
    this.setState({ titleText: event });
    this.showNotificationDrawer();
  };

  componentDidMount() {
    // sendSlackMessage('Push Notification page loaded');
  }

  onBodyChange = event => {
    this.setState({ body: event });
    this.showNotificationDrawer();
  };

  onRadioChange = event => {
    if (event.target.value === 'send_later') {
      this.setState({ scheduleLater: true });
    } else {
      this.setState({ scheduleLater: false });
    }
  };

  onDateChange = (event, date) => {
    const newDate = this.state.scheduleDateTime;
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setFullYear(date.getFullYear());
    this.setState({ scheduleDateTime: newDate });
  };

  onTimeChange = (event, date) => {
    const newDate = this.state.scheduleDateTime;
    newDate.setMinutes(date.getMinutes());
    newDate.setHours(date.getHours());
    this.setState({ scheduleDateTime: newDate });
  };

  showNotificationDrawer() {
    this.setState({
      showNotification: 'block'
    });
  }

  sendPushNotification() {
    if (this.state.titleText.trim() === '' || this.state.body.trim() === '') {
      this.setState({
        errors: true
      });
      return false;
    }

    const body = {
      headings: { en: this.state.titleText },
      contents: { en: this.state.body },
      ios_attachments: {
        id: this.state.image
      },
      send_after: this.state.scheduleDateTime.toString()
    };

    if (this.state.deeplinkHandle !== '') {
      body.data = {
        deeplinkType: this.state.deeplinkType,
        deeplinkHandle: this.state.deeplinkHandle
      };
    }
    this.setState({ apiInProgress: true });
    axios
      .post(`${API_ROOT}/api/v1/send-notification`, body)
      .then(resp => {
        if (resp.data.success) {
          this.setState({ snackbar_message: 'Notification Sent 👍' });
          this.setState({ snackbar_open: true });
        } else {
          this.setState({
            snackbar_message:
              'Error sending notification. Our team has been notified.'
          });
          this.setState({ snackbar_open: true });
          //   sendSlackMessage('Failed to send Push notification', resp.data);
        }
        this.setState({ apiInProgress: false });
      })
      .catch(e => {
        this.setState({
          snackbar_message:
            'Error sending notification. Our team has been notified.'
        });
        this.setState({ snackbar_open: true });
        this.setState({ apiInProgress: false });
      });
  }

  searchProduct = searchField => {
    if (searchField !== '') {
      axios
        .get(`${API_ROOT}/api/find/product?title=${searchField}`)
        .then(res => {
          for (const prod of res.data) {
            prod.value = prod.id;
            prod.label = prod.title;
          }
          console.log(res.data);
          this.setState({ deeplinkList: res.data });
        });
    }
  };

  searchCollection = searchField => {
    if (searchField !== '') {
      axios
        .get(`${API_ROOT}/api/find/collection?title=${searchField}`)
        .then(res => {
          for (const prod of res.data) {
            prod.value = prod.id;
            prod.label = prod.title;
          }
          console.log(res.data);
          this.setState({ deeplinkList: res.data });
        });
    }
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
            heading="Push Notifications"
            subheading="Engage your customers with push notifications."
            icon="pe-7s-speaker icon-gradient bg-amy-crisp"
          />
          <Container fluid>
            <Row>
              <Col md="8">
                <Card className="main-card mb-3">
                  <CardHeader>Push Notification</CardHeader>
                  <CardBody>
                    <CardTitle>
                      You can send push notifications after your app is
                      published.
                    </CardTitle>

                    <Label style={{ marginTop: '5px' }} for="titleText">
                      Notification Heading
                    </Label>
                    <Input
                      type="text"
                      name="titleText"
                      id="titleText"
                      placeholder=""
                      onChange={e => {
                        this.onTitleChange(e.target.value);
                      }}
                    />
                    {this.state.titleText.trim() === '' &&
                      this.state.errors === true && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: 'left',
                            display: 'block'
                          }}
                        >
                          This field is required
                        </div>
                      )}
                    <br />
                    <Label style={{ marginTop: '5px' }} for="body">
                      Notification Body
                    </Label>
                    <Input
                      type="textarea"
                      name="body"
                      id="body"
                      placeholder=""
                      onChange={e => {
                        this.onBodyChange(e.target.value);
                      }}
                    />
                    {this.state.body.trim() === '' &&
                      this.state.errors === true && (
                        <div
                          className="invalid-feedback"
                          style={{
                            textAlign: 'left',
                            display: 'block'
                          }}
                        >
                          This field is required
                        </div>
                      )}
                    <br />
                    <Label style={{ marginTop: '5px' }} for="exampleSelect">
                      Deeplink
                    </Label>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      onChange={e => {
                        const value = e.target.value.toLowerCase();
                        this.setState({
                          deeplinkType: value,
                          deeplinkList: [],
                          deeplinkHandle: '',
                          deeplinkSelected: '',
                          textFieldValue: ''
                        });
                        if (value === 'collection') {
                          this.searchCollection('a');
                        } else if (value === 'product') {
                          this.searchProduct('a');
                        }
                      }}
                    >
                      <option>None</option>
                      <option>Collection</option>
                      <option>Product</option>
                    </Input>
                    {this.state.deeplinkType === 'collection' ||
                    this.state.deeplinkType === 'product' ? (
                      <div>
                        <br />
                        <Label>
                          Select{' '}
                          {this.state.deeplinkType === 'collection'
                            ? 'Collection'
                            : 'Product'}
                        </Label>
                        <Select
                          value={this.state.textFieldValue}
                          onInputChange={value => {
                            console.log(value);
                            if (this.state.deeplinkType === 'collection') {
                              this.searchCollection(value);
                            } else if (this.state.deeplinkType === 'product') {
                              this.searchProduct(value);
                            }
                          }}
                          onChange={value => {
                            this.setState({ textFieldValue: value });
                          }}
                          options={this.state.deeplinkList}
                        />
                      </div>
                    ) : null}
                    <br />
                    <Label style={{ marginTop: '5px' }} for="exampleFile">
                      Notification Image
                    </Label>
                    <S3SingleFileUploaderWithPreviewAndFileNameCapability
                      label="Upload Image"
                      acceptedFiles={['image/jpeg', 'image/png']}
                      fileName={this.state.image}
                      previewImageHeight="100px"
                      previewImageWidth="100px"
                      imageFolder="push_notification"
                      onChange={value => {
                        this.setState({ image: value });
                      }}
                    />
                    <FormText color="muted">
                      Attaching an image will show up in notification in mobile
                      device.
                    </FormText>

                    <br />
                    <Row>
                      <Col>
                        <RadioButtonGroup
                          name="scheduler"
                          defaultSelected="send_now"
                          onChange={e => this.onRadioChange(e)}
                        >
                          <RadioButton
                            value="send_now"
                            label="Send immediately"
                          />
                          <RadioButton value="send_later" label="Send later" />
                        </RadioButtonGroup>
                      </Col>
                      <Col>
                        {this.state.scheduleLater === true && (
                          <div>
                            <DatePicker
                              value={this.state.scheduleDateTime}
                              onChange={this.onDateChange}
                            />
                            <TimePicker
                              value={this.state.scheduleDateTime}
                              onChange={this.onTimeChange}
                            />
                          </div>
                        )}
                      </Col>
                    </Row>
                    <Button
                      color="primary"
                      disabled={this.state.apiInProgress}
                      onClick={() => {
                        this.sendPushNotification();
                      }}
                      className="mt-1 btn-shadow"
                    >
                      Send
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <div style={{ float: 'left', position: 'relative' }}>
                  <div
                    className="notification-screen-style"
                    style={{
                      position: 'absolute',
                      width: '82%',
                      backgroundColor: '#eeeeee',
                      opacity: 0.8,
                      textAlign: 'left',
                      left: '0',
                      right: '0',
                      margin: '0 auto',
                      top: '30%',
                      borderRadius: '10px',
                      display: this.state.showNotification
                    }}
                  >
                    <div
                      className="Polaris-Heading"
                      style={{
                        maxWidth: '255px',
                        overflow: 'hidden',
                        minHeight: '24px',
                        padding: '8px'
                      }}
                    >
                      <img
                        src={require('../../../assets/utils/images/logocrop.png')}
                        alt=""
                        style={{ float: 'left' }}
                      />
                      <h2
                        style={{
                          fontSize: '12px',
                          padding: 4,
                          fontWeight: 700
                        }}
                      >
                        <b>AppIt</b>
                        <p style={{ fontSize: '10px', float: 'right' }}>now</p>
                      </h2>
                    </div>
                    <h2
                      className="Polaris-Heading"
                      style={{
                        maxWidth: '255px',
                        overflow: 'hidden',
                        fontSize: '11px',
                        fontWeight: 700,
                        paddingLeft: '8px'
                      }}
                    >
                      {this.state.titleText}
                    </h2>
                    <h2
                      className="Polaris-Body"
                      style={{
                        maxWidth: '255px',
                        overflow: 'hidden',
                        fontSize: '10px',
                        fontWeight: 400,
                        minHeight: '24px',
                        paddingLeft: '8px'
                      }}
                    >
                      {this.state.body}
                    </h2>
                    {this.state.image && (
                      <img
                        src={this.state.image}
                        className="Polaris-Image"
                        style={{
                          maxWidth: '100%',
                          width: '100%',
                          overflow: 'hidden',
                          minHeight: '24px',
                          padding: '8px'
                        }}
                        alt=""
                      />
                    )}
                  </div>
                  <img
                    src={require('./device.png')}
                    alt=""
                    style={{ float: 'right' }}
                    width="290px"
                    height="530px"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <Snackbar
            style={{ marginBottom: '10px' }}
            open={this.state.snackbar_open}
            ContentProps={{ style: { fontSize: '20px' } }}
            // eslint-disable-next-line jsx-a11y/accessible-emoji
            message={<span>{this.state.snackbar_message}</span>}
            onClose={() => {
              this.setState({ snackbar_open: false });
            }}
            autoHideDuration={3000}
          />
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
var API_ROOT = 'https://thesearchit.com';

export default class PushNotifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          snackbar_open: false,
          snackbar_message: 'Notification Sent 👍',
          titleText: '',
          // subtitle: "",
          body: '',
          image: '',
          deeplinkType: 'collection',
          deeplinkHandle: '',
          deeplinkList: [],
          deeplinkSelected: [],
          textFieldValue: '',
          scheduleLater: false,
          scheduleDateTime: new Date(),
          scheduledNotifications: []
        };
      }
    
      onTitleChange = event => {
        this.setState({ titleText: event });
      }
    
      componentDidMount() {
        // sendSlackMessage('Push Notification page loaded');
        this.getScheduledNotifications();
      }
    
      onBodyChange = event => {
        this.setState({ body: event });
      }
    
      onImageChange = event => {
        this.setState({ image: event });
      }
    
      onRadioChange = event => {
        if (event.target.value === 'send_later') {
          this.setState({ scheduleLater: true });
        } else {
          this.setState({ scheduleLater: false });
        }
      }
    
      onDateChange = (event, date) => {
        const newDate = this.state.scheduleDateTime;
        newDate.setMonth(date.getMonth());
        newDate.setDate(date.getDate());
        newDate.setFullYear(date.getFullYear());
        this.setState({ scheduleDateTime: newDate });
      }
    
      onTimeChange = (event, date) => {
        const newDate = this.state.scheduleDateTime;
        newDate.setMinutes(date.getMinutes());
        newDate.setHours(date.getHours());
        this.setState({ scheduleDateTime: newDate });
      }
    
      sendPushNotification() {
        const body = {
          headings: { en: this.state.titleText },
          contents: { en: this.state.body },
          ios_attachments: {
            id: this.state.image
          },
          send_after: this.state.scheduleDateTime.toString()
        };
    
        if (this.state.deeplinkHandle !== '') {
          body['data'] = {
            deeplinkType: this.state.deeplinkType,
            deeplinkHandle: this.state.deeplinkHandle
          };
        }
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
          });
      }
    
      getScheduledNotifications = () => {
        axios
        .get(`${API_ROOT}/api/v1/get-notifications`)
        .then(resp => {
          this.setState({ scheduledNotifications: resp.data });
        });
      }
    
      searchProduct = searchField => {
        if (searchField !== '') {
          axios
            .get(API_ROOT + '/api/find/product?title=' + searchField)
            .then(res => {
              for (const prod of res.data) {
                prod['value'] = prod['id'];
                prod['label'] = prod['title'];
              }
              this.setState({ deeplinkList: res.data });
            });
        }
      }
    
      searchCollection = searchField => {
        if (searchField !== '') {
          axios
            .get(API_ROOT + '/api/find/collection?title=' + searchField)
            .then(res => {
              for (const prod of res.data) {
                prod['value'] = prod['id'];
                prod['label'] = prod['title'];
              }
              this.setState({ deeplinkList: res.data });
            });
        }
      }
    
      render() {
    
        const notificationArray = [];
        for (const notification of this.state.scheduledNotifications) {
          const d = new Date(0).setUTCSeconds(notification.send_after);
          const dateFormat = require('dateformat');
          const ds = dateFormat(d, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
          notificationArray.push([ notification.headings.en, notification.contents.en, ds ]);
        }
    
        return (


            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container fluid>
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Controls Types</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input type="email" name="email" id="exampleEmail"
                                                       placeholder="with a placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input type="password" name="password" id="examplePassword"
                                                       placeholder="password placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleSelect">Select</Label>
                                                <Input type="select" name="select" id="exampleSelect">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleSelectMulti">Select Multiple</Label>
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti"
                                                       multiple>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleText">Text Area</Label>
                                                <Input type="textarea" name="text" id="exampleText"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleFile">File</Label>
                                                <Input type="file" name="file" id="exampleFile"/>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
                                                    It's a bit lighter and easily wraps to a new line.
                                                </FormText>
                                            </FormGroup>
                                            <Button color="primary" className="mt-1">Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                            <div style={{ float: 'left', position: 'relative' }}>
                                <img
                                src={require('./device.png')}
                                alt=""
                                style={{ float: 'right' }}
                                width={'290px'}
                                height={'530px'}
                                />
                                <div className="notification-screen-style">
                                    <h2
                                        className="Polaris-Heading"
                                        style={{
                                        maxWidth: '255px',
                                        overflow: 'hidden',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        minHeight: '24px'
                                        }}
                                    >
                                        {this.state.titleText}
                                    </h2>
                                    <h2
                                        className="Polaris-Heading"
                                        style={{
                                        maxWidth: '255px',
                                        overflow: 'hidden',
                                        fontSize: '11px',
                                        fontWeight: 500,
                                        minHeight: '24px'
                                        }}
                                    >
                                        {this.state.subtitle}
                                    </h2>
                                    <h2
                                        className="Polaris-Heading"
                                        style={{
                                        maxWidth: '255px',
                                        overflow: 'hidden',
                                        fontSize: '10px',
                                        fontWeight: 400,
                                        minHeight: '24px'
                                        }}
                                    >
                                        {this.state.body}
                                    </h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
      }
}

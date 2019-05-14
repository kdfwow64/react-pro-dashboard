import axios from "axios";
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
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
} from "reactstrap";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import { API_ROOT } from "../../../utilities/api-config";
import S3SingleFileUploaderWithPreviewAndFileNameCapability from "../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability";

export default class PushNotifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbar_open: false,
      snackbar_message: "Notification Sent 👍",
      titleText: "",
      // subtitle: "",
      body: "",
      image: "",
      deeplinkType: "collection",
      deeplinkHandle: "",
      deeplinkList: [],
      deeplinkSelected: [],
      textFieldValue: "",
      scheduleLater: false,
      scheduleDateTime: new Date(),
      scheduledNotifications: []
    };
  }

  onTitleChange = event => {
    this.setState({ titleText: event });
  };

  componentDidMount() {
    // sendSlackMessage('Push Notification page loaded');
  }

  onBodyChange = event => {
    this.setState({ body: event });
  };

  onImageChange = event => {
    this.setState({ image: event });
  };

  onRadioChange = event => {
    if (event.target.value === "send_later") {
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

  sendPushNotification() {
    const body = {
      headings: { en: this.state.titleText },
      contents: { en: this.state.body },
      ios_attachments: {
        id: this.state.image
      },
      send_after: this.state.scheduleDateTime.toString()
    };

    if (this.state.deeplinkHandle !== "") {
      body["data"] = {
        deeplinkType: this.state.deeplinkType,
        deeplinkHandle: this.state.deeplinkHandle
      };
    }
    axios.post(`${API_ROOT}/api/v1/send-notification`, body).then(resp => {
      if (resp.data.success) {
        this.setState({ snackbar_message: "Notification Sent 👍" });
        this.setState({ snackbar_open: true });
      } else {
        this.setState({
          snackbar_message:
            "Error sending notification. Our team has been notified."
        });
        this.setState({ snackbar_open: true });
        //   sendSlackMessage('Failed to send Push notification', resp.data);
      }
    });
  }

  searchProduct = searchField => {
    if (searchField !== "") {
      axios
        .get(API_ROOT + "/api/find/product?title=" + searchField)
        .then(res => {
          for (const prod of res.data) {
            prod["value"] = prod["id"];
            prod["label"] = prod["title"];
          }
          this.setState({ deeplinkList: res.data });
        });
    }
  };

  searchCollection = searchField => {
    if (searchField !== "") {
      axios
        .get(API_ROOT + "/api/find/collection?title=" + searchField)
        .then(res => {
          for (const prod of res.data) {
            prod["value"] = prod["id"];
            prod["label"] = prod["title"];
          }
          this.setState({ deeplinkList: res.data });
        });
    }
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

                    <Label for="exampleEmail">Notification Heading</Label>
                    <Input
                      type="text"
                      name="email"
                      id="exampleEmail"
                      placeholder=""
                    />

                    <Label for="examplePassword">Notification Body</Label>
                    <Input
                      type="textarea"
                      name="password"
                      id="examplePassword"
                      placeholder=""
                    />

                    <Label for="exampleSelect">Deeplink</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>None</option>
                      <option>Collection</option>
                      <option>Product</option>
                    </Input>

                    {/* <Label>Select {this.state.deeplinkType === 'collection' ? 'Collection' : 'Product'}</Label>
                    <Autocomplete
                      options={this.state.deeplinkList}
                      selected={this.state.deeplinkSelected}
                      onSelect={ selection => {
                        const selectedText = selection.map(selectedItem => {
                          const matchedOption = this.state.deeplinkList.filter(option => {
                            return option.value === selectedItem;
                          });
                          return matchedOption[0] && matchedOption[0].label;
                        });
                        const selectedHandle = selection.map(selectedItem => {
                          const matchedOption = this.state.deeplinkList.filter(option => {
                            return option.value === selectedItem;
                          });
                          return matchedOption[0].handle;
                        })[0];
                        this.setState({ deeplinkSelected: selectedText, textFieldValue: selectedText, deeplinkHandle: selectedHandle });
                      }}
                      textField={
                        <Autocomplete.TextField
                          label=""
                          value={this.state.textFieldValue}
                          onChange={value => {
                            this.setState({ textFieldValue: value });
                            if (this.state.deeplinkType === 'collection') {
                              this.searchCollection(value);
                            } else if (this.state.deeplinkType === 'product') {
                              this.searchProduct(value);
                            }
                          }}
                        />
                      }
                    /> */}

                    <Label for="exampleFile">Notification Image</Label>
                    {/* <Input
                          type="file"
                          accept
                          name="file"
                          id="exampleFile"
                        /> */}
                    <S3SingleFileUploaderWithPreviewAndFileNameCapability
                      label={"Upload Image"}
                      acceptedFiles={["image/jpeg", "image/png"]}
                      fileName={this.state.image}
                      previewImageHeight={"100px"}
                      previewImageWidth={"100px"}
                      imageFolder={"push_notification"}
                      onChange={value => {
                        this.setState({ image: value });
                      }}
                    />
                    <FormText color="muted">
                      Attaching an image will show up in notification in mobile
                      device.
                    </FormText>

                    <Button
                      color="primary"
                      onClick={() => this.sendPushNotification}
                      className="mt-1 btn-shadow"
                    >
                      Send
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <div style={{ float: "left", position: "relative" }}>
                  <img
                    src={require("./device.png")}
                    alt=""
                    style={{ float: "right" }}
                    width={"290px"}
                    height={"530px"}
                  />
                  <div className="notification-screen-style">
                    <h2
                      className="Polaris-Heading"
                      style={{
                        maxWidth: "255px",
                        overflow: "hidden",
                        fontSize: "11px",
                        fontWeight: 700,
                        minHeight: "24px"
                      }}
                    >
                      {this.state.titleText}
                    </h2>
                    <h2
                      className="Polaris-Heading"
                      style={{
                        maxWidth: "255px",
                        overflow: "hidden",
                        fontSize: "11px",
                        fontWeight: 500,
                        minHeight: "24px"
                      }}
                    >
                      {this.state.subtitle}
                    </h2>
                    <h2
                      className="Polaris-Heading"
                      style={{
                        maxWidth: "255px",
                        overflow: "hidden",
                        fontSize: "10px",
                        fontWeight: 400,
                        minHeight: "24px"
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

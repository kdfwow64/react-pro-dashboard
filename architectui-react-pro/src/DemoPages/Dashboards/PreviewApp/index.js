import { Snackbar } from "@material-ui/core";
import axios from 'axios';
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Button } from "reactstrap";
import { API_ROOT } from "../../../utilities/api-config";
import PageTitle from "../../../Layout/AppMain/PageTitle";

export default class PreviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      snackbarOpen: false
    };
  }

  handleButtonClick = () => {
    this.setState({ loading: true });
    axios
      .post(`${API_ROOT}/api/v1/send-app-preview-email`)
      .then(response => {
        const data = response.data;
        this.setState({ loading: false });
        this.setState({ snackbarOpen: true });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
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
            heading="Preview Your App"
            subheading="This is an example dashboard created using build-in elements and components."
            icon="pe-7s-phone icon-gradient bg-mean-fruit"
          />
          <p>Your app is ready to preview on your device.</p>
          <p>Download the AppIt preview app on your device.</p>
          <Button onClick={this.handleButtonClick}>Get on Email</Button>
          <Snackbar
            style={{ marginBottom: "10px" }}
            open={this.state.snackbarOpen}
            ContentProps={{ style: { fontSize: "20px" } }}
            message={<span>Email sent ✅</span>}
            onClose={() => {
              this.setState({ snackbarOpen: false });
            }}
            autoHideDuration={3000}
          />
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

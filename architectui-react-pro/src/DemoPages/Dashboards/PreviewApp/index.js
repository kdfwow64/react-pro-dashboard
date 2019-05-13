import { Snackbar } from "@material-ui/core";
import axios from "axios";
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LaddaButton, { EXPAND_RIGHT } from "react-ladda";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import { API_ROOT } from "../../../utilities/api-config";

export default class PreviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      snackbarOpen: false,
      expRight: false
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
        this.toggle("expRight");
      })
      .catch(error => {
        this.setState({ loading: false });
        this.toggle("expRight");
      });
  };

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5
    });
  }

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
          <Card className="main-card mb-3">
            <CardBody>
              <div className="text-center">
                <h2>Your app is ready to preview!</h2>
                <h4>Download the AppIt preview app on your device.</h4>

                <LaddaButton
                  className="mb-2 mr-2 btn btn-shadow btn-primary"
                  loading={this.state.expRight}
                  onClick={() => {
                    this.toggle("expRight");
                    this.handleButtonClick();
                  }}
                  data-style={EXPAND_RIGHT}
                >
                  Get on Email
                </LaddaButton>

                {/* <div>
                  <Button onClick={()=> window.open('./dashboards/design-landing')}>Customize</Button>
                  {' '}
                  <Button>Go Live</Button>
                </div> */}
              </div>
            </CardBody>
          </Card>
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

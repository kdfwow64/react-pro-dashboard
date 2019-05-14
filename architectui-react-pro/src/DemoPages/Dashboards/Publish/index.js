import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { saveForm } from "../../../utilities/app-settings";
import { getGoLive, saveGoLive } from "../../../utilities/go-live";
import {
  triggerBuildAndroid,
  triggerBuildiOS
} from "../../../utilities/trigger-build";
// import { onChangeSubmit } from "../../../../shared/util/save-form-util";
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, CardBody, Col, Row } from "reactstrap";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import MultiStep from "./Wizard";

const steps = [
  { name: "App Information", component: <Step1 /> },
  { name: "Additional Info", component: <Step2 /> },
  { name: "Account Info", component: <Step3 /> },
  { name: "Final", component: <Step4 /> }
];

class Publish extends React.Component {
  componentDidMount() {
    this.props.getGoLive();
  }

  setFormRef = element => {
    this.form = element;
  };
  saveRef = ref => (this.ref = ref);

  render() {
    const { handleSubmit } = this.props;
    console.log("go live");
    console.log(this.props.initialValues);
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
          <div>
            <PageTitle
              heading="Publish Your App"
              subheading="Publish your app to Apple and Google stores by filling out the form."
              icon="pe-7s-rocket icon-gradient bg-amy-crisp"
            />
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <div className="forms-wizard-vertical">
                      <form ref={this.setFormRef} onSubmit={handleSubmit}>
                        <MultiStep showNavigation={true} steps={steps} />
                      </form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = storeState => ({
  initialValues: storeState.goLive.goLive,
  credentialsDisabled: storeState.goLive.goLive.credentialsSaved,
  snackbarOpen: storeState.goLive.saved,
  loading: storeState.goLive.loading,
  triggerBuildResponseiOS: storeState.triggerBuild.triggerBuildResponseiOS,
  triggerBuildResponseAndroid:
    storeState.triggerBuild.triggerBuildResponseAndroid,
  loadingiOS: storeState.triggerBuild.loadingiOS,
  loadingAndroid: storeState.triggerBuild.loadingAndroid
});

const mapDispatchToProps = {
  getGoLive,
  saveGoLive,
  saveForm,
  triggerBuildiOS,
  triggerBuildAndroid
};

const goLiveForm = reduxForm({
  form: "goLive",
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    dispatch(saveGoLive(values));
  }
})(Publish);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(goLiveForm);

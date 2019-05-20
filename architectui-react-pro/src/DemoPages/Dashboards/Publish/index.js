import Axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from 'react-loaders';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { reduxForm } from 'redux-form';
// import { onChangeSubmit } from "../../../../shared/util/save-form-util";
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { getGoLive, saveGoLive } from '../../../reducers/go-live';
import { API_ROOT } from '../../../utilities/api-config';
import { saveForm } from '../../../utilities/app-settings';
import {
  triggerBuildAndroid,
  triggerBuildiOS
} from '../../../utilities/trigger-build';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import SubscriptionPlan from './SubscriptionPlan';
import MultiStep from './Wizard';

const steps = [
  { name: 'App Information', component: <Step1 /> },
  { name: 'Additional Info', component: <Step2 /> },
  { name: 'Select Platform', component: <Step3 /> },
  { name: 'Account Info', component: <Step4 /> },
  { name: 'Final', component: <Step5 /> }
];

const getItem = item => {
  return localStorage.getItem(item);
};

class Publish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribed: undefined
    };
  }

  componentDidMount() {
    this.getPlanSubscribedTo();
    this.props.getGoLive();
  }

  setFormRef = element => {
    this.form = element;
  };

  saveRef = ref => (this.ref = ref);

  getPlanSubscribedTo() {
    this.setState({ subscribed: undefined });
    Axios.get(`${API_ROOT}/api/mobile-shop-details`)
      .then(response => {
        console.log(response.data);

        const data = response.data.subscriptionPlan;
        if (data === null || data === undefined) {
          this.setState({ subscribed: false });
        } else {
          //  sendSlackMessage('SUBMIT TO APP STORE CLICKED');
          //  this.props.triggerBuildiOS();
          this.setState({ subscribed: true });
        }
      })
      .catch(e => {
        this.setState({ subscribed: false });
      });
  }

  render() {
    const { handleSubmit } = this.props;

    let ui;
    if (this.state.subscribed === undefined) {
      ui = <Loader color="#0e7c95" type="ball-scale" />;
    } else if (this.state.subscribed) {
      ui = (
        <div className="forms-wizard-vertical">
          <form ref={this.setFormRef} onSubmit={handleSubmit}>
            {/* <Input tag={Field} component="input" name="appName" defaultValue="test"/>
        <Button onSubmit={handleSubmit}>Save</Button> */}
            <MultiStep
              showNavigation={this.props.valid}
              steps={steps}
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      );
    } else {
      ui = (
        <SubscriptionPlan
          onClose={() => {
            //   this.setState({ subscribed: true });
          }}
        />
      );
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
          <div>
            <PageTitle
              heading="Publish Your App"
              subheading="Publish your app to Apple and Google stores by filling out the form."
              icon="pe-7s-rocket icon-gradient bg-amy-crisp"
            />
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>{ui}</CardBody>
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
  form: 'goLive',
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    console.log(values);
    dispatch(saveGoLive(values));
  }
})(Publish);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(goLiveForm);

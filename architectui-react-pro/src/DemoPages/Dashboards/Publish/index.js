import Axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from 'react-loaders';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { reduxForm } from 'redux-form';
// import { onChangeSubmit } from "../../../../shared/util/save-form-util";
import { Snackbar } from '@material-ui/core';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { getGoLive, saveGoLive } from '../../../reducers/go-live';
import { API_ROOT } from '../../../utilities/api-config';
import { saveForm } from '../../../utilities/app-settings';
import Storage from '../../../utilities/storage-util';
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

const getUrls = data => {
  data.splashScreenFileName = Storage.local.get('splashScreenFileName');
  data.playStoreJsonFile = Storage.local.get('playStoreJsonFile');
  data.appIconFileName = Storage.local.get('appIconFileName');
  data.platform = Storage.local.get('platform'); // { googleSelected : true } || { appleSelected : true }
  return data;
};
const clearUrls = () => {
  Storage.local.remove('splashScreenFileName');
  Storage.local.remove('playStoreJsonFile');
  Storage.local.remove('appIconFileName');
  Storage.local.remove('platform');
};

let message = null;

class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      message: 'Saving...'
    };
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleCallback(newState) {
    console.log(newState);
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
              // showNavigation={this.props.valid}
              callbackParent={component => this.handleCallback(component)}
              steps={steps}
              handleSubmit={handleSubmit}
              message={message}
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

const validate = values => {
  let valid = false;
  // step 1
  if (!values.appName) {
    message = 'App name is required.';
    return valid;
  }

  if (!values.appShortDescription) {
    message = 'Short description is required.';
    return valid;
  }
  if (!values.appDescription) {
    message = 'Long description is required.';
    return valid;
  }
  if (!values.keywords) {
    message = 'Keywords are required.';
    return valid;
  }

  if (!values.appIconFileName) {
    message = 'App Icon is required.';
    return valid;
  }
  // step 2
  if (!values.privacyPolicyUrl) {
    message = 'Privacy policy url is required.';
    return valid;
  }
  if (!values.supportUrl) {
    message = 'Support Url is required.';
    return valid;
  }
  if (!values.copyright) {
    message = 'Copyrigh is required.';
    return valid;
  }
  if (!values.phoneNumber) {
    message = 'Phone number is required.';
    return valid;
  }
  if (!values.tradeName) {
    message = 'Trade name is required.';
    return valid;
  }

  // step 3 & 4
  if (!values.appleTeamName) {
    message = 'Apple Team name is required.';
    return valid;
  }

  if (message === null) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
};

const goLiveForm = reduxForm({
  form: 'goLive',
  enableReinitialize: true,
  onSubmit: (values, dispatch, props) => {
    values = getUrls(values);
    let isValid = validate(values);
    if (isValid === true) {
      dispatch(saveGoLive(values));
      clearUrls();
    }
  }
})(Publish);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(goLiveForm);

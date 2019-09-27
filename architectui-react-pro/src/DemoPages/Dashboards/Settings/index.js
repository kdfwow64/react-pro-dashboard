import { Snackbar } from '@material-ui/core';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Ionicon from 'react-ionicons';
import { connect } from 'react-redux';
import { DropdownList } from 'react-widgets';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Input,
  Row
} from 'reactstrap';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import {
  getAppSettings,
  saveAppSettings,
  saveForm
} from '../../../utilities/app-settings';
import RealTimeToolTip from '../shared/util/RealTimeToolTip';
import { onChangeSubmit } from '../shared/util/save-form-util';
import StatefulToolTip from '../shared/util/StatefulToolTip';
import AndroidPaySettingToggle from './AndroidPaySettingToggle';
import ApplePaySettingToggle from './ApplePaySettingToggle';
import HideSoldOutProductsSettingToggle from './HideSoldOutProductsSettingToggle';
import SmartAppBannerSettingToggle from './SmartAppBannerSettingToggle';

const renderApplePayEnabled = field => (
  <ApplePaySettingToggle
    enabled={field.input.value}
    onChange={value => field.input.onChange(value)}
  />
);

const renderAndroidPayEnabled = field => (
  <AndroidPaySettingToggle
    enabled={field.input.value}
    onChange={value => field.input.onChange(value)}
  />
);

const renderSmartAppBannerField = field => (
  <SmartAppBannerSettingToggle
    enabled={field.input.value}
    onChange={value => field.input.onChange(value)}
  />
);

const renderHideSoldOutProductsField = field => (
  <HideSoldOutProductsSettingToggle
    enabled={field.input.value}
    onChange={value => field.input.onChange(value)}
  />
);

export const renderTextField = ({
  input,
  label,
  multiLine,
  meta: { touched, error },
  ...custom
}) => <Input type="text" {...input} {...custom} />;

export const renderSelectField = ({
  options,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <DropdownList
    data={options}
    name="collectionSortOrder"
    allowCreate="onFilter"
    valueField="value"
    textField="label"
    onChange={value => input.onChange(value)}
  />
);

class SettingsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false
    };
  }

  componentDidMount() {
    this.props.getAppSettings().then(res => {
      console.log('////', this.props.initialValues);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      snackbarOpen: nextProps.snackbarOpen
    });
  }

  setFormRef = element => {
    this.form = element;
  };

  saveRef = ref => (this.ref = ref);

  render() {
    const {
      handleSubmit,
      hideSoldOutProductsValue,
      androidPayEnabledValue,
      collectionSortOrder,
      loading
    } = this.props;

    const style = {
      style: {
        backgroundImage:
          'url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%3E%3Cstyle%20type=%22text/css%22%3Ecircle,%20ellipse,%20line,%20path,%20polygon,%20polyline,%20rect,%20text%20%7B%20fill:%20%235c6ac4%20!important;%20%7D%3C/style%3E%3Cpath%20d=%22M17%202c.553%200%201%20.448%201%201v5c0%20.552-.447%201-1%201s-1-.448-1-1V5.414l-7.293%207.293c-.195.195-.45.293-.707.293s-.512-.098-.707-.293c-.39-.39-.39-1.023%200-1.414L14.586%204H12c-.553%200-1-.448-1-1s.447-1%201-1h5zm-4%209c.553%200%201%20.448%201%201v5c0%20.552-.447%201-1%201H3c-.553%200-1-.448-1-1V7c0-.552.447-1%201-1h5c.553%200%201%20.448%201%201s-.447%201-1%201H4v8h8v-4c0-.552.447-1%201-1z%22/%3E%3C/svg%3E%0A")',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '16px 16px',
        paddingRight: '18px'
      }
    };

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
            heading="Settings"
            subheading="App Settings"
            icon="pe-7s-tools icon-gradient bg-sunny-morning"
          />
          <form
            ref={this.setFormRef}
            onSubmit={handleSubmit}
            className="app_setting_main"
          >
            <Card>
              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      Collection Sort Order
                      <span
                        id="sort_orderrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="sort_order">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="sort_orderrealtimetooltip" />
                      <StatefulToolTip
                        text={
                          "The sorting order for the collections in the 'Browse' section in the mobile app"
                        }
                        tooltip_target="sort_order"
                      />
                    </CardTitle>
                    <p>
                      Sorting order for the collections in the 'Browse' section.
                    </p>
                  </Col>
                  <Col xs={12} sm={6}>
                    <DropdownList
                      data={[
                        { label: 'Alphabetical', value: 'ALPHABETICAL' },
                        {
                          label: 'Recently Updated',
                          value: 'RECENTLY_UPDATED'
                        }
                      ]}
                      name="collectionSortOrder"
                      ref={this.saveRef}
                      valueField="value"
                      textField="label"
                      onChange={onChangeSubmit(handleSubmit)}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Row>
                  <Field
                    name="applePayEnabled"
                    component={renderApplePayEnabled}
                    ref={this.saveRef}
                    onChange={onChangeSubmit(handleSubmit)}
                    withRef
                  />
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Field
                  name="androidPayEnabled"
                  component={renderAndroidPayEnabled}
                  ref={this.saveRef}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                />
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Field
                  name="showSmartAppBanner"
                  component={renderSmartAppBannerField}
                  ref={this.saveRef}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                />
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Field
                  name="hideSoldOutProducts"
                  component={renderHideSoldOutProductsField}
                  ref={this.saveRef}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                />
              </CardBody>
            </Card>

            <Card sectioned>
              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      {' '}
                      Contact Us{' '}
                      <span id="realtimetooltip" className="realtimetooltip">
                        RT
                      </span>
                      <span id="contact">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="realtimetooltip" />
                      <StatefulToolTip
                        text="Enter an email address or contact us url for your shop. Mobile app users will use this for contacting you through mobile app."
                        tooltip_target="contact"
                      />
                    </CardTitle>
                    <p>
                      Enter either an email address or your contact us page url.
                    </p>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Field
                      name="contactUsDetails"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card sectioned>
              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      Refund Policy
                      <span
                        id="refund_policyrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="refund_policy">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="refund_policyrealtimetooltip" />
                      <StatefulToolTip
                        text={
                          "Enter url for refund policy. This will show up in the 'Settings' tab in the app."
                        }
                        tooltip_target="refund_policy"
                      />
                    </CardTitle>
                    <p>Enter url for your refund policy. (Optional)</p>
                  </Col>
                  <Col item xs={12} sm={6}>
                    <Field
                      name="refundPolicy"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card sectioned>
              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      Facebook URL
                      <span
                        id="fb_urlrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="fb_url">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="fb_urlrealtimetooltip" />
                      <StatefulToolTip
                        text="This will show up in Settings tab in the mobile app. Your customers can like your Facebook page."
                        tooltip_target="fb_url"
                      />
                    </CardTitle>
                    <p>Your Facebook page URL.</p>
                  </Col>
                  <Col item xs={12} sm={6}>
                    <Field
                      name="facebookUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>

              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      Twitter URL
                      <span
                        id="twitter_urlrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="twitter_url">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="twitter_urlrealtimetooltip" />
                      <StatefulToolTip
                        text="This will show up in Settings tab in the mobile app. Your customers can follow your store on Twitter."
                        tooltip_target="twitter_url"
                      />
                    </CardTitle>
                    <p>Your Twitter page URL.</p>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Field
                      name="twitterUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>

              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      Instagram URL
                      <span
                        id="insta_urlrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="insta_url">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="insta_urlrealtimetooltip" />
                      <StatefulToolTip
                        text="This will show up in Settings tab in the mobile app. Your customers can follow your store on Instagram."
                        tooltip_target="insta_url"
                      />
                    </CardTitle>
                    <p>Your Instagram page URL.</p>
                  </Col>
                  <Col item xs={12} sm={6}>
                    <Field
                      name="instagramUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>

              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      YouTube URL
                      <span
                        id="youtube_urlrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="youtube_url">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="youtube_urlrealtimetooltip" />
                      <StatefulToolTip
                        text="This will show up in Settings tab in the mobile app. You could either put url to your YouTube channel or a specific Youtube video."
                        tooltip_target="youtube_url"
                      />
                    </CardTitle>

                    <p>Your YouTube URL.</p>
                  </Col>

                  <Col item xs={12} sm={6}>
                    <Field
                      name="youtubeUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>

              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <CardTitle>
                      Other URL
                      <span
                        id="other_urlrealtimetooltip"
                        className="realtimetooltip"
                      >
                        RT
                      </span>
                      <span id="other_url">
                        <Ionicon
                          fontSize="20px"
                          color="#fff"
                          icon="ios-help"
                          className="help_icon"
                        />
                      </span>
                      <RealTimeToolTip tooltip_target="other_urlrealtimetooltip" />
                      <StatefulToolTip
                        text="This will show up in Settings tab in the mobile app."
                        tooltip_target="other_url"
                      />
                    </CardTitle>
                  </Col>
                  <Col item xs={12} sm={6}>
                    <Field
                      name="otherUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Button
              className="mb-3"
              color="primary"
              onClick={() => {
                this.setState({ snackbarOpen: true });
              }}
              loading={String(loading)}
              type="submit"
            >
              Save
            </Button>
          </form>
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

const selector = formValueSelector('appSettings'); // <-- same as form name

const mapStateToProps = storeState => {
  return {
    initialValues: storeState.appSettings.appSettings,
    snackbarOpen: storeState.appSettings.saved,
    loading: storeState.appSettings.loading,
    hideSoldOutProductsValue: selector(storeState, 'hideSoldOutProducts'),
    androidPayEnabledValue: selector(storeState, 'androidPayEnabled')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAppSettings: () => dispatch(getAppSettings()),
    saveAppSettings,
    saveForm
  };
};

const appSettingsForm = reduxForm({
  form: 'appSettings',
  enableReinitialize: true,
  onSubmit: (values, dispatch, props) => {
    dispatch(saveAppSettings(values));
  }
})(SettingsDashboard);

const reduxConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(appSettingsForm);

export default reduxConnect;

import { Grid, Snackbar } from "@material-ui/core";
import ExternalLink from "../../../utilities/ExternalLink";
// import Radium, { StyleRoot } from 'radium';
import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import { fadeInDown } from 'react-animations';
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
// import { getAppSettings, saveAppSettings, saveForm } from '../../../../mobile-reducers/app-settings';
import { getAppSettings, saveAppSettings, saveForm } from '../../../utilities/app-settings';
// import { onChangeSubmit } from '../../../../shared/util/save-form-util';
import RealTimeToolTip from "../../../utilities/RealTimeToolTip";
import StatefulToolTip from "../../../utilities/StatefulToolTip";
import { Card, Button, CardBody, Row, Col, CardTitle, Input } from "reactstrap";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import { DropdownList } from "react-widgets";

// import AndroidPaySettingToggle from './Toggles/AndroidPaySettingToggle';
// import ApplePaySettingToggle from './Toggles/ApplePaySettingToggle';
// import HideSoldOutProductsSettingToggle from './Toggles/HideSoldOutProductsSettingToggle';
// import SmartAppBannerSettingToggle from './Toggles/SmartAppBannerSettingToggle';

// const renderApplePayEnabled = field => (
//   <ApplePaySettingToggle
//     enabled={field.input.value}
//     onChange={value => field.input.onChange(value)}
//   />
// );

// const renderAndroidPayEnabled = field => (
//   <AndroidPaySettingToggle
//     enabled={field.input.value}
//     onChange={value => field.input.onChange(value)}
//   />
// );

// const renderSmartAppBannerField = field => (
//   <SmartAppBannerSettingToggle
//     enabled={field.input.value}
//     onChange={value => field.input.onChange(value)}
//   />
// );

// const renderHideSoldOutProductsField = field => (
//   <HideSoldOutProductsSettingToggle
//     enabled={field.input.value}
//     onChange={value => field.input.onChange(value)}
//   />
// );

export const renderTextField = ({
  input,
  label,
  multiLine,
  meta: { touched, error },
  ...custom
}) => (
  <Input type="text" />
  //   <TextField
  //     helpText={label}
  //     floatingLabelText={label}
  //     multiline={multiLine}
  //     error={touched && error}
  //     {...input}
  //     {...custom}
  //   />
);

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
    value={input.value}
    allowCreate="onFilter"
    onCreate={name => this.handleCreate(name)}
    onChange={value => input.onChange(value)}
    // textField="name"
  />
  //   <Select
  //     label=""
  //     value={input.value || ''}
  //     onChange={value => input.onChange(value)}
  //     options={options}
  //   />
);

class SettingsDashboard extends React.Component {
  /*ref: any;
  form: HTMLFormElement;*/

  constructor(props) {
    super(props);

    this.state = {
      snackbarOpen: false
    };
  }

  componentDidMount() {
    this.props.getAppSettings();
    // sendSlackMessage('App Settings page loaded');
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
      loading
    } = this.props;

    // const styles = {
    //   apiUrl: {
    //     animation: 'x 0.2s',
    //     animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
    //     margin: '10px'
    //   },
    //   androidPay: {
    //     animation: 'x 0.2s',
    //     animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
    //     margin: '10px'
    //   }
    // };

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
            heading="Settings"
            subheading="App Settings"
            icon="pe-7s-video icon-gradient bg-sunny-morning"
          />
          <form ref={this.setFormRef} onSubmit={handleSubmit}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <CardTitle>Collection Sort Order</CardTitle>
                    <p>
                      Sorting order for the collections in the 'Browse' section.
                    </p>
                  </Col>
                  <Col>
                    <Field
                      name="collectionSortOrder"
                      component={renderSelectField}
                      options={[
                        "Alphabetical",
                        "Recently Updated"
                        // { label: "Alphabetical", value: "ALPHABETICAL" },
                        // {
                        //   label: "Recently Updated",
                        //   value: "RECENTLY_UPDATED"
                        // }
                      ]}
                      value={"Alphabetical"}
                      ref={this.saveRef}
                      //   onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>

            {/* <Field
                  name="applePayEnabled"
                  component={renderApplePayEnabled}
                  ref={this.saveRef}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                /> */}

            {/* <Field
                  name="androidPayEnabled"
                  component={renderAndroidPayEnabled}
                  ref={this.saveRef}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                /> */}

            {/* {androidPayEnabledValue === true ? (
                  <StyleRoot>
                    <div style={styles.androidPay}>
                      <Card sectioned>
                        <Grid container spacing={0}>
                          <Grid item xs={12} sm={6}>
                            <TextContainer>
                              <TextStyle variation="strong">
                                Android Pay Public Key{' '}
                                <StatefulToolTip
                                  position="right"
                                  arrow="center"
                                  id="androidPayToolTip"
                                  // tslint:disable-next-line:max-line-length
                                  text={`Enter the 'Public Key' from private app.`}
                                />
                              </TextStyle>
                              <p>
                                {
                                  // tslint:disable-next-line:max-line-length
                                  <TextStyle variation="subdued">
                                    Enter the <i>Public Key</i> from private
                                    app.{' '}
                                    <ExternalLink
                                      url="https://help.shopify.com/en/api/custom-storefronts/mobile-buy-sdk/android#generate-a-public-key-for-android-pay"
                                      text="Learn how"
                                    />
                                    .
                                  </TextStyle>
                                }
                              </p>
                            </TextContainer>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Field
                              name="androidPayPublicKey"
                              component={renderTextField}
                              ref={this.saveRef}
                              onChange={onChangeSubmit(handleSubmit)}
                              withRef
                            />
                          </Grid>
                        </Grid>
                      </Card>
                    </div>
                  </StyleRoot>
                ) : null} */}

            {/* <Field
                  name="showSmartAppBanner"
                  component={renderSmartAppBannerField}
                  ref={this.saveRef}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                /> */}

            {/* <Field
                  name="hideSoldOutProducts"
                  component={renderHideSoldOutProductsField}
                  ref={this.ref}
                  onChange={onChangeSubmit(handleSubmit)}
                  withRef
                /> */}

            {/* {hideSoldOutProductsValue === true ? (
                  <StyleRoot>
                    <div style={styles.apiUrl}>
                      <Card sectioned>
                        <Grid container spacing={0}>
                          <Grid item xs={12} sm={6}>
                            <TextContainer>
                              <TextStyle variation="strong">
                                API URL{' '}
                                <StatefulToolTip
                                  position="right"
                                  arrow="center"
                                  id="apiURLToolTip"
                                  // tslint:disable-next-line:max-line-length
                                  text={`Enter the 'Example url' from private app.`}
                                />
                              </TextStyle>
                              <p>
                                <TextStyle variation="subdued">
                                  Enter the <i>Example url</i> from private app.{' '}
                                  <ExternalLink
                                    url="https://youtu.be/WziuBid3YcQ"
                                    text="Watch how"
                                  />
                                  .
                                </TextStyle>
                              </p>
                            </TextContainer>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Field
                              name="apiUrl"
                              component={renderTextField}
                              ref={this.saveRef}
                              onChange={onChangeSubmit(handleSubmit)}
                              withRef
                            />
                          </Grid>
                        </Grid>
                      </Card>
                    </div>
                  </StyleRoot>
                ) : null} */}

            {/* <Card sectioned>
                  <Grid container spacing={0} style={{ margin: '15px' }}>
                    <Grid item xs={12} sm={6}>
                      <TextContainer>
                        <TextStyle variation="strong">
                          Contact Us <RealTimeToolTip />{' '}
                          <StatefulToolTip
                            position="right"
                            arrow="center"
                            id="contactUsToolTip"
                            // tslint:disable-next-line:max-line-length
                            text={`Enter an email address or contact us url for your shop. Mobile app users will use this for contacting you through mobile app.`}
                          />
                        </TextStyle>
                        <p>
                          <TextStyle variation="subdued">
                            Enter either an email address or your contact us
                            page url.
                          </TextStyle>
                        </p>
                      </TextContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="contactUsDetails"
                        component={renderTextField}
                        ref={this.saveRef}
                        onChange={onChangeSubmit(handleSubmit)}
                        withRef
                      />
                    </Grid>
                  </Grid>
                </Card>

                <Card sectioned>
                  <Grid container spacing={0} style={{ margin: '15px' }}>
                    <Grid item xs={12} sm={6}>
                      <TextContainer>
                        <TextStyle variation="strong">
                          Refund Policy <RealTimeToolTip />{' '}
                          <StatefulToolTip
                            position="right"
                            arrow="center"
                            id="refundPolicyToolTip"
                            // tslint:disable-next-line:max-line-length
                            text={`Enter url for refund policy. This will show up in the 'Settings' tab in the app.`}
                          />
                        </TextStyle>
                        <p>
                          <TextStyle variation="subdued">
                            Enter url for your refund policy. (Optional)
                          </TextStyle>
                        </p>
                      </TextContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="refundPolicy"
                        component={renderTextField}
                        ref={this.saveRef}
                        onChange={onChangeSubmit(handleSubmit)}
                        withRef
                      />
                    </Grid>
                  </Grid>
                </Card>
                <Card sectioned>
                <Grid container spacing={0} style={{ margin: '15px' }}>
                  <Grid item xs={12} sm={6}>
                    <TextContainer>
                      <TextStyle variation="strong">
                        Facebook URL <RealTimeToolTip />{' '}
                        <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="facebookToolTip"
                          text="This will show up in Settings tab in the mobile app. Your customers can like your Facebook page."
                        />
                      </TextStyle>
                      <p>
                        <TextStyle variation="subdued">
                          Your Facebook page URL.
                        </TextStyle>
                      </p>
                    </TextContainer>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="facebookUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={0} style={{ margin: '15px' }}>
                  <Grid item xs={12} sm={6}>
                    <TextContainer>
                      <TextStyle variation="strong">
                        Twitter URL <RealTimeToolTip />{' '}
                        <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="twitterToolTip"
                          text="This will show up in Settings tab in the mobile app. Your customers can follow your store on Twitter."
                        />
                      </TextStyle>
                      <p>
                        <TextStyle variation="subdued">
                          Your Twitter page URL.
                        </TextStyle>
                      </p>
                    </TextContainer>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="twitterUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={0} style={{ margin: '15px' }}>
                  <Grid item xs={12} sm={6}>
                    <TextContainer>
                      <TextStyle variation="strong">
                        Instagram URL <RealTimeToolTip />{' '}
                        <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="instagramToolTip"
                          text="This will show up in Settings tab in the mobile app. Your customers can follow your store on Instagram."
                        />
                      </TextStyle>
                      <p>
                        <TextStyle variation="subdued">
                          Your Instagram page URL.
                        </TextStyle>
                      </p>
                    </TextContainer>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="instagramUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={0} style={{ margin: '15px' }}>
                  <Grid item xs={12} sm={6}>
                    <TextContainer>
                      <TextStyle variation="strong">
                        YouTube URL <RealTimeToolTip />{' '}
                        <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="youtubeToolTip"
                          text="This will show up in Settings tab in the mobile app. You could either put url to your YouTube channel or a specific Youtube video."
                        />
                      </TextStyle>
                      <p>
                        <TextStyle variation="subdued">
                          Your YouTube URL.
                        </TextStyle>
                      </p>
                    </TextContainer>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="youtubeUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Grid>
                </Grid> */}

            {/* <Grid container spacing={0} style={{ margin: '15px' }}>
                  <Grid item xs={12} sm={6}>
                    <TextContainer>
                      <TextStyle variation="strong">
                        Other URL <RealTimeToolTip />{' '}
                        <StatefulToolTip
                          position="right"
                          arrow="center"
                          id="otherUrlToolTip"
                          text="This will show up in Settings tab in the mobile app."
                        />
                      </TextStyle>
                    </TextContainer>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="otherUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={onChangeSubmit(handleSubmit)}
                      withRef
                    />
                  </Grid>
                </Grid>
              </Card> */}
          </form>
          <div
            className={"Polaris-Card__Footer"}
            style={{ padding: "15px 0rem 2rem" }}
          >
            <Button
              color="primary"
              onClick={() => {
                this.setState({ snackbarOpen: true });
              }}
              loading={loading}
            >
              Save
            </Button>
          </div>
          <Snackbar
            style={{ marginBottom: "10px" }}
            open={this.state.snackbarOpen}
            ContentProps={{ style: { fontSize: "20px" } }}
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

const selector = formValueSelector("appSettings"); // <-- same as form name
const mapStateToProps = storeState => ({
    initialValues: storeState.appSettings.appSettings,
    snackbarOpen: storeState.appSettings.saved,
    loading: storeState.appSettings.loading,
    hideSoldOutProductsValue: selector(storeState, 'hideSoldOutProducts'),
    androidPayEnabledValue: selector(storeState, 'androidPayEnabled')
});

const mapDispatchToProps = {
    getAppSettings,
    saveAppSettings,
    saveForm
};

const appSettingsForm = reduxForm({
  form: "appSettings",
  enableReinitialize: true
    // onSubmit: (values, dispatch) => {
    //   dispatch(saveAppSettings(values));
    // }
})(SettingsDashboard);

const reduxConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(appSettingsForm);

export default reduxConnect;

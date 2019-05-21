import React, { Fragment } from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';
import Storage from '../../../../utilities/storage-util';

export default class WizardStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      touched: {
        appName: false,
        appShortDescription: false
      }
    };
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleChange = field => evt => {
    let state = this.state;
    state[field] = evt.target.value;
  };

  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <h3 className="form-heading pt-3 pb-3">
            App Information
            <p>Enter your app information below</p>
          </h3>
          <FormGroup>
            <Label for="exampleEmail55">App Name </Label>
            <Input
              tag={Field}
              component="input"
              name="appName"
              required
              onBlur={this.handleBlur('appName')}
              onChange={this.handleChange('appName')}
              valid={this.state.appName}
              invalid={!this.state.appName && this.state.touched.appName}
            />
            <FormFeedback invalid>This field is required</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress">Short description of the app</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              name="appShortDescription"
              id="exampleAddress"
              placeholder=""
              defaultValue=""
              required
              onBlur={this.handleBlur('appShortDescription')}
              onChange={this.handleChange('appShortDescription')}
              valid={this.state.appShortDescription}
              invalid={
                !this.state.appShortDescription &&
                this.state.touched.appShortDescription
              }
            />
            <FormFeedback invalid> This field is required </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress2">Long description of the app</Label>
            <Input
              type="textarea"
              tag={Field}
              component="input"
              name="appDescription"
              id="exampleAddress2"
              placeholder=""
              defaultValue=""
              required
              onBlur={this.handleBlur('appDescription')}
              onChange={this.handleChange('appDescription')}
              valid={this.state.appDescription}
              invalid={
                !this.state.appDescription && this.state.touched.appDescription
              }
            />
            <FormFeedback invalid> This field is required </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="keywords">Keywords</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              name="keywords"
              id="keywords"
              placeholder=""
              defaultValue=""
              onBlur={this.handleBlur('keywords')}
              onChange={this.handleChange('keywords')}
              valid={this.state.keywords}
              invalid={!this.state.keywords && this.state.touched.keywords}
            />
            <FormFeedback> This field is required </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>
              App Icon <Label style={{ color: 'red' }}>*</Label>
            </Label>
            <S3SingleFileUploaderWithPreviewAndFileNameCapability
              label="Add App Icon"
              acceptedFiles={['image/jpeg', 'image/png']}
              //   fileName='splash_screen'
              tag={Field}
              component="input"
              name="appIconFileName"
              previewImageHeight="100px"
              previewImageWidth="100px"
              imageFolder="app_icon"
              onChange={e => {
                Storage.local.set('appIconFileName', e);
              }}
            />
            <FormFeedback invalid> This field is required </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>Splash Screen </Label>
            <S3SingleFileUploaderWithPreviewAndFileNameCapability
              label="Add Splash Screen"
              acceptedFiles={['image/jpeg', 'image/png']}
              //   fileName='splash_screen'
              name="splashScreenFileName"
              tag={Field}
              component="input"
              previewImageHeight="150px"
              previewImageWidth="100px"
              imageFolder="splash_screen"
              onChange={e => {
                Storage.local.set('splashScreenFileName', e);
              }}
            />
            {/* <Input type="file" /> */}
          </FormGroup>

          {/* <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input type="text" name="city" id="exampleCity"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input type="text" name="state" id="exampleState"/>
                            </FormGroup>
                        </Col>
                        {/* <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">Zip</Label>
                                <Input type="text" name="zip" id="exampleZip"/>
                            </FormGroup>
                        </Col>
                    </Row> */}
          {/* <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck"/>
                        <Label for="exampleCheck" check>Check me out</Label>
                    </FormGroup> */}
        </div>
      </Fragment>
    );
  }
}

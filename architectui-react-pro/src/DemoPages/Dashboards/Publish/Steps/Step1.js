import React, { Fragment } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Field } from 'redux-form';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

export default class WizardStep1 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <h3 className="form-heading pt-3 pb-3">
            App Information
            <p>Enter your app information below</p>
          </h3>
          <FormGroup>
            <Label for="exampleEmail55">App Name</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              name="appName"
              placeholder="Your app name"
              defaultValue="App name"
            />
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
            />
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
            />
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
            />
          </FormGroup>

          <FormGroup>
            <Label>App Icon</Label>
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
                console.log(e);
                localStorage.setItem('appIconFileName', e);
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label>Splash Screen</Label>
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
                console.log(e);
                localStorage.setItem('splashScreenFileName', e);
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

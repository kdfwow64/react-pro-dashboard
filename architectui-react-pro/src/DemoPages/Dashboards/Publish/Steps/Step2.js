import React, { Fragment } from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { Field } from 'redux-form';

export default class WizardStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      privacyPolicyUrl: '',
      supportUrl: '',
      touched: {
        privacyPolicyUrl: false
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

  validate(input, type) {
    let isValid = false;
    let data = null;
    if (input) {
      if (type === 'url') {
        data = input.match(
          new RegExp(
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g
          )
        );
      } else {
        data = input.match(
          new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
        );
        isValid = data !== null;
      }
      isValid = data !== null;
    }
    return isValid;
  }

  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <h3 className="form-heading pt-3 pb-3">
            Additional Information
            {/* <p>Enter your user informations below</p> */}
          </h3>

          <FormGroup>
            <Label for="exampleEmail55">Privacy Policy Url</Label>
            <Input
              type="url"
              // name="privacy-policy-url"
              tag={Field}
              component="input"
              name="privacyPolicyUrl"
              id="exampleEmail55"
              placeholder=""
              required
              onBlur={this.handleBlur('privacyPolicyUrl')}
              onChange={this.handleChange('privacyPolicyUrl')}
              valid={
                this.state.privacyPolicyUrl &&
                this.validate(this.state.privacyPolicyUrl, 'url')
              }
              invalid={
                (!this.state.privacyPolicyUrl &&
                  this.state.touched.privacyPolicyUrl) ||
                (this.state.touched.privacyPolicyUrl &&
                  this.validate(this.state.privacyPolicyUrl, 'url') === false)
              }
            />
            {!this.state.privacyPolicyUrl && (
              <FormFeedback invalid>This field is required</FormFeedback>
            )}
            {this.state.privacyPolicyUrl &&
              this.validate(this.state.privacyPolicyUrl, 'url') === false && (
                <FormFeedback invalid>Invalid Url</FormFeedback>
              )}
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail55">Support Url</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              name="supportUrl"
              id="exampleEmail55"
              placeholder=""
              required
              onBlur={this.handleBlur('supportUrl')}
              onChange={this.handleChange('supportUrl')}
              valid={
                this.state.supportUrl &&
                this.validate(this.state.supportUrl, 'url')
              }
              invalid={
                (!this.state.supportUrl && this.state.touched.supportUrl) ||
                (this.state.touched.supportUrl &&
                  this.validate(this.state.supportUrl, 'url') === false)
              }
            />
            {!this.state.supportUrl && (
              <FormFeedback invalid>This field is required</FormFeedback>
            )}
            {this.state.supportUrl &&
              this.validate(this.state.supportUrl, 'url') === false && (
                <FormFeedback invalid>Invalid Url</FormFeedback>
              )}
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail55">Copyright</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              name="copyright"
              id="exampleEmail55"
              placeholder=""
              required
              onBlur={this.handleBlur('copyright')}
              onChange={this.handleChange('copyright')}
              valid={this.state.copyright}
              invalid={!this.state.copyright && this.state.touched.copyright}
            />
            <FormFeedback invalid> This field is required </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail55">Phone Number</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              // name="phone-number"
              name="phoneNumber"
              id="exampleEmail55"
              placeholder=""
              required
              onBlur={this.handleBlur('phoneNumber')}
              onChange={this.handleChange('phoneNumber')}
              valid={
                this.state.phoneNumber &&
                this.validate(this.state.phoneNumber, 'phone')
              }
              invalid={
                (!this.state.phoneNumber && this.state.touched.phoneNumber) ||
                (this.state.touched.phoneNumber &&
                  this.validate(this.state.phoneNumber, 'phone') === false)
              }
            />

            {!this.state.phoneNumber && (
              <FormFeedback invalid>This field is required</FormFeedback>
            )}
            {this.state.phoneNumber &&
              this.validate(this.state.phoneNumber, 'phone') === false && (
                <FormFeedback invalid>
                  Please enter a valid Phone number
                </FormFeedback>
              )}
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail55">Trade Name</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              // name="trade-name"
              name="tradeName"
              id="exampleEmail55"
              placeholder=""
              required
              onBlur={this.handleBlur('tradeName')}
              onChange={this.handleChange('tradeName')}
              valid={this.state.tradeName}
              invalid={!this.state.tradeName && this.state.touched.tradeName}
            />
            <FormFeedback invalid> This field is required </FormFeedback>
          </FormGroup>

          {/* <FormGroup>
            <Label for="exampleCheckbox">Checkboxes</Label>
            <div>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check this custom checkbox"
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox2"
                label="Or this one"
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox3"
                label="But not this disabled one"
                disabled
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Radios</Label>
            <div>
              <CustomInput
                type="radio"
                id="exampleCustomRadio"
                name="customRadio"
                label="Select this custom radio"
              />
              <CustomInput
                type="radio"
                id="exampleCustomRadio2"
                name="customRadio"
                label="Or this one"
              />
              <CustomInput
                type="radio"
                id="exampleCustomRadio3"
                label="But not this disabled one"
                disabled
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Inline</Label>
            <div>
              <CustomInput
                type="checkbox"
                id="exampleCustomInline"
                label="An inline custom input"
                inline
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomInline2"
                label="and another one"
                inline
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomSelect">Custom Select</Label>
            <CustomInput
              type="select"
              id="exampleCustomSelect"
              name="customSelect"
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelect">
              Custom Multiple Select
            </Label>
            <CustomInput
              type="select"
              id="exampleCustomMutlipleSelect"
              name="customSelect"
              multiple
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomSelectDisabled">
              Custom Select Disabled
            </Label>
            <CustomInput
              type="select"
              id="exampleCustomSelectDisabled"
              name="customSelect"
              disabled
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelectDisabled">
              Custom Multiple Select Disabled
            </Label>
            <CustomInput
              type="select"
              id="exampleCustomMutlipleSelectDisabled"
              name="customSelect"
              multiple
              disabled
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser</Label>
            <CustomInput
              type="file"
              id="exampleCustomFileBrowser"
              name="customFile"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">
              File Browser with Custom Label
            </Label>
            <CustomInput
              type="file"
              id="exampleCustomFileBrowser"
              name="customFile"
              label="Yo, pick a file!"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
            <CustomInput
              type="file"
              id="exampleCustomFileBrowser"
              name="customFile"
              disabled
            />
          </FormGroup> */}
        </div>
      </Fragment>
    );
  }
}

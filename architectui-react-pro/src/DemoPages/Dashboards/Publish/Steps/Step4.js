import React, { Fragment } from 'react';
import { Field } from 'redux-form';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from 'reactstrap';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

export default class WizardStep4 extends React.Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
      touched: {
        appleTeamName: false
      }
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
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
            Account Information
            <p>
              Your Apple and Google account information is needed so we can
              start the app submission process.
            </p>
          </h3>

          {/* <div id="accordion" className="accordion-wrapper mb-3"> */}
          {/* <Card>
                            <CardHeader id="headingOne"> */}
          {/* <Button block color="link" className="text-left m-0 p-0"
                                        onClick={() => this.toggleAccordion(0)}
                                        aria-expanded={this.state.accordion[0]}
                                        aria-controls="collapseOne">
                                    <h3 className="form-heading">
                                        Account Information
                                        <p>Enter your user informations below</p>
                                    </h3>
                                </Button>
                            </CardHeader> */}

          {/* <CardBody> */}
          <FormGroup>
            <Label for="exampleEmail2">Apple Team Name</Label>
            <Input
              type="text"
              tag={Field}
              component="input"
              name="appleTeamName"
              id="exampleEmail2"
              placeholder="Provide your Apple Team name"
              required
              onBlur={this.handleBlur('appleTeamName')}
              onChange={this.handleChange('appleTeamName')}
              valid={this.state.appleTeamName}
              invalid={
                !this.state.appleTeamName && this.state.touched.appleTeamName
              }
            />
            <FormFeedback invalid> This field is required </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Google JSON File</Label>
            <S3SingleFileUploaderWithPreviewAndFileNameCapability
              label="Add Play Store JSON File"
              acceptedFiles={['application/json']}
              tag={Field}
              component="input"
              // fileName={this.props.bannerImageUrl}
              name="playStoreJsonFile"
              previewImageHeight="100px"
              previewImageWidth="100px"
              imageFolder="play_store_json_file"
              onChange={e => {
                localStorage.setItem('playStoreJsonFile', e);
              }}
            />
          </FormGroup>

          {/* </CardBody>
                        </Card> */}
          {/* <Card>
                            <CardHeader className="b-radius-0" id="headingTwo">
                                <Button block color="link" className="text-left m-0 p-0"
                                        onClick={() => this.toggleAccordion(1)}
                                        aria-expanded={this.state.accordion[1]}
                                        aria-controls="collapseTwo">
                                    <h3 className="form-heading">
                                        Credit Card Informations
                                        <p>Enter your user informations below</p>
                                    </h3>
                                </Button>
                            </CardHeader>
                            <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion"
                                      id="collapseTwo">
                                <CardBody>
                                    <FormGroup>
                                        <Label for="exampleEmail4">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail4"
                                               placeholder="with a placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword"
                                               placeholder="password placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleUrl">Url</Label>
                                        <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleNumber">Number</Label>
                                        <Input type="number" name="number" id="exampleNumber"
                                               placeholder="number placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleDatetime">Datetime</Label>
                                        <Input type="datetime" name="datetime" id="exampleDatetime"
                                               placeholder="datetime placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleDate">Date</Label>
                                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleTime">Time</Label>
                                        <Input type="time" name="time" id="exampleTime" placeholder="time placeholder"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleColor">Color</Label>
                                        <Input type="color" name="color" id="exampleColor"
                                               placeholder="color placeholder"/>
                                    </FormGroup>
                                </CardBody>
                            </Collapse>
                        </Card>
                        <Card>
                            <CardHeader id="headingThree">
                                <Button block color="link" className="text-left m-0 p-0"
                                        onClick={() => this.toggleAccordion(2)}
                                        aria-expanded={this.state.accordion[2]}
                                        aria-controls="collapseThree">
                                    <h3 className="form-heading">
                                        Personal Details
                                        <p>Enter your user informations below</p>
                                    </h3>
                                </Button>
                            </CardHeader>
                            <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion"
                                      id="collapseThree">
                                <CardBody>
                                    <FormGroup>
                                        <Label for="exampleEmail5">Input without validation</Label>
                                        <Input/>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail6">Valid input</Label>
                                        <Input valid/>
                                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Invalid input</Label>
                                        <Input invalid/>
                                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail7">Input without validation</Label>
                                        <Input/>
                                        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Valid input</Label>
                                        <Input valid/>
                                        <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Invalid input</Label>
                                        <Input invalid/>
                                        <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                                        <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                </CardBody>
                            </Collapse>
                        </Card> */}
          {/* </div> */}
        </div>
      </Fragment>
    );
  }
}

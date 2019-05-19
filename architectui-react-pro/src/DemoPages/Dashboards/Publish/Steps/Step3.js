import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

export default class WizardStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.toggleApple = this.toggleApple.bind(this);
    this.toggleGoogle = this.toggleGoogle.bind(this);
    this.state = {
      appleSelected: false,
      googleSelected: false
    };
  }

  toggleApple() {
    this.setState(prevState => ({
      appleSelected: !prevState.appleSelected
    }));
  }

  toggleGoogle() {
    this.setState(prevState => ({
      googleSelected: !prevState.googleSelected
    }));
  }

  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <div className="no-results">
            <div className="results-subtitle mt-4">App Stores</div>
            <div className="results-title">
              Select the platform to publish the app to
            </div>
            <div className="mt-3 mb-3" />
            <div className="text-center">
              <Button
                color="success"
                // type="submit"
                outline
                size="lg"
                active={this.state.appleSelected}
                className="btn-shadow btn-wide mr-3"
                onClick={this.toggleApple}
              >
                Apple
              </Button>
              <Button
                color="success"
                // type="submit"
                outline
                size="lg"
                active={this.state.googleSelected}
                className="btn-shadow btn-wide"
                onClick={this.toggleGoogle}
              >
                Google
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

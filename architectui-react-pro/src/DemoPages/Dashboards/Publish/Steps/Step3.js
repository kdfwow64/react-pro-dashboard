import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

export default class WizardStep3 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <div className="no-results">
            <div className="results-subtitle mt-4">Finished!</div>
            <div className="results-title">
              Select the platform to publish the app to
            </div>
            <div className="mt-3 mb-3" />
            <div className="text-center">
              <Button
                color="success"
                type="submit"
                size="lg"
                className="btn-shadow btn-wide mr-3"
              >
                Apple
              </Button>
              <Button
                color="success"
                type="submit"
                size="lg"
                className="btn-shadow btn-wide"
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

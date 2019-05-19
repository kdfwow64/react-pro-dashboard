import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

export default class WizardStep5 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <div className="no-results">
            <div className="sa-icon sa-success animate">
              <span className="sa-line sa-tip animateSuccessTip" />
              <span className="sa-line sa-long animateSuccessLong" />

              <div className="sa-placeholder" />
              <div className="sa-fix" />
            </div>
            <div className="results-subtitle mt-4">Finished!</div>
            <div className="results-title">
              Your app submission request has been receieved!
            </div>
            <div className="mt-3 mb-3" />
            <div className="text-center">
              <Button
                color="success"
                type="submit"
                size="lg"
                className="btn-shadow btn-wide"
              >
                Finish
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
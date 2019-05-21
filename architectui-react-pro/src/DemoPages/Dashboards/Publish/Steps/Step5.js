import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import { Snackbar } from '@material-ui/core';

export default class WizardStep5 extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      snackbarOpen: false
    };
  }

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
        {/* 
        <Snackbar
          style={{ marginBottom: '10px' }}
          ContentProps={{ style: { fontSize: '20px' } }}
          message={<span>Saving...</span>}
          autoHideDuration={1000}
          onClose={() => {
            this.setState({ snackbarOpen: false });

          }}
          open={this.state.snackbarOpen}
        />  */}
      </Fragment>
    );
  }
}

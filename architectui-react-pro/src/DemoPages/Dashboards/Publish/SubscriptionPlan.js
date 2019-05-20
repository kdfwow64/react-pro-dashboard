// tslint:disable
import * as React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { API_ROOT } from '../../../utilities/api-config';
// import { API_ROOT } from '../../../../shared/util/api-config';
// import { sendSlackMessage } from '../../../../shared/util/slack-notify';

export default class SubscriptionPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      loading: false,
      selectedPlanId: ''
    };
  }

  componentDidMount() {
    // sendSlackMessage('Subscription Plan loaded');
    this.getSubscriptions();
  }

  getSubscriptions() {
    axios
      .get(`${API_ROOT}/api/subscription-plans`)
      .then(response => {
        const plans = response.data;
        const filteredPlans = plans.filter(item => {
          return item.planId >= 1000;
        });

        for (let i in filteredPlans) {
          let plan = filteredPlans[i];
          const featuresString = plan.planFeatures;
          const featuresJson = JSON.parse(featuresString);
          plan.planFeatures = featuresJson;
        }
        this.setState({ plans: filteredPlans });
      })
      .catch(error => {});
  }

  subscribePlanClicked = planId => {
    // sendSlackMessage(`Subscription plan button clicked: ${  planId}`);
    console.log(planId);
    this.setState({ loading: true });
    this.setState({ selectedPlanId: planId });
    axios
      .post(`${API_ROOT}/social/subscribe-plan?planId=${planId}`, {})
      .then(response => {
        console.log(response.data);
        this.setState({ loading: false });
        window.open(response.data, '_blank');
        this.props.onClose();
      })
      .catch(exception => {
        console.log(exception);
        this.setState({ loading: false });
        this.props.onClose();
      });
  };

  render() {
    return (
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">
                  Choose a plan that suits you best.
                </h1>
                <h1 className="text-center display-4 w-100">
                  Invest in your mobile commerce success journey
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-5"
          style={{
            backgroundImage: `linear-gradient(to left bottom, rgba(189, 195, 199, .75), rgba(44, 62, 80, .75))`,
            backgroundSize: '100%'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="text-center mx-auto col-md-12">
                <h1>Pick a pricing</h1>
              </div>
            </div>
            <div className="row">
              {this.state.plans.map(plan => {
                const loadingButton = plan.planId === this.state.selectedPlanId;
                return (
                  <div className="col-lg-4 p-3">
                    <div className="card text-center">
                      <div className="card-body p-4">
                        <h5>
                          {' '}
                          <b>{plan.planName}</b>{' '}
                        </h5>
                        <h2 className="my-3">
                          {' '}
                          <b>${plan.planPrice}</b>{' '}
                          <b style={{ textDecoration: 'line-through' }}>
                            ${plan.compareAtPrice}
                          </b>{' '}
                          <sub>/month</sub>{' '}
                        </h2>
                        <p className="my-3">{plan.planDescription}</p>
                        <hr />
                        <ul className="list-unstyled my-3">
                          {plan.planFeatures.map(planFeature => (
                            <li className="mb-1">{planFeature}</li>
                          ))}
                        </ul>
                        {plan.planPrice === '0.0' ? null : (
                          <Button
                            color="primary"
                            disabled={this.state.loading}
                            onClick={() => {
                              this.subscribePlanClicked(plan.planId);
                            }}
                            loading={loadingButton}
                          >
                            Start now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

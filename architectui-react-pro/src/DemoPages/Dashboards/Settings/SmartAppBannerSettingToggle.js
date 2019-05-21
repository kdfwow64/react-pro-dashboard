import React, { Fragment } from 'react';
import Ionicon from 'react-ionicons';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  CardHeader,
  Input,
  Button,
  CardFooter
} from 'reactstrap';
import Switch from 'react-switch';
import { Field } from 'redux-form';
import StatefulToolTip from '../shared/util/StatefulToolTip';

class SmartAppBannerSettingToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: this.props.enabled
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.enabled !== this.props.enabled) {
      this.setState({ enabled: nextProps.enabled });
    }
  }

  handleChangeSwitch = () => {
    this.props.onChange(!this.state.enabled);
    this.setState({ enabled: !this.state.enabled });
  };

  render() {
    const { enabled } = this.state;
    const textStatus = enabled ? 'enabled' : 'disabled';

    return (
      <Fragment>
        <Row>
          <Col xs={12} sm={6}>
            <p style={{ fontSize: '15px' }}>
              Smart App Banner is{' '}
              <span style={{ fontWeight: 'bold' }}>{textStatus}</span>
              <span id="smartAppBannerToolTip">
                <Ionicon
                  fontSize="20px"
                  color="#fff"
                  icon="ios-help"
                  className="help_icon"
                />
              </span>
              <StatefulToolTip
                text="Show a banner to download the mobile app when users visit your store website on mobile devices."
                tooltip_target="smartAppBannerToolTip"
              />
            </p>
          </Col>
          <Col xs={12} sm={6}>
            <Switch
              checked={this.state.enabled}
              onChange={this.handleChangeSwitch.bind(this)}
              className="mr-2 mb-2"
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default SmartAppBannerSettingToggle;

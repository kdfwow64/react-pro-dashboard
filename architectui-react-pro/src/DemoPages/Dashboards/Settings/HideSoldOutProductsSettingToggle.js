import React, { Fragment } from 'react';
import Ionicon from 'react-ionicons';
import { Field } from 'redux-form';
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
import RealTimeToolTip from '../shared/util/RealTimeToolTip';
import StatefulToolTip from '../shared/util/StatefulToolTip';

export const renderTextField = ({
  input,
  label,
  multiLine,
  meta: { touched, error },
  ...custom
}) => <Input type="text" />;

class HideSoldOutProductsSettingToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeSwitch = this.handleChangeSwitch.bind(this);
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
    const textStatus = enabled ? 'shown' : 'hidden';
    const style = {
      style: {
        backgroundImage:
          'url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%3E%3Cstyle%20type=%22text/css%22%3Ecircle,%20ellipse,%20line,%20path,%20polygon,%20polyline,%20rect,%20text%20%7B%20fill:%20%235c6ac4%20!important;%20%7D%3C/style%3E%3Cpath%20d=%22M17%202c.553%200%201%20.448%201%201v5c0%20.552-.447%201-1%201s-1-.448-1-1V5.414l-7.293%207.293c-.195.195-.45.293-.707.293s-.512-.098-.707-.293c-.39-.39-.39-1.023%200-1.414L14.586%204H12c-.553%200-1-.448-1-1s.447-1%201-1h5zm-4%209c.553%200%201%20.448%201%201v5c0%20.552-.447%201-1%201H3c-.553%200-1-.448-1-1V7c0-.552.447-1%201-1h5c.553%200%201%20.448%201%201s-.447%201-1%201H4v8h8v-4c0-.552.447-1%201-1z%22/%3E%3C/svg%3E%0A")',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '16px 16px',
        paddingRight: '18px'
      }
    };

    return (
      <Fragment>
        <Row>
          <Col xs={12} sm={6}>
            <p style={{ fontSize: '15px' }}>
              Sold Out Products are{' '}
              <span style={{ fontWeight: 'bold' }}>{textStatus}</span>
              <span
                id="realhideSoldOutProductsToolTip"
                className="realtimetooltip"
              >
                RT
              </span>
              <span id="hideSoldOutProductsToolTip">
                <Ionicon
                  fontSize="20px"
                  color="#fff"
                  icon="ios-help"
                  className="help_icon"
                />
              </span>
              <RealTimeToolTip tooltip_target="realhideSoldOutProductsToolTip" />
              <StatefulToolTip
                text="Hide sold out products in the mobile app."
                tooltip_target="hideSoldOutProductsToolTip"
              />
            </p>
          </Col>
          <Col xs={12} sm={6}>
            <Switch
              checked={this.state.enabled}
              onChange={() => this.handleChangeSwitch()}
              className="mr-2 mb-2"
            />
          </Col>
        </Row>
        {this.state.enabled ? (
          <div /* style={styles.apiUrl} */>
            <Card sectioned>
              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <b>API URL</b>
                    <span id="api_url">
                      <Ionicon
                        fontSize="20px"
                        color="#fff"
                        icon="ios-help"
                        className="help_icon"
                      />
                    </span>
                    <StatefulToolTip
                      text={"Enter the 'Example url' from private app."}
                      tooltip_target="api_url"
                    />
                    <p>
                      Enter the <i>Example url</i> from private app.{' '}
                      <a
                        href="https://youtu.be/WziuBid3YcQ"
                        target="_blank"
                        style={style.style}
                      >
                        {' '}
                        Watch how{' '}
                      </a>
                    </p>
                  </Col>

                  <Col item xs={12} sm={6}>
                    <Field
                      name="apiUrl"
                      component={renderTextField}
                      ref={this.saveRef}
                      onChange={this.props.onChange(!this.state.enabled)}
                      withRef
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        ) : null}
      </Fragment>
    );
  }
}
export default HideSoldOutProductsSettingToggle;

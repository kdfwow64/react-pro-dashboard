import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Card, Col, Modal, ModalBody, Row } from 'reactstrap';
import bg1 from '../../../assets/utils/images/dropdown-header/abstract1.jpg';
import bg2 from '../../../assets/utils/images/dropdown-header/city2.jpg';
import PageTitle from '../../../Layout/AppMain/PageTitle';

export default class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.toggleExplainer = this.toggleExplainer.bind(this);
    this.toggleWalk = this.toggleWalk.bind(this);

    this.state = {
      modalExplainer: false,
      modalWalk: false
    };
  }

  toggleExplainer() {
    this.setState({
      modalExplainer: !this.state.modalExplainer
    });
  }

  toggleWalk() {
    this.setState({
      modalWalk: !this.state.modalWalk
    });
  }

  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <PageTitle
            heading="Tutorials"
            subheading="Watch tutorial videos to learn more."
            icon="pe-7s-video icon-gradient bg-sunny-morning"
          />
          <div>
            <Row>
              <Col
                md="6"
                lg="4"
                onClick={() => {
                  this.setState({ modalWalk: true });
                }}
              >
                <Card className="mb-3 profile-block">
                  <div className="dropdown-menu-header">
                    <img src={bg1} alt="" className="profile-blur opacity-10" />
                    <div className="profile-inner bg-warning opacity-5" />
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper avatar-icon-lg">
                        <div className="font-icon-wrapper font-icon-lg">
                          <i className="pe-7s-play" alt="Avatar 5" />
                        </div>
                      </div>
                      <h5 className="menu-header-title">AppIt Walkthrough</h5>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col
                md="6"
                lg="4"
                onClick={() => {
                  this.setState({ modalExplainer: true });
                }}
              >
                <Card className="mb-3 profile-block">
                  <div className="dropdown-menu-header">
                    <img src={bg2} alt="" className="profile-blur opacity-10" />
                    <div className="profile-inner bg-dark opacity-6" />
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper avatar-icon-lg">
                        <div className="font-icon-wrapper font-icon-lg">
                          <i className="pe-7s-play" alt="Avatar 5" />
                        </div>
                      </div>
                      <h5 className="menu-header-title">AppIt Explainer</h5>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Modal
              isOpen={this.state.modalWalk}
              toggle={this.toggleWalk}
              className={this.props.className}
              width={560}
            >
              {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
              <ModalBody>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/KhoM4mfzSy0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </ModalBody>
              {/* <ModalFooter>
                <Button color="link" onClick={this.toggle}>
                  Ok
                </Button>
              </ModalFooter> */}
            </Modal>

            <Modal
              isOpen={this.state.modalExplainer}
              toggle={this.toggleExplainer}
              className={this.props.className}
              width={560}
            >
              {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
              <ModalBody>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/gvicwQDqkIU"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </ModalBody>
              {/* <ModalFooter>
                <Button color="link" onClick={this.toggle}>
                  Ok
                </Button>
              </ModalFooter> */}
            </Modal>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

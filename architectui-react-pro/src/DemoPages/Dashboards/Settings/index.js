import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Card, CardBody, CardTitle, Row, Col, Input } from 'reactstrap';

export default class SettingsDashboard extends Component {

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Card className="main-card mb-3">
                        <CardBody>
                            <Row>
                                <Col md={6}>
                                    <CardTitle>Storefront Token</CardTitle>
                                    <p>Your storefront token from Private app. See how to create one.</p>
                                </Col>
                                <Col md={6}>
                                    <Input type="text"/>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card className="main-card mb-3">
                        <CardBody>
                            <Row>
                                <Col md={6}>
                                    <CardTitle>Storefront Token</CardTitle>
                                    <p>Your storefront token from Private app. See how to create one.</p>
                                </Col>
                                <Col md={6}>
                                    <Input type="text"/>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

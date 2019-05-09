import axios from 'axios';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui';
import * as moment from 'moment';
import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Bar, HorizontalBar, Line } from 'react-chartjs-2';
import Loader from 'react-loaders';
import { Card } from 'reactstrap';
import PageTitle from '../../../Layout/AppMain/PageTitle';
var API_ROOT = 'https://thesearchit.com';

export default class AnalyticsDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latestVersion: '',
            activeUserCountsLabels: [],
            activeUserCountsDatasetDaily: [],
            activeUserCountsDatasetWeekly: [],
            activeUserCountsDatasetMonthly: [],

            sessionCount: 0,
            averageSessionsPerUser: 0,
            sessionPerDeviceLabels: [],
            sessionPerDeviceDataset: [],

            modelNameLabels: [],
            modelCounts: [],

            versionDetailsLabels: [],
            versionDetailsDataset: [],

            api_complete_progress: 0
        };
    }

    componentDidMount() {
        // TODO: Fetch latest version here

        // Active users
        axios.get(`${API_ROOT}/api/v1/app-center/analytics/active-device-counts`)
            .then(response => {
                const data = response.data;
                const activeUserCountsLabels = data.daily.map(session => {
                    const formattedDate = this.formatDateString(session.datetime);
                    return formattedDate;
                });
                this.setState({ activeUserCountsLabels });
                const activeUserCountsDatasetDaily = data.daily.map(session => {
                    return (session.count);
                });
                this.setState({ activeUserCountsDatasetDaily });

                const activeUserCountsDatasetWeekly = data.weekly.map(user => {
                    return user.count;
                });
                this.setState({ activeUserCountsDatasetWeekly });

                const activeUserCountsDatasetMonthly = data.monthly.map(user => {
                    return user.count;
                });
                this.setState({ activeUserCountsDatasetMonthly });

                this.setState({ api_complete_progress: this.state.api_complete_progress + 25 });
            })
            .catch(error => {

            });

        axios.get(`${API_ROOT}/api/v1/app-center/analytics/sessions-per-device`)
            .then(response => {
                const data = response.data;
                const sessionPerDeviceLabels = data.sessionsPerUser.map(session => {
                    const formattedDate = this.formatDateString(session.datetime);
                    return formattedDate;
                });
                this.setState({ sessionPerDeviceLabels });

                const sessionPerDeviceDataset = data.sessionsPerUser.map(session => {
                    return session.count;
                });
                this.setState({ sessionPerDeviceDataset });

                this.setState({ sessionCount: data.totalCount });
                this.setState({ averageSessionsPerUser: data.averageSessionsPerUser });

                this.setState({ api_complete_progress: this.state.api_complete_progress + 25 });
            })
            .catch(error => {

            });

        // Device models
        axios.get(`${API_ROOT}/api/v1/app-center/analytics/device-counts`)
            .then(response => {
                const data = response.data;
                const modelNameLabels = data.models.map(model => {
                    return model.modelName;
                });
                const modelCounts = data.models.map(model => {
                    return model.count;
                });
                this.setState({ modelNameLabels });
                modelCounts.push(0); // start the x axis from 0
                this.setState({ modelCounts });

                this.setState({ api_complete_progress: this.state.api_complete_progress + 25 });
            })
            .catch(error => {

            });

        // Version details
        axios.get(`${API_ROOT}/api/v1/app-center/analytics/version-details`)
            .then(response => {
                const data = response.data;
                const versionDetailsLabels = data.versions.map(version => {
                    return version.version;
                });
                this.setState({ versionDetailsLabels });

                const versionDetailsDataset = data.versions.map(version => {
                    return version.count;
                });
                this.setState({ versionDetailsDataset });

                this.setState({ api_complete_progress: this.state.api_complete_progress + 25 });
            })
            .catch(error => {

            });
    }

    formatDateString(string) {
        const formattedDateString = moment(string).format('d MMM');
        return formattedDateString;
    }

    ifAnyNonZero(array) {
        if (array !== undefined) {
            for (const iterator of array) {
                if (iterator !== 0 && iterator !== '0') {
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        const activeUsersData = {
            labels: this.state.activeUserCountsLabels,
            datasets: [
                {
                    label: 'Daily (' + this.state.activeUserCountsDatasetDaily[this.state.activeUserCountsDatasetDaily.length - 1] + ')',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(118,183,167,1)',
                    borderColor: 'rgba(118,183,167,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.activeUserCountsDatasetDaily
                },
                {
                    label: 'Weekly (' + this.state.activeUserCountsDatasetWeekly[this.state.activeUserCountsDatasetWeekly.length - 1] + ')',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(120,107,188,1)',
                    borderColor: 'rgba(120,107,188,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.activeUserCountsDatasetWeekly
                },
                {
                    label: 'Monthly (' + this.state.activeUserCountsDatasetMonthly[this.state.activeUserCountsDatasetMonthly.length - 1] + ')',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(103,173,203,1)',
                    borderColor: 'rgba(103,173,203,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.activeUserCountsDatasetMonthly
                }
            ]
        };

        const dailySessionsUsersData = {
            labels: this.state.sessionPerDeviceLabels,
            datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(217,112,85,1)',
                    borderColor: 'rgba(217,112,85,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.sessionPerDeviceDataset
                }
            ]
        };

        const topDevicesData = {
            labels: this.state.modelNameLabels,
            datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(101,172,204,1)',
                    borderColor: 'rgba(101,172,204,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.modelCounts
                }
            ]
        };

        const versionDetailsData = {
            labels: this.state.versionDetailsLabels,
            datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(255,220,73,1)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.versionDetailsDataset
                }
            ]
        };

        let ui;
        if (this.state.api_complete_progress === 100) {
            if (this.ifAnyNonZero(this.state.activeUserCountsDatasetDaily) ||
                this.ifAnyNonZero(this.state.activeUserCountsDatasetWeekly) ||
                this.ifAnyNonZero(this.state.activeUserCountsDatasetMonthly) ||
                this.state.sessionCount > 0 ||
                this.state.averageSessionsPerUser > 0 ||
                this.ifAnyNonZero(this.state.sessionPerDeviceDataset) ||
                this.ifAnyNonZero(this.state.modelCounts) ||
                this.ifAnyNonZero(this.state.versionDetailsDataset)
            ) {
                ui = (
                    <Fragment>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="TabsAnimation"
                        transitionAppear={true}
                        transitionAppearTimeout={0}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <PageTitle
                            heading="Analytics"
                            subheading="This is an example dashboard created using build-in elements and components."
                            icon="pe-7s-graph3 icon-gradient bg-mean-fruit"
                        />
                            <Card sectioned>
                                {/* <FormLayout> */}
                                    <Card sectioned>
                                        {/* <DisplayText size="small">Active Users <StatefulToolTip position="right" arrow="center"
                                            id="activeUsersToolTip"
                                            text="Each point represents the number of unique users that used the app over the previous 1 day (daily), 7 days (weekly) and 30 days (monthly) respectively." /></DisplayText> */}
                                        <Line data={activeUsersData} />
                                    </Card>
                                    <Card sectioned>
                                        <Table>
                                            <TableBody displayRowCheckbox={false}>
                                                <TableRow>
                                                    <TableRowColumn>
                                                        {/* <DisplayText size="small">Daily session per user <StatefulToolTip position="right" arrow="center"
                                                            id="dailySessionsToolTip"
                                                            text="Each point is the average number of sessions per unique user for that day." /></DisplayText> */}
                                                        <Line data={dailySessionsUsersData} />
                                                        {/* <Stack distribution="fill"> */}
                                                            <div>
                                                                <p>TOTAL SESSIONS</p>
                                                                {/* <p><DisplayText size="small">{this.state.sessionCount}</DisplayText></p> */}
                                                            </div>
                                                            <div>
                                                                <p>AVG. SESSIONS PER DAY</p>
                                                                {/* <p><DisplayText size="small">{this.state.averageSessionsPerUser}</DisplayText></p> */}
                                                            </div>
                                                        {/* </Stack> */}
                                                    </TableRowColumn>
                                                    <TableRowColumn>
                                                        {/* <DisplayText size="small">Top devices <StatefulToolTip position="right" arrow="center"
                                                            id="topDevicesToolTip"
                                                            text="The number of active users for the top used models. OS Distribution: the distribution of top 4 OS version of active users." /></DisplayText> */}
                                                        <HorizontalBar data={topDevicesData} />
                                                    </TableRowColumn>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Card>
                                    <Card sectioned>
                                        {/* <DisplayText size="small">Active users per version <StatefulToolTip position="right" arrow="center"
                                            id="versionDetailsToolTip"
                                            text="Distribution of the number of users that were active, by version. Only the latest 20 versions are displayed." /></DisplayText> */}
                                        <Bar data={versionDetailsData} />
                                    </Card>
                                {/* </FormLayout> */}
                            </Card>
                    </ReactCSSTransitionGroup>
                </Fragment>
                );
            } else {
                // Show empty data page
                // ui = (
                //     <EmptyState
                //         heading="Understand how people use your app"
                //         action={{ content: '' }}
                //         image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                //     >
                //         <p>Analytics will start showing up here once there is enough data.</p>
                //     </EmptyState>
                // );
            }
        } else {
            ui = (
                <Loader type="ball-scale"/>
            );
        }
        return (ui);
    }
}

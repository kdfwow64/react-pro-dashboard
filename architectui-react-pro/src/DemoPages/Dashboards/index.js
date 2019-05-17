import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
// DASHBOARDS
import AnalyticsDashboard from './Analytics';
import CommerceDashboard from './Commerce';
import CRMDashboard from './CRM';
import DesignApp from './Design';
import DesignCart from './Design/Cart/Cart';
import DesignCollection from './Design/Collection/collections';
import DesignLanding from './Design/Landing';
import DesignProduct from './Design/Product/products';
import DesignSearch from './Design/Search/Search';
import DesignUser from './Design/User/landing-user-section';
import Integrations from './Integrations';
import MinimalDashboard1 from './Minimal/Variation1';
import MinimalDashboard2 from './Minimal/Variation2';
import PreviewApp from './PreviewApp';
import Publish from './Publish';
import PushNotifications from './PushNotifications';
import ScheduledNotifications from './PushNotifications/ScheduledNotifications';
import Referral from './Referral';
import SalesDashboard from './Sales';
import SettingsDashboard from './Settings';
import Tutorials from './Tutorials';
/* var url = window.location + '';
var split_url = url.split("/");
var lastName = split_url[split_url.length-1]; */

const Dashboards = ({ match }) => (
  <Fragment>
    {/* <ThemeOptions/> */}
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        {
          // lastName === 'analytics' &&
          <div className="app-main__inner">
            <Route
              path={`${match.url}/analytics`}
              component={AnalyticsDashboard}
            />
            <Route path={`${match.url}/sales`} component={SalesDashboard} />
            <Route
              path={`${match.url}/commerce`}
              component={CommerceDashboard}
            />
            <Route path={`${match.url}/crm`} component={CRMDashboard} />
            <Route path={`${match.url}/publish`} component={Publish} />
            <Route
              path={`${match.url}/settings`}
              component={SettingsDashboard}
            />
            <Route
              path={`${match.url}/integrations`}
              component={Integrations}
            />
            <Route path={`${match.url}/tutorials`} component={Tutorials} />
            <Route
              path={`${match.url}/push-notifications`}
              component={PushNotifications}
            />
            <Route
              path={`${match.url}/push-notifications-scheduled`}
              component={ScheduledNotifications}
            />
            <Route path={`${match.url}/preview-app`} component={PreviewApp} />
            <Route
              path={`${match.url}/get-a-free-month`}
              component={Referral}
            />
            <Route
              path={`${match.url}/minimal-dashboard-1`}
              component={MinimalDashboard1}
            />
            <Route
              path={`${match.url}/minimal-dashboard-2`}
              component={MinimalDashboard2}
            />
          </div>
        }

        <div className="designPagesTop">
          <Route path={`${match.url}/design`} component={DesignApp} />
          <Route
            path={`${match.url}/design-landing`}
            component={DesignLanding}
          />
          <Route
            path={`${match.url}/design-collection`}
            component={DesignCollection}
          />
          <Route
            path={`${match.url}/design-product`}
            component={DesignProduct}
          />
          <Route path={`${match.url}/design-user`} component={DesignUser} />
          <Route path={`${match.url}/design-cart`} component={DesignCart} />
          <Route path={`${match.url}/design-search`} component={DesignSearch} />
        </div>

        {/* <AppFooter/> */}
      </div>
    </div>
  </Fragment>
);

export default Dashboards;

import { combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reducers from '../reducers';
import authentication from '../utilities/authentication';
// import appDesign from '../utilities/app-design';
// import appHomePage from '../utilities/app-home-page';
// import appMiscSettings from '../utilities/app-misc-settings';
import appSettings from '../utilities/app-settings';
// import collectionListings from '../utilities/collection-listing';
import goLive from '../utilities/go-live';
// import providerShopDetails from '../utilities/provider-shop-details';
import triggerBuild from '../utilities/trigger-build';

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
      authentication,
      goLive,
      appSettings,
      // appMiscSettings,
      // appDesign,
      // collectionListings,
      triggerBuild,
      // providerShopDetails,
      // appHomePage
      form: reduxFormReducer
    }),
    {},
  );
}
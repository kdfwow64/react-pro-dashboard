// tslint:disable
import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ChromePicker } from 'react-color';
import Loader from 'react-loaders';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Button, Card, CardHeader, Col, Collapse, Row } from 'reactstrap';
import { DropdownList } from 'react-widgets';
import { API_ROOT } from '../../../../utilities/api-config';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';
import { themeColorFromName } from '../mobile-theme-utils';
import ThemeOptions from '../theme-options';
import CreateAccountForm from './create-account-form';
import CreateAccountOptions from './create-account-options';
import CreateLoginForm from './create-login-form';
import CreateLoginOptions from './create-login-option';
import OrderDetails from './order-detail-form';
import Orderdetailoption from './order-detail-option';
import Orderfavorite from './order-favourite-form';
import Orderhistory from './order-history-form';
import OrderHistoryOption from './order-history-option';
import CreateSettingForm from './setting-account-form';
import SettingAccountOption from './setting-account-option';
import CreateContactForm from './user-contact-form';
import UserReview from './user-review-form';

/** @type {{swatch: React.CSSProperties, popover: React.CSSProperties, cover: React.CSSProperties}} */
const styles = {
  swatch: {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '15px',
    top: '4px'
  },
  popover: {
    position: 'absolute',
    zIndex: 2
  },
  cover: {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  }
};
class LandingUserSection extends React.Component {
  homeTopTabsShowEditAlert = null;

  constructor(props) {
    super(props);
    this.onBGColorChangeComplete = this.onBGColorChangeComplete.bind(this);
    this.onInputBGColorChangeComplete = this.onInputBGColorChangeComplete.bind(
      this
    );
    this.onInputIconColorChangeComplete = this.onInputIconColorChangeComplete.bind(
      this
    );
    this.onInputTitleColorChangeComplete = this.onInputTitleColorChangeComplete.bind(
      this
    );
    this.onButtonColorChangeComplete = this.onButtonColorChangeComplete.bind(
      this
    );
    this.onButtonTitleColorChangeComplete = this.onButtonTitleColorChangeComplete.bind(
      this
    );
    this.onGeneralTextColorChangeComplete = this.onGeneralTextColorChangeComplete.bind(
      this
    );
    this.onTextLinkColorChangeComplete = this.onTextLinkColorChangeComplete.bind(
      this
    );

    this.onloginBGColorChangeComplete = this.onloginBGColorChangeComplete.bind(
      this
    );
    this.onloginInputBGColorChangeComplete = this.onloginInputBGColorChangeComplete.bind(
      this
    );
    this.onloginInputIconColorChangeComplete = this.onloginInputIconColorChangeComplete.bind(
      this
    );
    this.onloginInputTitleColorChangeComplete = this.onloginInputTitleColorChangeComplete.bind(
      this
    );
    this.onloginButtonColorChangeComplete = this.onloginButtonColorChangeComplete.bind(
      this
    );
    this.onloginButtonTitleColorChangeComplete = this.onloginButtonTitleColorChangeComplete.bind(
      this
    );
    this.onloginGeneralTextColorChangeComplete = this.onloginGeneralTextColorChangeComplete.bind(
      this
    );
    this.onloginTextLinkColorChangeComplete = this.onloginTextLinkColorChangeComplete.bind(
      this
    );

    this.oncontactBGColorChangeComplete = this.oncontactBGColorChangeComplete.bind(
      this
    );
    this.oncontactInputBGColorChangeComplete = this.oncontactInputBGColorChangeComplete.bind(
      this
    );
    this.oncontactInputIconColorChangeComplete = this.oncontactInputIconColorChangeComplete.bind(
      this
    );
    this.oncontactInputTitleColorChangeComplete = this.oncontactInputTitleColorChangeComplete.bind(
      this
    );
    this.oncontactButtonColorChangeComplete = this.oncontactButtonColorChangeComplete.bind(
      this
    );
    this.oncontactButtonTitleColorChangeComplete = this.oncontactButtonTitleColorChangeComplete.bind(
      this
    );

    this.onsettingBGColorChangeComplete = this.onsettingBGColorChangeComplete.bind(
      this
    );
    this.onsettingInputBGColorChangeComplete = this.onsettingInputBGColorChangeComplete.bind(
      this
    );
    this.onsettingInputIconColorChangeComplete = this.onsettingInputIconColorChangeComplete.bind(
      this
    );
    this.onsettingInputTitleColorChangeComplete = this.onsettingInputTitleColorChangeComplete.bind(
      this
    );
    this.onsettingButtonColorChangeComplete = this.onsettingButtonColorChangeComplete.bind(
      this
    );
    this.onsettingButtonTitleColorChangeComplete = this.onsettingButtonTitleColorChangeComplete.bind(
      this
    );
    this.onsettingGeneralTextColorChangeComplete = this.onsettingGeneralTextColorChangeComplete.bind(
      this
    );

    this.onoptionBGColorChangeComplete = this.onoptionBGColorChangeComplete.bind(
      this
    );
    this.ontabbgColorChangeComplete = this.ontabbgColorChangeComplete.bind(
      this
    );
    this.ontabactiveColorChangeComplete = this.ontabactiveColorChangeComplete.bind(
      this
    );
    this.ontabinactiveColorChangeComplete = this.ontabinactiveColorChangeComplete.bind(
      this
    );
    this.onoptiontitleColorChangeComplete = this.onoptiontitleColorChangeComplete.bind(
      this
    );
    this.onoptionpriceColorChangeComplete = this.onoptionpriceColorChangeComplete.bind(
      this
    );
    this.onoptiondateColorChangeComplete = this.onoptiondateColorChangeComplete.bind(
      this
    );
    this.onimageborderChangeComplete = this.onimageborderChangeComplete.bind(
      this
    );
    this.oncellbgChangeComplete = this.oncellbgChangeComplete.bind(this);
    this.oncellsepratorColorChangeComplete = this.oncellsepratorColorChangeComplete.bind(
      this
    );

    this.onorderdetailBgColorChangeComplete = this.onorderdetailBgColorChangeComplete.bind(
      this
    );
    this.onorderdetailnumberColorChangeComplete = this.onorderdetailnumberColorChangeComplete.bind(
      this
    );
    this.onheadertitleBGColorChangeComplete = this.onheadertitleBGColorChangeComplete.bind(
      this
    );
    this.onorderdetailheaderbgColorChangeComplete = this.onorderdetailheaderbgColorChangeComplete.bind(
      this
    );
    this.onoptionaddresstextColorChangeComplete = this.onoptionaddresstextColorChangeComplete.bind(
      this
    );
    this.onoptiondetailpriceColorChangeComplete = this.onoptiondetailpriceColorChangeComplete.bind(
      this
    );
    this.onoptiondetailsproductColorChangeComplete = this.onoptiondetailsproductColorChangeComplete.bind(
      this
    );
    this.onoptiondetailsopColorChangeComplete = this.onoptiondetailsopColorChangeComplete.bind(
      this
    );
    this.onopriondetaildescChangeComplete = this.onopriondetaildescChangeComplete.bind(
      this
    );
    this.onoptiondetailcellbgColorChangeComplete = this.onoptiondetailcellbgColorChangeComplete.bind(
      this
    );
    this.onoptiondetailcellsepColorChangeComplete = this.onoptiondetailcellsepColorChangeComplete.bind(
      this
    );

    this.onaccountclick = this.onaccountclick.bind(this);
    this.onloginclick = this.onloginclick.bind(this);
    this.onhistoryclick = this.onhistoryclick.bind(this);
    this.onorderclick = this.onorderclick.bind(this);
    this.onsettingclick = this.onsettingclick.bind(this);

    this.CollectionMainSectionEditOption = this.CollectionMainSectionEditOption.bind(
      this
    );
    this.CollectionCloseEditSection = this.CollectionCloseEditSection.bind(
      this
    );
    this.navtitlehandleClose = this.navtitlehandleClose.bind(this);
    this.navtitlehandleChange = this.navtitlehandleChange.bind(this);
    this.navbghandleChange = this.navbghandleChange.bind(this);
    this.naviconhandleChange = this.naviconhandleChange.bind(this);
    this.navbghandleClose = this.navbghandleClose.bind(this);

    this.homeTopTabsShowEditAlert = React.createRef();
    this.OnCollectionEditClick = this.OnCollectionEditClick.bind(this);

    this.state = {
      bannerImageUrl: '',
      accordion: [true, false, false, false, false],
      isLoaded: false
    };
  }

  onaccountclick = tab => {
    this.setState({
      logindisplay: 'none',
      accountdisplay: 'block',
      historydisplay: 'none',
      favouritedisplay: 'none',
      orderdisplay: 'none',
      contactdisplay: 'none',
      reviewdisplay: 'none',
      settingdisplay: 'none',
      TitleUserPage: 'CREATE ACCOUNT'
    });
    this.setState({ OpenTabOption: 'yes' });

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  onloginclick = tab => {
    this.setState({
      logindisplay: 'block',
      accountdisplay: 'none',
      historydisplay: 'none',
      favouritedisplay: 'none',
      orderdisplay: 'none',
      contactdisplay: 'none',
      reviewdisplay: 'none',
      settingdisplay: 'none',
      TitleUserPage: 'LOGIN'
    });
    this.setState({ OpenTabOption: 'yes' });
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  onhistoryclick = tab => {
    this.setState({
      logindisplay: 'none',
      accountdisplay: 'none',
      historydisplay: 'block',
      favouritedisplay: 'none',
      orderdisplay: 'none',
      contactdisplay: 'none',
      reviewdisplay: 'none',
      settingdisplay: 'none',
      TitleUserPage: 'ORDER HISTORY LIST'
    });
    this.setState({ OpenTabOption: 'yes' });
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  onorderclick = tab => {
    this.setState({
      logindisplay: 'none',
      accountdisplay: 'none',
      historydisplay: 'none',
      favouritedisplay: 'none',
      orderdisplay: 'block',
      contactdisplay: 'none',
      reviewdisplay: 'none',
      settingdisplay: 'none',
      TitleUserPage: 'ORDER DETAILS'
    });
    this.setState({ OpenTabOption: 'yes' });

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  onsettingclick = tab => {
    this.setState({
      logindisplay: 'none',
      accountdisplay: 'none',
      historydisplay: 'none',
      favouritedisplay: 'none',
      orderdisplay: 'none',
      contactdisplay: 'none',
      reviewdisplay: 'none',
      settingdisplay: 'block',
      TitleUserPage: 'SETTINGS'
    });
    this.setState({ OpenTabOption: 'yes' });

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  onBGColorChangeComplete = color => {
    this.setState({ UserAccountBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onInputBGColorChangeComplete = color => {
    this.setState({ UserAccountinputBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onInputIconColorChangeComplete = color => {
    this.setState({ UserAccountinputIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onInputTitleColorChangeComplete = color => {
    this.setState({ UserAccountinputTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onButtonColorChangeComplete = color => {
    this.setState({ UserAccountbuttonColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onButtonTitleColorChangeComplete = color => {
    this.setState({ UserAccountbuttonTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onGeneralTextColorChangeComplete = color => {
    this.setState({ UserAccountgeneralTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onTextLinkColorChangeComplete = color => {
    this.setState({ UserAccounttextLinkColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  /* Login */

  onloginBGColorChangeComplete = color => {
    this.setState({ loginBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginInputBGColorChangeComplete = color => {
    this.setState({ logininputBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginInputIconColorChangeComplete = color => {
    this.setState({ logininputIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginInputTitleColorChangeComplete = color => {
    this.setState({ logininputTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginButtonColorChangeComplete = color => {
    this.setState({ loginbuttonColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginButtonTitleColorChangeComplete = color => {
    this.setState({ loginbuttonTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginGeneralTextColorChangeComplete = color => {
    this.setState({ logingeneralTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onloginTextLinkColorChangeComplete = color => {
    this.setState({ logintextLinkColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  /* Contact */

  oncontactBGColorChangeComplete = color => {
    this.setState({ contactBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncontactInputBGColorChangeComplete = color => {
    this.setState({ contactinputBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncontactInputIconColorChangeComplete = color => {
    this.setState({ contactinputIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncontactInputTitleColorChangeComplete = color => {
    this.setState({ contactinputTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncontactButtonColorChangeComplete = color => {
    this.setState({ contactbuttonColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncontactButtonTitleColorChangeComplete = color => {
    this.setState({ contactbuttonTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  /* Seeting */

  onsettingBGColorChangeComplete = color => {
    this.setState({ settingBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onsettingInputBGColorChangeComplete = color => {
    this.setState({ settinginputBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onsettingInputIconColorChangeComplete = color => {
    this.setState({ settinginputIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onsettingInputTitleColorChangeComplete = color => {
    this.setState({ settinginputTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onsettingButtonColorChangeComplete = color => {
    this.setState({ settingbuttonColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onsettingButtonTitleColorChangeComplete = color => {
    this.setState({ settingbuttonTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onsettingGeneralTextColorChangeComplete = color => {
    this.setState({ settinggeneralTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  /* Option */

  onoptionBGColorChangeComplete = color => {
    this.setState({ optionBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ontabbgColorChangeComplete = color => {
    this.setState({ tabbgColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ontabactiveColorChangeComplete = color => {
    this.setState({ tabactiveColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ontabinactiveColorChangeComplete = color => {
    this.setState({ tabinactiveColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiontitleColorChangeComplete = color => {
    this.setState({ optiontitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptionpriceColorChangeComplete = color => {
    this.setState({ optionpriceColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiondateColorChangeComplete = color => {
    this.setState({ optiondateColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onimageborderChangeComplete = color => {
    this.setState({ imageborderColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncellbgChangeComplete = color => {
    this.setState({ cellBgColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  oncellsepratorColorChangeComplete = color => {
    this.setState({ cellsepratorColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  /* Order Detail */

  onorderdetailBgColorChangeComplete = color => {
    this.setState({ orderdetailBgColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onorderdetailnumberColorChangeComplete = color => {
    this.setState({ orderdetailnumberColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onheadertitleBGColorChangeComplete = color => {
    this.setState({ headertitleBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onorderdetailheaderbgColorChangeComplete = color => {
    this.setState({ orderdetailheaderbgColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptionaddresstextColorChangeComplete = color => {
    this.setState({ optionaddresstextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiondetailpriceColorChangeComplete = color => {
    this.setState({ optiondetailpriceColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiondetailsproductColorChangeComplete = color => {
    this.setState({ optiondetailsproductColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiondetailsopColorChangeComplete = color => {
    this.setState({ optiondetailsopColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onopriondetaildescChangeComplete = color => {
    this.setState({ opriondetaildescColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiondetailcellbgColorChangeComplete = color => {
    this.setState({ optiondetailscellbgColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onoptiondetailcellsepColorChangeComplete = color => {
    this.setState({ optiondetailcellsepColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CollectionMainSectionEditOption = () => {
    this.setState({ CollectionMainSectionEditOptionValue: 'block' });
    this.setState({ ShowHideGridListView: 'none' });
  };

  CollectionCloseEditSection = () => {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  };

  navbghandleChange = navbgcolor => {
    this.setState({ navbgcolor: navbgcolor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  naviconhandleChange = naviconcolor => {
    this.setState({ naviconcolor: naviconcolor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  navtitlehandleChange = navtitlecolor => {
    this.setState({ navtitlecolor: navtitlecolor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  OnCollectionEditClick = e => {
    this.setState({ NavTitle: e });
  };

  navtitlehandleClose = () => {
    this.setState({ navtitledisplayColorPicker: false });
  };

  navbghandleClick = () => {
    this.setState({
      navbgdisplayColorPicker: !this.state.navbgdisplayColorPicker
    });
  };

  naviconhandleClick = () => {
    this.setState({
      navicondisplayColorPicker: !this.state.navicondisplayColorPicker
    });
  };

  navtitlehandleClick = () => {
    this.setState({
      navtitledisplayColorPicker: !this.state.navtitledisplayColorPicker
    });
  };

  navbghandleClose = () => {
    this.setState({ navbgdisplayColorPicker: false });
  };

  onSaveEditedItems = e => {
    const UserSettings = {
      UserAccountBGColor: this.state.UserAccountBGColor,
      UserAccountinputBGColor: this.state.UserAccountinputBGColor,
      UserAccountinputIconColor: this.state.UserAccountinputIconColor,
      UserAccountinputTitleColor: this.state.UserAccountinputTitleColor,
      UserAccountbuttonColor: this.state.UserAccountbuttonColor,
      UserAccountbuttonTitleColor: this.state.UserAccountbuttonTitleColor,
      UserAccountgeneralTextColor: this.state.UserAccountgeneralTextColor,
      UserAccounttextLinkColor: this.state.UserAccounttextLinkColor,

      loginBGColor: this.state.loginBGColor,
      logininputBGColor: this.state.logininputBGColor,
      logininputIconColor: this.state.logininputIconColor,
      logininputTitleColor: this.state.logininputTitleColor,
      loginbuttonColor: this.state.loginbuttonColor,
      loginbuttonTitleColor: this.state.loginbuttonTitleColor,
      logingeneralTextColor: this.state.logingeneralTextColor,
      logintextLinkColor: this.state.logintextLinkColor,

      contactBGColor: this.state.contactBGColor,
      contactinputBGColor: this.state.contactinputBGColor,
      contactinputIconColor: this.state.contactinputIconColor,
      contactinputTitleColor: this.state.contactinputTitleColor,
      contactbuttonColor: this.state.contactbuttonColor,
      contactbuttonTitleColor: this.state.contactbuttonTitleColor,

      settingBGColor: this.state.settingBGColor,
      settinginputBGColor: this.state.settinginputBGColor,
      settinginputIconColor: this.state.settinginputIconColor,
      settinginputTitleColor: this.state.settinginputTitleColor,
      settingbuttonColor: this.state.settingbuttonColor,
      settingbuttonTitleColor: this.state.settingbuttonTitleColor,
      settinggeneralTextColor: this.state.settinggeneralTextColor,

      reviewBgColor: this.state.reviewBgColor,
      reviewRatingColor: this.state.reviewRatingColor,
      reviewinputBGColor: this.state.reviewinputBGColor,
      reviewinputTitleColor: this.state.reviewinputTitleColor,
      reviewbuttonColor: this.state.reviewbuttonColor,
      reviewbuttonTitleColor: this.state.reviewbuttonTitleColor,
      reviewgeneralTextColor: this.state.reviewgeneralTextColor,
      reviewtextLinkColor: this.state.reviewtextLinkColor,
      reviewcellColor: this.state.reviewcellColor,
      reviewpostedColor: this.state.reviewpostedColor,
      reviewdateColor: this.state.reviewdateColor,
      reviewtextColor: this.state.reviewtextColor,
      reviewreadmoreColor: this.state.reviewreadmoreColor,

      optionBGColor: this.state.optionBGColor,
      tabbgColor: this.state.tabbgColor,
      tabactiveColor: this.state.tabactiveColor,
      tabinactiveColor: this.state.tabinactiveColor,
      optiontitleColor: this.state.optiontitleColor,
      optionpriceColor: this.state.optionpriceColor,
      optiondateColor: this.state.optiondateColor,
      imageborderColor: this.state.imageborderColor,
      cellBgColor: this.state.cellBgColor,
      cellsepratorColor: this.state.cellsepratorColor,

      favouriteColor: this.state.favouriteColor,
      favouritetitleColor: this.state.favouritetitleColor,
      favouritepriceColor: this.state.favouritepriceColor,
      favoriteimageColor: this.state.favoriteimageColor,
      favouritecellBgColor: this.state.favouritecellBgColor,
      favouritecellsepratorColor: this.state.favouritecellsepratorColor,

      orderdetailBgColor: this.state.orderdetailBgColor,
      orderdetailnumberColor: this.state.orderdetailnumberColor,
      headertitleBGColor: this.state.headertitleBGColor,
      orderdetailheaderbgColor: this.state.orderdetailheaderbgColor,
      optionaddresstextColor: this.state.optionaddresstextColor,
      optiondetailpriceColor: this.state.optiondetailpriceColor,
      optiondetailsproductColor: this.state.optiondetailsproductColor,
      optiondetailsopColor: this.state.optiondetailsopColor,
      opriondetaildescColor: this.state.opriondetaildescColor,
      optiondetailscellbgColor: this.state.optiondetailscellbgColor,
      optiondetailcellsepColor: this.state.optiondetailcellsepColor,

      CollectionMainSectionEditOptionValue: this.state
        .CollectionMainSectionEditOptionValue,
      navbgcolor: this.state.navbgcolor,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      ShowHideGridListView: this.state.ShowHideGridListView,
      OnCollectionEditValue: this.state.OnCollectionEditValue,
      TitleUserPage: this.state.TitleUserPage,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      NavTitle: this.state.NavTitle,
      bannerImageUrl: this.state.bannerImageUrl
    };
    axios.post(`${API_ROOT}/api/v2/app-user`, { UserSettings }).then(res => {
      res.data && this.homeTopTabsShowEditAlert.current.showSavedButton();
    });
  };

  DropDownGetIconUserNavCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
  };

  onThemeOptionSelection = themName => {
    this.setState({ navbgcolor: themeColorFromName(themName) });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.homeTopTabsShowEditAlert.current.setState({ selectedTheme: themName });
    this.homeTopTabsShowEditAlert.current.setState({ editedTheme: true });
  };

  componentDidMount() {
    axios.get(`${API_ROOT}/api/v2/app-user`).then(res => {
      this.setState({
        UserAccountBGColor: res.data.UserSettings.UserAccountBGColor
      });
      this.setState({
        UserAccountinputBGColor: res.data.UserSettings.UserAccountinputBGColor
      });
      this.setState({
        UserAccountinputIconColor:
          res.data.UserSettings.UserAccountinputIconColor
      });
      this.setState({
        UserAccountinputTitleColor:
          res.data.UserSettings.UserAccountinputTitleColor
      });
      this.setState({
        UserAccountbuttonColor: res.data.UserSettings.UserAccountbuttonColor
      });
      this.setState({
        UserAccountbuttonTitleColor:
          res.data.UserSettings.UserAccountbuttonTitleColor
      });
      this.setState({
        UserAccountgeneralTextColor:
          res.data.UserSettings.UserAccountgeneralTextColor
      });
      this.setState({
        UserAccounttextLinkColor: res.data.UserSettings.UserAccounttextLinkColor
      });
      this.setState({ loginBGColor: res.data.UserSettings.loginBGColor });
      this.setState({
        logininputBGColor: res.data.UserSettings.logininputBGColor
      });
      this.setState({
        logininputIconColor: res.data.UserSettings.logininputIconColor
      });
      this.setState({
        logininputTitleColor: res.data.UserSettings.logininputTitleColor
      });
      this.setState({
        loginbuttonColor: res.data.UserSettings.loginbuttonColor
      });
      this.setState({
        loginbuttonTitleColor: res.data.UserSettings.loginbuttonTitleColor
      });
      this.setState({
        logingeneralTextColor: res.data.UserSettings.logingeneralTextColor
      });
      this.setState({
        logintextLinkColor: res.data.UserSettings.logintextLinkColor
      });
      this.setState({ contactBGColor: res.data.UserSettings.contactBGColor });
      this.setState({
        contactinputBGColor: res.data.UserSettings.contactinputBGColor
      });
      this.setState({
        contactinputIconColor: res.data.UserSettings.contactinputIconColor
      });
      this.setState({
        contactinputTitleColor: res.data.UserSettings.contactinputTitleColor
      });
      this.setState({
        contactbuttonColor: res.data.UserSettings.contactbuttonColor
      }); // 'block'
      this.setState({
        contactbuttonTitleColor: res.data.UserSettings.contactbuttonTitleColor
      }); // 'none'
      this.setState({ settingBGColor: res.data.UserSettings.settingBGColor });
      this.setState({
        settinginputBGColor: res.data.UserSettings.settinginputBGColor
      });
      this.setState({
        settinginputIconColor: res.data.UserSettings.settinginputIconColor
      });
      this.setState({
        settinginputTitleColor: res.data.UserSettings.settinginputTitleColor
      });
      this.setState({
        settingbuttonColor: res.data.UserSettings.settingbuttonColor
      });
      this.setState({
        settingbuttonTitleColor: res.data.UserSettings.settingbuttonTitleColor
      });
      this.setState({
        settinggeneralTextColor: res.data.UserSettings.settinggeneralTextColor
      });
      this.setState({ reviewBgColor: res.data.UserSettings.reviewBgColor });
      this.setState({
        reviewRatingColor: res.data.UserSettings.reviewRatingColor
      });
      this.setState({
        reviewinputBGColor: res.data.UserSettings.reviewinputBGColor
      });
      this.setState({
        reviewinputTitleColor: res.data.UserSettings.reviewinputTitleColor
      });
      this.setState({
        reviewbuttonColor: res.data.UserSettings.reviewbuttonColor
      });
      this.setState({
        reviewbuttonTitleColor: res.data.UserSettings.reviewbuttonTitleColor
      });
      this.setState({
        reviewgeneralTextColor: res.data.UserSettings.reviewgeneralTextColor
      });
      this.setState({
        reviewtextLinkColor: res.data.UserSettings.reviewtextLinkColor
      });
      this.setState({ reviewcellColor: res.data.UserSettings.reviewcellColor });
      this.setState({
        reviewpostedColor: res.data.UserSettings.reviewpostedColor
      });
      this.setState({ reviewdateColor: res.data.UserSettings.reviewdateColor });
      this.setState({ reviewtextColor: res.data.UserSettings.reviewtextColor });
      this.setState({
        reviewreadmoreColor: res.data.UserSettings.reviewreadmoreColor
      });
      this.setState({ optionBGColor: res.data.UserSettings.optionBGColor });
      this.setState({ tabbgColor: res.data.UserSettings.tabbgColor });
      this.setState({ tabactiveColor: res.data.UserSettings.tabactiveColor });
      this.setState({
        tabinactiveColor: res.data.UserSettings.tabinactiveColor
      });
      this.setState({
        optiontitleColor: res.data.UserSettings.optiontitleColor
      });
      this.setState({
        optionpriceColor: res.data.UserSettings.optionpriceColor
      });
      this.setState({ optiondateColor: res.data.UserSettings.optiondateColor });
      this.setState({
        imageborderColor: res.data.UserSettings.imageborderColor
      });
      this.setState({ cellBgColor: res.data.UserSettings.cellBgColor }); // 'block'
      this.setState({
        cellsepratorColor: res.data.UserSettings.cellsepratorColor
      }); // 'none'
      this.setState({ favouriteColor: res.data.UserSettings.favouriteColor });
      this.setState({
        favouritetitleColor: res.data.UserSettings.favouritetitleColor
      });
      this.setState({
        favouritepriceColor: res.data.UserSettings.favouritepriceColor
      });
      this.setState({
        favoriteimageColor: res.data.UserSettings.favoriteimageColor
      });
      this.setState({
        favouritecellBgColor: res.data.UserSettings.favouritecellBgColor
      });
      this.setState({
        favouritecellsepratorColor:
          res.data.UserSettings.favouritecellsepratorColor
      });
      this.setState({
        orderdetailBgColor: res.data.UserSettings.orderdetailBgColor
      });
      this.setState({
        orderdetailnumberColor: res.data.UserSettings.orderdetailnumberColor
      });
      this.setState({
        headertitleBGColor: res.data.UserSettings.headertitleBGColor
      });
      this.setState({
        orderdetailheaderbgColor: res.data.UserSettings.orderdetailheaderbgColor
      }); // 'block'
      this.setState({
        optionaddresstextColor: res.data.UserSettings.optionaddresstextColor
      }); // 'none'
      this.setState({
        optiondetailpriceColor: res.data.UserSettings.optiondetailpriceColor
      });
      this.setState({
        optiondetailsproductColor:
          res.data.UserSettings.optiondetailsproductColor
      });
      this.setState({
        optiondetailsopColor: res.data.UserSettings.optiondetailsopColor
      });
      this.setState({
        opriondetaildescColor: res.data.UserSettings.opriondetaildescColor
      });
      this.setState({
        optiondetailscellbgColor: res.data.UserSettings.optiondetailscellbgColor
      });
      this.setState({
        optiondetailcellsepColor: res.data.UserSettings.optiondetailcellsepColor
      });
      this.setState({ logindisplay: res.data.UserSettings.logindisplay });
      this.setState({ historydisplay: res.data.UserSettings.historydisplay });
      this.setState({
        favouritedisplay: res.data.UserSettings.favouritedisplay
      }); // 'block'
      this.setState({ orderdisplay: res.data.UserSettings.orderdisplay }); // 'none'
      this.setState({ contactdisplay: res.data.UserSettings.contactdisplay });
      this.setState({ reviewdisplay: res.data.UserSettings.reviewdisplay });
      this.setState({ settingdisplay: res.data.UserSettings.settingdisplay });
      this.setState({
        CollectionMainSectionEditOptionValue:
          res.data.UserSettings.CollectionMainSectionEditOptionValue
      });
      this.setState({ navbgcolor: res.data.UserSettings.navbgcolor });
      this.setState({ naviconcolor: res.data.UserSettings.naviconcolor });
      this.setState({ navtitlecolor: res.data.UserSettings.navtitlecolor });
      this.setState({
        ShowHideGridListView: res.data.UserSettings.ShowHideGridListView
      });
      this.setState({
        OnCollectionEditValue: res.data.UserSettings.OnCollectionEditValue
      }); // 'block'
      this.setState({ TitleUserPage: 'CREATE ACCOUNT' }); // 'none'
      this.setState({
        DropDownGetIconheader: res.data.UserSettings.DropDownGetIconheader
      });
      this.setState({ NavTitle: res.data.UserSettings.NavTitle });
      this.setState({ bannerImageUrl: res.data.UserSettings.bannerImageUrl });
      this.setState({ logindisplay: 'none' });
      this.setState({ accountdisplay: 'block' });
      this.setState({ reviewdisplay: 'none' });
      this.setState({ historydisplay: 'none' });
      this.setState({ favouritedisplay: 'none' });
      this.setState({ orderdisplay: 'none' });
      this.setState({ contactdisplay: 'none' });
      this.setState({ settingdisplay: 'none' });
      this.setState({ isLoaded: true });
    });
  }

  ApplyNavSettings = () => {
    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  };

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  render() {
    return (
      <Fragment>
        {this.state.isLoaded && (
          <ReactCSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear
            transitionAppearTimeout={0}
            transitionEnter={false}
            id="LandingUserPageContentContainer"
            transitionLeave={false}
          >
            {window.innerWidth < 767 ? (
              <div className="mobile_hide_txt_container">
                <p>
                  Sorry, our designer needs a wider screen. If you're on a
                  mobile device, please login using a desktop computer.
                </p>
              </div>
            ) : (
              <div id="HomePageContentContainer">
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    className="user_section_main"
                    id="CollectionMainContainer"
                    style={{ border: '1px solid #efefef' }}
                  >
                    <PerfectScrollbar>
                      <div id="accordion" className="accordion-wrapper mb-3">
                        <Card>
                          <CardHeader style={{ marginBottom: '10px' }}>
                            <h3 className="leftCardHeader"> User Settings </h3>{' '}
                          </CardHeader>

                          <Card>
                            <CardHeader
                              id="headingOne"
                              onClick={() => this.onaccountclick(0)}
                            >
                              <Button
                                className="m-0 p-0 ProductImgsTitle"
                                color="link"
                                onClick={() => this.onaccountclick(0)}
                                aria-expanded={this.state.accordion[0]}
                                aria-controls="exampleAccordion1"
                              >
                                CREATE ACCOUNT
                              </Button>
                            </CardHeader>
                            <Collapse
                              isOpen={this.state.accordion[0]}
                              data-parent="#accordion"
                              id="exampleAccordion1"
                              className="proPaddBtm"
                            >
                              <CreateAccountOptions
                                onBGColorChangeComplete={
                                  this.onBGColorChangeComplete
                                }
                                onInputBGColorChangeComplete={
                                  this.onInputBGColorChangeComplete
                                }
                                onInputIconColorChangeComplete={
                                  this.onInputIconColorChangeComplete
                                }
                                onInputTitleColorChangeComplete={
                                  this.onInputTitleColorChangeComplete
                                }
                                onButtonColorChangeComplete={
                                  this.onButtonColorChangeComplete
                                }
                                onButtonTitleColorChangeComplete={
                                  this.onButtonTitleColorChangeComplete
                                }
                                onGeneralTextColorChangeComplete={
                                  this.onGeneralTextColorChangeComplete
                                }
                                onTextLinkColorChangeComplete={
                                  this.onTextLinkColorChangeComplete
                                }
                                UserAccountBGColor={
                                  this.state.UserAccountBGColor
                                }
                                UserAccountinputBGColor={
                                  this.state.UserAccountinputBGColor
                                }
                                UserAccountinputIconColor={
                                  this.state.UserAccountinputIconColor
                                }
                                UserAccountinputTitleColor={
                                  this.state.UserAccountinputTitleColor
                                }
                                UserAccountbuttonColor={
                                  this.state.UserAccountbuttonColor
                                }
                                UserAccountbuttonTitleColor={
                                  this.state.UserAccountbuttonTitleColor
                                }
                                UserAccountgeneralTextColor={
                                  this.state.UserAccountgeneralTextColor
                                }
                                UserAccounttextLinkColor={
                                  this.state.UserAccounttextLinkColor
                                }
                              />
                            </Collapse>
                          </Card>

                          <Card>
                            <CardHeader
                              id="headingOne"
                              onClick={() => this.onloginclick(1)}
                            >
                              <Button
                                className="m-0 p-0 ProductImgsTitle"
                                color="link"
                                onClick={() => this.onloginclick(1)}
                                aria-expanded={this.state.accordion[1]}
                                aria-controls="exampleAccordion1"
                              >
                                LOGIN
                              </Button>
                            </CardHeader>

                            <Collapse
                              isOpen={this.state.accordion[1]}
                              data-parent="#accordion"
                              id="exampleAccordion2"
                              className="proPaddBtm"
                            >
                              <div className="">
                                <CreateLoginOptions
                                  onloginBGColorChangeComplete={
                                    this.onloginBGColorChangeComplete
                                  }
                                  onloginInputBGColorChangeComplete={
                                    this.onloginInputBGColorChangeComplete
                                  }
                                  onloginInputIconColorChangeComplete={
                                    this.onloginInputIconColorChangeComplete
                                  }
                                  onloginInputTitleColorChangeComplete={
                                    this.onloginInputTitleColorChangeComplete
                                  }
                                  onloginButtonColorChangeComplete={
                                    this.onloginButtonColorChangeComplete
                                  }
                                  onloginButtonTitleColorChangeComplete={
                                    this.onloginButtonTitleColorChangeComplete
                                  }
                                  onloginGeneralTextColorChangeComplete={
                                    this.onloginGeneralTextColorChangeComplete
                                  }
                                  onloginTextLinkColorChangeComplete={
                                    this.onloginTextLinkColorChangeComplete
                                  }
                                  loginBGColor={this.state.loginBGColor}
                                  logininputBGColor={
                                    this.state.logininputBGColor
                                  }
                                  logininputIconColor={
                                    this.state.logininputIconColor
                                  }
                                  logininputTitleColor={
                                    this.state.logininputTitleColor
                                  }
                                  loginbuttonColor={this.state.loginbuttonColor}
                                  loginbuttonTitleColor={
                                    this.state.loginbuttonTitleColor
                                  }
                                  logingeneralTextColor={
                                    this.state.logingeneralTextColor
                                  }
                                  logintextLinkColor={
                                    this.state.logintextLinkColor
                                  }
                                />
                              </div>
                            </Collapse>
                          </Card>

                          <Card>
                            <CardHeader
                              id="headingOne"
                              onClick={() => this.onhistoryclick(2)}
                            >
                              <Button
                                className="m-0 p-0 ProductImgsTitle"
                                color="link"
                                onClick={() => this.onhistoryclick(2)}
                                aria-expanded={this.state.accordion[2]}
                                aria-controls="exampleAccordion1"
                              >
                                ORDER HISTORY LIST
                              </Button>
                            </CardHeader>
                            <Collapse
                              isOpen={this.state.accordion[2]}
                              data-parent="#accordion"
                              id="exampleAccordion3"
                              className="proPaddBtm"
                            >
                              <div className="">
                                <OrderHistoryOption
                                  onoptionBGColorChangeComplete={
                                    this.onoptionBGColorChangeComplete
                                  }
                                  ontabbgColorChangeComplete={
                                    this.ontabbgColorChangeComplete
                                  }
                                  ontabactiveColorChangeComplete={
                                    this.ontabactiveColorChangeComplete
                                  }
                                  ontabinactiveColorChangeComplete={
                                    this.ontabinactiveColorChangeComplete
                                  }
                                  onoptiontitleColorChangeComplete={
                                    this.onoptiontitleColorChangeComplete
                                  }
                                  onoptionpriceColorChangeComplete={
                                    this.onoptionpriceColorChangeComplete
                                  }
                                  onoptiondateColorChangeComplete={
                                    this.onoptiondateColorChangeComplete
                                  }
                                  onimageborderChangeComplete={
                                    this.onimageborderChangeComplete
                                  }
                                  oncellbgChangeComplete={
                                    this.oncellbgChangeComplete
                                  }
                                  oncellsepratorColorChangeComplete={
                                    this.oncellsepratorColorChangeComplete
                                  }
                                  optionBGColor={this.state.optionBGColor}
                                  tabbgColor={this.state.tabbgColor}
                                  tabactiveColor={this.state.tabactiveColor}
                                  tabinactiveColor={this.state.tabinactiveColor}
                                  optiontitleColor={this.state.optiontitleColor}
                                  optionpriceColor={this.state.optionpriceColor}
                                  optiondateColor={this.state.optiondateColor}
                                  imageborderColor={this.state.imageborderColor}
                                  cellBgColor={this.state.cellBgColor}
                                  cellsepratorColor={
                                    this.state.cellsepratorColor
                                  }
                                />
                              </div>
                            </Collapse>
                          </Card>

                          <Card>
                            <CardHeader
                              id="headingOne"
                              onClick={() => this.onorderclick(3)}
                            >
                              <Button
                                className="m-0 p-0 ProductImgsTitle"
                                color="link"
                                onClick={() => this.onorderclick(3)}
                                aria-expanded={this.state.accordion[3]}
                                aria-controls="exampleAccordion1"
                              >
                                ORDER DETAILS
                              </Button>
                            </CardHeader>
                            <Collapse
                              isOpen={this.state.accordion[3]}
                              data-parent="#accordion"
                              id="exampleAccordion4"
                              className="proPaddBtm"
                            >
                              <div className="">
                                <Orderdetailoption
                                  onorderdetailBgColorChangeComplete={
                                    this.onorderdetailBgColorChangeComplete
                                  }
                                  onorderdetailnumberColorChangeComplete={
                                    this.onorderdetailnumberColorChangeComplete
                                  }
                                  onheadertitleBGColorChangeComplete={
                                    this.onheadertitleBGColorChangeComplete
                                  }
                                  onorderdetailheaderbgColorChangeComplete={
                                    this
                                      .onorderdetailheaderbgColorChangeComplete
                                  }
                                  onoptionaddresstextColorChangeComplete={
                                    this.onoptionaddresstextColorChangeComplete
                                  }
                                  onoptiondetailpriceColorChangeComplete={
                                    this.onoptiondetailpriceColorChangeComplete
                                  }
                                  onoptiondetailsproductColorChangeComplete={
                                    this
                                      .onoptiondetailsproductColorChangeComplete
                                  }
                                  onoptiondetailsopColorChangeComplete={
                                    this.onoptiondetailsopColorChangeComplete
                                  }
                                  onopriondetaildescChangeComplete={
                                    this.onopriondetaildescChangeComplete
                                  }
                                  onoptiondetailcellbgColorChangeComplete={
                                    this.onoptiondetailcellbgColorChangeComplete
                                  }
                                  onoptiondetailcellsepColorChangeComplete={
                                    this
                                      .onoptiondetailcellsepColorChangeComplete
                                  }
                                  orderdetailBgColor={
                                    this.state.orderdetailBgColor
                                  }
                                  orderdetailnumberColor={
                                    this.state.orderdetailnumberColor
                                  }
                                  headertitleBGColor={
                                    this.state.headertitleBGColor
                                  }
                                  orderdetailheaderbgColor={
                                    this.state.orderdetailheaderbgColor
                                  }
                                  optionaddresstextColor={
                                    this.state.optionaddresstextColor
                                  }
                                  optiondetailpriceColor={
                                    this.state.optiondetailpriceColor
                                  }
                                  optiondetailsproductColor={
                                    this.state.optiondetailsproductColor
                                  }
                                  optiondetailsopColor={
                                    this.state.optiondetailsopColor
                                  }
                                  opriondetaildescColor={
                                    this.state.opriondetaildescColor
                                  }
                                  optiondetailscellbgColor={
                                    this.state.optiondetailscellbgColor
                                  }
                                  optiondetailcellsepColor={
                                    this.state.optiondetailcellsepColor
                                  }
                                />
                              </div>
                            </Collapse>
                          </Card>

                          <Card>
                            <CardHeader
                              id="headingOne"
                              onClick={() => this.onsettingclick(4)}
                            >
                              <Button
                                className="m-0 p-0 ProductImgsTitle"
                                color="link"
                                onClick={() => this.onsettingclick(4)}
                                aria-expanded={this.state.accordion[4]}
                                aria-controls="exampleAccordion1"
                              >
                                SETTINGS
                              </Button>
                            </CardHeader>

                            <Collapse
                              isOpen={this.state.accordion[4]}
                              data-parent="#accordion"
                              id="exampleAccordion5"
                              className="proPaddBtm"
                            >
                              <div className="">
                                <SettingAccountOption
                                  onsettingBGColorChangeComplete={
                                    this.onsettingBGColorChangeComplete
                                  }
                                  onsettingInputBGColorChangeComplete={
                                    this.onsettingInputBGColorChangeComplete
                                  }
                                  onsettingInputIconColorChangeComplete={
                                    this.onsettingInputIconColorChangeComplete
                                  }
                                  onsettingInputTitleColorChangeComplete={
                                    this.onsettingInputTitleColorChangeComplete
                                  }
                                  onsettingButtonColorChangeComplete={
                                    this.onsettingButtonColorChangeComplete
                                  }
                                  onsettingButtonTitleColorChangeComplete={
                                    this.onsettingButtonTitleColorChangeComplete
                                  }
                                  onsettingGeneralTextColorChangeComplete={
                                    this.onsettingGeneralTextColorChangeComplete
                                  }
                                  settingBGColor={this.state.settingBGColor}
                                  settinginputBGColor={
                                    this.state.settinginputBGColor
                                  }
                                  settinginputIconColor={
                                    this.state.settinginputIconColor
                                  }
                                  settinginputTitleColor={
                                    this.state.settinginputTitleColor
                                  }
                                  settingbuttonColor={
                                    this.state.settingbuttonColor
                                  }
                                  settingbuttonTitleColor={
                                    this.state.settingbuttonTitleColor
                                  }
                                  settinggeneralTextColor={
                                    this.state.settinggeneralTextColor
                                  }
                                />
                              </div>
                            </Collapse>
                          </Card>
                        </Card>
                      </div>
                    </PerfectScrollbar>
                  </Col>

                  <Col
                    md={8}
                    sm={6}
                    id="RightContainerScroll"
                    style={{ border: '1px solid #efefef' }}
                  >
                    <div id="mbl_bg_rit">
                      <div id="CollectionMainRightContainer">
                        <div id="ProductRightBody">
                          <div
                            id="CollectionEffectNavBarContainer"
                            style={{
                              backgroundColor:
                                this.state.navbgcolor || '#0E7C95'
                            }}
                          >
                            <div
                              id="CollectionEffectnavBars"
                              style={{
                                color: this.state.naviconcolor || '#fff'
                              }}
                            />
                            <div
                              id="CollectionEffectMyStoreTitle"
                              style={{
                                color: this.state.navtitlecolor || '#fff'
                              }}
                            >
                              {this.state.NavTitle === 'Image' && (
                                <img
                                  src={this.state.bannerImageUrl}
                                  style={{
                                    maxHeight: '40px',
                                    maxWidth: '90px'
                                  }}
                                />
                              )}
                              {this.state.NavTitle === 'Text' &&
                                this.state.TitleUserPage}
                              {this.state.NavTitle === undefined &&
                                this.state.TitleUserPage}
                            </div>
                            <div
                              id="CollectionEditMainSlider"
                              onClick={this.CollectionMainSectionEditOption}
                            >
                              <div id="CollectionEditOption">
                                <i className="lnr-pencil" />
                              </div>
                            </div>
                          </div>

                          <div
                            id="CollectionEffectBody"
                            style={{ height: '60vh' }}
                          >
                            <div
                              className="CollectionMainEditOptionContainer"
                              style={{
                                display: this.state
                                  .CollectionMainSectionEditOptionValue
                              }}
                            >
                              <div className="CollectionEditSettingOptionContainer">
                                <h2>EDIT NAVIGATION BAR</h2>
                                <p>
                                  *Note: Editing this navigation bar will
                                  override the theme's navigation bar for this
                                  page only.
                                </p>

                                <div className="CollectionMainEditTitle">
                                  <div className="col-sm-12 CollectionSettingEditTitle">
                                    <label>NAVIGATION BAR TITLE</label>
                                  </div>
                                  <div className="col-sm-12 CollectionMainEditTitleView">
                                    <DropdownList
                                      data={['Image', 'Text']}
                                      onChange={this.OnCollectionEditClick}
                                      value={this.state.NavTitle || 'Text'}
                                      textField="name"
                                    />
                                  </div>
                                </div>

                                <div className="CollectionMainEditIcon">
                                  <div className="col-sm-12 CollectionSettingIcon">
                                    <label>NAV BAR BACKGROUND COLOR </label>
                                  </div>
                                  <div className="col-sm-12 CollectionMainEditBGIconView">
                                    <input
                                      type="text"
                                      value={this.state.navbgcolor || '#0E7C95'}
                                      defaultValue={
                                        this.state.navbgcolor || '#0E7C95'
                                      }
                                      id="CollectionDropDown"
                                      className="textColorCode"
                                      onClick={this.navbghandleClick}
                                    />
                                    <div style={styles.swatch}>
                                      <div
                                        className="colorPickerBorder"
                                        style={{
                                          width: '20px',
                                          height: '20px',
                                          backgroundColor:
                                            this.state.navbgcolor || '#0E7C95'
                                        }}
                                        onClick={this.navbghandleClick}
                                      />
                                    </div>
                                    {this.state.navbgdisplayColorPicker ? (
                                      <div style={styles.popover}>
                                        <div
                                          style={this.cover}
                                          onClick={this.navbghandleClose}
                                        />
                                        <ChromePicker
                                          color={
                                            this.state.navbgcolor || '#0E7C95'
                                          }
                                          onChange={this.navbghandleChange}
                                        />
                                      </div>
                                    ) : null}
                                  </div>
                                </div>

                                <div
                                  className="CollectionMainEditIconColor"
                                  style={{
                                    display:
                                      this.state.NavTitle === 'Image'
                                        ? 'none'
                                        : 'block'
                                  }}
                                >
                                  <div className="col-sm-12 CollectionSettingEditIconColor">
                                    <label>NAV BAR TITLE COLOR</label>
                                  </div>
                                  <div className="col-sm-12 CollectionMainEditIconColorView">
                                    <input
                                      type="text"
                                      value={this.state.navtitlecolor || '#fff'}
                                      defaultValue={
                                        this.state.navtitlecolor || '#fff'
                                      }
                                      id="CollectionDropDown"
                                      className="textColorCode"
                                      onClick={this.navtitlehandleClick}
                                    />
                                    <div style={styles.swatch}>
                                      <div
                                        className="colorPickerBorder"
                                        style={{
                                          width: '20px',
                                          height: '20px',
                                          backgroundColor:
                                            this.state.navtitlecolor || '#fff'
                                        }}
                                        onClick={this.navtitlehandleClick}
                                      />
                                    </div>
                                    {this.state.navtitledisplayColorPicker ? (
                                      <div style={styles.popover}>
                                        <div
                                          style={this.cover}
                                          onClick={this.navtitlehandleClose}
                                        />
                                        <ChromePicker
                                          color={
                                            this.state.navtitlecolor || '#fff'
                                          }
                                          onChange={this.navtitlehandleChange}
                                        />
                                      </div>
                                    ) : null}
                                  </div>
                                </div>

                                <div
                                  className="CollectionMainEditImg"
                                  style={{
                                    display:
                                      this.state.NavTitle === 'Image'
                                        ? 'block'
                                        : 'none'
                                  }}
                                >
                                  <div className="col-sm-12 CollectionSettingEditImg">
                                    <label>NAV IMAGE</label>
                                  </div>
                                  <div className="col-sm-12 CollectionMainEditIconImgView">
                                    <S3SingleFileUploaderWithPreviewAndFileNameCapability
                                      label="Choose file"
                                      acceptedFiles={[
                                        'image/jpeg',
                                        'image/png'
                                      ]}
                                      fileName={this.state.bannerImageUrl}
                                      previewImageHeight="100px"
                                      previewImageWidth="100px"
                                      imageFolder="navTitleImage"
                                      onChange={value =>
                                        this.setState({ bannerImageUrl: value })
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="CollectionEditCancelButton CollectionEditButton">
                                  <span
                                    onClick={this.CollectionCloseEditSection}
                                  >
                                    CANCEL
                                  </span>
                                </div>

                                <div className="CollectionEditapplyButton CollectionEditButton">
                                  <span onClick={this.ApplyNavSettings}>
                                    APPLY
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: this.state.ShowHideGridListView
                              }}
                            >
                              <div
                                className="account_sec"
                                style={{ display: this.state.accountdisplay }}
                              >
                                <CreateAccountForm
                                  BGColor={this.state.UserAccountBGColor}
                                  inputBGColor={
                                    this.state.UserAccountinputBGColor
                                  }
                                  inputIconColor={
                                    this.state.UserAccountinputIconColor
                                  }
                                  inputTitleColor={
                                    this.state.UserAccountinputTitleColor
                                  }
                                  buttonColor={
                                    this.state.UserAccountbuttonColor
                                  }
                                  buttonTitleColor={
                                    this.state.UserAccountbuttonTitleColor
                                  }
                                  generalTextColor={
                                    this.state.UserAccountgeneralTextColor
                                  }
                                  textLinkColor={
                                    this.state.UserAccounttextLinkColor
                                  }
                                />
                              </div>

                              <div
                                className="login_sec"
                                style={{ display: this.state.logindisplay }}
                              >
                                <CreateLoginForm
                                  loginBGColor={this.state.loginBGColor}
                                  logininputBGColor={
                                    this.state.logininputBGColor
                                  }
                                  logininputIconColor={
                                    this.state.logininputIconColor
                                  }
                                  logininputTitleColor={
                                    this.state.logininputTitleColor
                                  }
                                  loginbuttonColor={this.state.loginbuttonColor}
                                  loginbuttonTitleColor={
                                    this.state.loginbuttonTitleColor
                                  }
                                  logingeneralTextColor={
                                    this.state.logingeneralTextColor
                                  }
                                  logintextLinkColor={
                                    this.state.logintextLinkColor
                                  }
                                />
                              </div>

                              <div
                                className="history_sec"
                                style={{ display: this.state.historydisplay }}
                              >
                                <Orderhistory
                                  optionBGColor={this.state.optionBGColor}
                                  tabbgColor={this.state.tabbgColor}
                                  tabactiveColor={this.state.tabactiveColor}
                                  tabinactiveColor={this.state.tabinactiveColor}
                                  optiontitleColor={this.state.optiontitleColor}
                                  optionpriceColor={this.state.optionpriceColor}
                                  optiondateColor={this.state.optiondateColor}
                                  imageborderColor={this.state.imageborderColor}
                                  cellBgColor={this.state.cellBgColor}
                                  cellsepratorColor={
                                    this.state.cellsepratorColor
                                  }
                                />
                              </div>

                              <div
                                className="favourite_sec"
                                style={{ display: this.state.favouritedisplay }}
                              >
                                <Orderfavorite
                                  favouriteColor={this.state.favouriteColor}
                                  favouritetitleColor={
                                    this.state.favouritetitleColor
                                  }
                                  favouritepriceColor={
                                    this.state.favouritepriceColor
                                  }
                                  favoriteimageColor={
                                    this.state.favoriteimageColor
                                  }
                                  favouritecellBgColor={
                                    this.state.favouritecellBgColor
                                  }
                                  favouritecellsepratorColor={
                                    this.state.favouritecellsepratorColor
                                  }
                                />
                              </div>

                              <div
                                className="order_sec"
                                style={{ display: this.state.orderdisplay }}
                              >
                                <OrderDetails
                                  orderdetailBgColor={
                                    this.state.orderdetailBgColor
                                  }
                                  orderdetailnumberColor={
                                    this.state.orderdetailnumberColor
                                  }
                                  headertitleBGColor={
                                    this.state.headertitleBGColor
                                  }
                                  orderdetailheaderbgColor={
                                    this.state.orderdetailheaderbgColor
                                  }
                                  optionaddresstextColor={
                                    this.state.optionaddresstextColor
                                  }
                                  optiondetailpriceColor={
                                    this.state.optiondetailpriceColor
                                  }
                                  optiondetailsproductColor={
                                    this.state.optiondetailsproductColor
                                  }
                                  optiondetailsopColor={
                                    this.state.optiondetailsopColor
                                  }
                                  opriondetaildescColor={
                                    this.state.opriondetaildescColor
                                  }
                                  optiondetailscellbgColor={
                                    this.state.optiondetailscellbgColor
                                  }
                                  optiondetailcellsepColor={
                                    this.state.optiondetailcellsepColor
                                  }
                                />
                              </div>

                              <div
                                className="contact_sec"
                                style={{ display: this.state.contactdisplay }}
                              >
                                <CreateContactForm
                                  contactBGColor={this.state.contactBGColor}
                                  contactinputBGColor={
                                    this.state.contactinputBGColor
                                  }
                                  contactinputIconColor={
                                    this.state.contactinputIconColor
                                  }
                                  contactinputTitleColor={
                                    this.state.contactinputTitleColor
                                  }
                                  contactbuttonColor={
                                    this.state.contactbuttonColor
                                  }
                                  contactbuttonTitleColor={
                                    this.state.contactbuttonTitleColor
                                  }
                                />
                              </div>

                              <div
                                className="review_sec"
                                style={{ display: this.state.reviewdisplay }}
                              >
                                <UserReview
                                  reviewBgColor={this.state.reviewBgColor}
                                  reviewRatingColor={
                                    this.state.reviewRatingColor
                                  }
                                  reviewinputBGColor={
                                    this.state.reviewinputBGColor
                                  }
                                  reviewinputTitleColor={
                                    this.state.reviewinputTitleColor
                                  }
                                  reviewbuttonColor={
                                    this.state.reviewbuttonColor
                                  }
                                  reviewbuttonTitleColor={
                                    this.state.reviewbuttonTitleColor
                                  }
                                  reviewgeneralTextColor={
                                    this.state.reviewgeneralTextColor
                                  }
                                  reviewtextLinkColor={
                                    this.state.reviewtextLinkColor
                                  }
                                  reviewcellColor={this.state.reviewcellColor}
                                  reviewpostedColor={
                                    this.state.reviewpostedColor
                                  }
                                  reviewdateColor={this.state.reviewdateColor}
                                  reviewtextColor={this.state.reviewtextColor}
                                  reviewreadmoreColor={
                                    this.state.reviewreadmoreColor
                                  }
                                />
                              </div>

                              <div
                                className="setting_sec"
                                style={{ display: this.state.settingdisplay }}
                              >
                                <CreateSettingForm
                                  settingBGColor={this.state.settingBGColor}
                                  settinginputBGColor={
                                    this.state.settinginputBGColor
                                  }
                                  settinginputIconColor={
                                    this.state.settinginputIconColor
                                  }
                                  settinginputTitleColor={
                                    this.state.settinginputTitleColor
                                  }
                                  settingbuttonColor={
                                    this.state.settingbuttonColor
                                  }
                                  settingbuttonTitleColor={
                                    this.state.settingbuttonTitleColor
                                  }
                                  settinggeneralTextColor={
                                    this.state.settinggeneralTextColor
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <ThemeOptions
                  selectTheme={this.onThemeOptionSelection}
                  ref={this.homeTopTabsShowEditAlert}
                  onSaveEditedItems={this.onSaveEditedItems}
                />
              </div>
            )}
          </ReactCSSTransitionGroup>
        )}
        {!this.state.isLoaded && (
          <div md={12} id="mainPageLoading">
            <Loader color="#0e7c95" type="ball-scale-multiple" />
          </div>
        )}
      </Fragment>
    );
  }
}

export default LandingUserSection;

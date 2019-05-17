// tslint:disable
// @ts-nocheck
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from 'react-loaders';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Col, Row } from 'reactstrap';
import { API_ROOT } from '../../../../utilities/api-config';
import '../index.css';
import { themeColorFromName } from '../mobile-theme-utils';
import ThemeOptions from '../theme-options';
import SearchLeftSection from './SearchLeftSection';
import SearchRightSection from './SearchRightSection';

class Cart extends React.Component {
  homeTopTabsShowEditAlert = null;

  constructor(props) {
    super(props);
    this.state = {
      bannerImageUrl: '',
      isLoaded: false
    };
    this.homeTopTabsShowEditAlert = React.createRef();
  }

  onSaveEditedItems = () => {
    const SearchSettings = {
      BGColor: this.state.BGColor,
      SearchInputColor: this.state.SearchInputColor,
      SearchInputBorder: this.state.SearchInputBorder,
      SearchIconColor: this.state.SearchIconColor,
      SearchTitleColor: this.state.SearchTitleColor,
      SearchBGColor: this.state.SearchBGColor,
      CellSeparatorColor: this.state.CellSeparatorColor,
      CellBGColor: this.state.CellBGColor,
      ProductBorderColor: this.state.ProductBorderColor,
      ProductTitleColor: this.state.ProductTitleColor,
      PriceColor: this.state.PriceColor,
      ProductIconColor: this.state.ProductIconColor,
      searchAction: this.state.searchAction,
      navbarBackgroundColorValue: this.state.navbarBackgroundColorValue,
      navbgcolor: this.state.navbgcolor,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      //  NavTitle: this.state.NavTitle,
      NavTitleValue: this.state.NavTitleValue,
      bannerImageUrl: this.state.bannerImageUrl
    };
    axios
      .post(`${API_ROOT}/api/v2/app-search`, {
        SearchSettings
      })
      .then(res => {
        res.data && this.homeTopTabsShowEditAlert.current.showSavedButton();
      });
  };

  componentDidMount() {
    axios.get(`${API_ROOT}/api/v2/app-search`).then(res => {
      this.setState({ BGColor: res.data.SearchSettings.BGColor });
      this.setState({
        SearchInputColor: res.data.SearchSettings.SearchInputColor
      });
      this.setState({
        SearchInputBorder: res.data.SearchSettings.SearchInputBorder
      });
      this.setState({
        SearchIconColor: res.data.SearchSettings.SearchIconColor
      });
      this.setState({
        SearchTitleColor: res.data.SearchSettings.SearchTitleColor
      });
      this.setState({ SearchBGColor: res.data.SearchSettings.SearchBGColor });
      this.setState({
        CellSeparatorColor: res.data.SearchSettings.CellSeparatorColor
      });
      this.setState({ CellBGColor: res.data.SearchSettings.CellBGColor });
      this.setState({
        ProductBorderColor: res.data.SearchSettings.ProductBorderColor
      });
      this.setState({
        ProductTitleColor: res.data.SearchSettings.ProductTitleColor
      });
      this.setState({ PriceColor: res.data.SearchSettings.PriceColor });
      this.setState({
        ProductIconColor: res.data.SearchSettings.ProductIconColor
      });
      this.setState({ searchAction: res.data.SearchSettings.searchAction });
      this.setState({
        navbarBackgroundColorValue:
          res.data.SearchSettings.navbarBackgroundColorValue
      });
      this.setState({ navbgcolor: res.data.SearchSettings.navbgcolor });
      this.setState({
        DropDownGetIconheader: res.data.SearchSettings.DropDownGetIconheader
      });
      this.setState({ naviconcolor: res.data.SearchSettings.naviconcolor });
      this.setState({ navtitlecolor: res.data.SearchSettings.navtitlecolor });
      // this.setState({ NavTitle: res.data.SearchSettings.NavTitle });
      this.setState({ NavTitleValue: res.data.SearchSettings.NavTitleValue });
      this.setState({ bannerImageUrl: res.data.SearchSettings.bannerImageUrl });
      this.setState({ isLoaded: true });
    });
  }

  onThemeOptionSelection = themName => {
    this.setState({ navbgcolor: themeColorFromName(themName) });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.homeTopTabsShowEditAlert.current.setState({ selectedTheme: themName });
    this.homeTopTabsShowEditAlert.current.setState({ editedTheme: true });
  };

  DropDownGetIconheader = color => {
    this.setState({ DropDownGetIconheader: color });
  };

  naviconcolor = color => {
    this.setState({ naviconcolor: color.hex });
  };

  navtitlecolor = color => {
    this.setState({ navtitlecolor: color.hex });
  };

  navbgcolor = color => {
    this.setState({ navbgcolor: color.hex });
  };

  NavTitle = color => {
    this.setState({ NavTitleValue: color });
  };

  BGColorCallback = color => {
    this.setState({ BGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SearchInputColorCallback = color => {
    this.setState({ SearchInputColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SearchInputBorderCallback = color => {
    this.setState({ SearchInputBorder: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SearchIconColorCallback = color => {
    this.setState({ SearchIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SearchTitleColorCallback = color => {
    this.setState({ SearchTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SearchBGColorCallback = color => {
    this.setState({ SearchBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CellSeparatorColorCallback = color => {
    this.setState({ CellSeparatorColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CellBGColorCallback = color => {
    this.setState({ CellBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductBorderColorCallback = color => {
    this.setState({ ProductBorderColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductTitleColorCallback = color => {
    this.setState({ ProductTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  PriceColorCallback = color => {
    this.setState({ PriceColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductIconColorCallback = color => {
    this.setState({ ProductIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  searchAction = icon => {
    this.setState({ searchAction: icon });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DisplaySaveBtn = () => {
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  bannerImageUrlCallBack = val => {
    this.setState({ bannerImageUrl: val });
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
              <Row id="HomePageContentContainer">
                <Col md={4} sm={6} id="CollectionMainContainer">
                  <PerfectScrollbar>
                    <SearchLeftSection
                      BGColorCallback={this.BGColorCallback}
                      SearchInputColorCallback={this.SearchInputColorCallback}
                      SearchInputBorderCallback={this.SearchInputBorderCallback}
                      SearchIconColorCallback={this.SearchIconColorCallback}
                      SearchTitleColorCallback={this.SearchTitleColorCallback}
                      SearchBGColorCallback={this.SearchBGColorCallback}
                      CellSeparatorColorCallback={
                        this.CellSeparatorColorCallback
                      }
                      CellBGColorCallback={this.CellBGColorCallback}
                      ProductBorderColorCallback={
                        this.ProductBorderColorCallback
                      }
                      ProductTitleColorCallback={this.ProductTitleColorCallback}
                      PriceColorCallback={this.PriceColorCallback}
                      ProductIconColorCallback={this.ProductIconColorCallback}
                      searchAction={this.searchAction}
                      BGColor={this.state.BGColor}
                      SearchInputColor={this.state.SearchInputColor}
                      SearchInputBorder={this.state.SearchInputBorder}
                      SearchIconColor={this.state.SearchIconColor}
                      SearchTitleColor={this.state.SearchTitleColor}
                      SearchBGColor={this.state.SearchBGColor}
                      CellSeparatorColor={this.state.CellSeparatorColor}
                      CellBGColor={this.state.CellBGColor}
                      ProductBorderColor={this.state.ProductBorderColor}
                      ProductTitleColor={this.state.ProductTitleColor}
                      PriceColor={this.state.PriceColor}
                      ProductIconColor={this.state.ProductIconColor}
                      searchActionValue={this.state.searchAction}
                    />
                  </PerfectScrollbar>
                </Col>
                <Col md={8} sm={6} id="RightContainerScroll">
                  <div id="mbl_bg_rit">
                    <div id="CollectionMainRightContainer">
                      <PerfectScrollbar>
                        <SearchRightSection
                          DisplaySaveBtn={this.DisplaySaveBtn}
                          BGColor={this.state.BGColor}
                          SearchInputColor={this.state.SearchInputColor}
                          SearchInputBorder={this.state.SearchInputBorder}
                          SearchIconColor={this.state.SearchIconColor}
                          SearchTitleColor={this.state.SearchTitleColor}
                          SearchBGColor={this.state.SearchBGColor}
                          CellSeparatorColor={this.state.CellSeparatorColor}
                          CellBGColor={this.state.CellBGColor}
                          ProductBorderColor={this.state.ProductBorderColor}
                          ProductTitleColor={this.state.ProductTitleColor}
                          PriceColor={this.state.PriceColor}
                          ProductIconColor={this.state.ProductIconColor}
                          searchAction={this.state.searchAction}
                          navbgcolor={this.state.navbgcolor}
                          DropDownGetIconheader={
                            this.state.DropDownGetIconheader
                          }
                          naviconcolor={this.state.naviconcolor}
                          navtitlecolor={this.state.navtitlecolor}
                          // NavTitle={this.state.NavTitle}
                          DropDownGetIconheaderCall={this.DropDownGetIconheader}
                          naviconcolorCall={this.naviconcolor}
                          navtitlecolorCall={this.navtitlecolor}
                          navbgcolorCall={this.navbgcolor}
                          NavTitleCall={this.NavTitle}
                          NavTitleValue={this.state.NavTitleValue}
                          bannerImageUrlCallBack={this.bannerImageUrlCallBack}
                          bannerImageUrl={this.state.bannerImageUrl}
                        />
                      </PerfectScrollbar>
                    </div>
                  </div>
                </Col>
                <ThemeOptions
                  selectTheme={this.onThemeOptionSelection}
                  ref={this.homeTopTabsShowEditAlert}
                  onSaveEditedItems={this.onSaveEditedItems}
                />
              </Row>
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

export default Cart;

// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../index.css';
import { themeColorFromName } from '../mobile-theme-utils';
import ThemeOptions from '../theme-options';
import CartLeftSection from './CartLeftSection';
import CartRightSection from './CartRightSection';
var API_ROOT = 'https://thesearchit.com';

class Cart extends React.Component<any, any> {
  homeTopTabsShowEditAlert: any;
  constructor(props) {
    super(props);
    this.state = {
      bannerImageUrl: ''
    };
    this.homeTopTabsShowEditAlert = this.props.homeTopTabsShowEditAlert;
  }

  onSaveEditedItems = () => {
    const CartSettings = {
      CartBGColor: this.state.CartBGColor,
      CellBGColor: this.state.CellBGColor,
      ProductTitle: this.state.ProductTitle,
      ProductOptionColor: this.state.ProductOptionColor,
      CellPriceColor: this.state.CellPriceColor,
      QuantityIconColor: this.state.QuantityIconColor,
      QuantityTextColor: this.state.QuantityTextColor,
      ApplyBGColor: this.state.ApplyBGColor,
      ApplyIconColor: this.state.ApplyIconColor,
      ApplyTextColor: this.state.ApplyTextColor,
      PriceTextColor: this.state.PriceTextColor,
      ButtonBGColor: this.state.ButtonBGColor,
      ButtonTextColor: this.state.ButtonTextColor,
      navbarBackgroundColorValue: this.state.navbarBackgroundColorValue,
      navbgcolor: this.state.navbgcolor,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      NavTitle: this.state.NavTitle,
      bannerImageUrl: this.state.bannerImageUrl,
    };

    axios
      .post(`${API_ROOT}/api/v2/app-cart`, { CartSettings })
      .then(res => {
        res.data && this.homeTopTabsShowEditAlert.current.showSavedButton();
      });
  }

  componentDidMount() {
    axios.get(`${API_ROOT}/api/v2/app-cart`).then(res => {
      this.setState({ CartBGColor: res.data.CartSettings.CartBGColor });
      this.setState({ CellBGColor: res.data.CartSettings.CellBGColor });
      this.setState({ ProductTitle: res.data.CartSettings.ProductTitle });
      this.setState({
        ProductOptionColor: res.data.CartSettings.ProductOptionColor
      });
      this.setState({ CellPriceColor: res.data.CartSettings.CellPriceColor });
      this.setState({
        QuantityIconColor: res.data.CartSettings.QuantityIconColor
      });
      this.setState({
        QuantityTextColor: res.data.CartSettings.QuantityTextColor
      });
      this.setState({ ApplyBGColor: res.data.CartSettings.ApplyBGColor });
      this.setState({ ApplyIconColor: res.data.CartSettings.ApplyIconColor });
      this.setState({ ApplyTextColor: res.data.CartSettings.ApplyTextColor });
      this.setState({ PriceTextColor: res.data.CartSettings.PriceTextColor });
      this.setState({ ButtonBGColor: res.data.CartSettings.ButtonBGColor });
      this.setState({ ButtonTextColor: res.data.CartSettings.ButtonTextColor });
      this.setState({
        navbarBackgroundColorValue:
          res.data.CartSettings.navbarBackgroundColorValue
      });
      this.setState({ navbgcolor: res.data.CartSettings.navbgcolor });
      this.setState({
        DropDownGetIconheader: res.data.CartSettings.DropDownGetIconheader
      });
      this.setState({ naviconcolor: res.data.CartSettings.naviconcolor });
      this.setState({ navtitlecolor: res.data.CartSettings.navtitlecolor });
      this.setState({ NavTitle: res.data.CartSettings.NavTitle });
      this.setState({ bannerImageUrl: res.data.CartSettings.bannerImageUrl});
    });
  }
  onThemeOptionSelection = themName => {
    this.setState({ navbgcolor: themeColorFromName(themName) });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.homeTopTabsShowEditAlert.current.setState({ selectedTheme: themName });
    this.homeTopTabsShowEditAlert.current.setState({ editedTheme: true });
  }
  DropDownGetIconheader = color => {
    this.setState({ DropDownGetIconheader: color });
  }
  naviconcolor = color => {
    this.setState({ naviconcolor: color.hex });
  }
  navtitlecolor = color => {
    this.setState({ navtitlecolor: color.hex });
  }
  NavTitle = val => {
    this.setState({ NavTitle: val });
  }

  CartBGColorCallback = color => {
    this.setState({ CartBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  CellBGColorCallback = color => {
    this.setState({ CellBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ProductTitleCallback = color => {
    this.setState({ ProductTitle: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ProductOptionColorCallback = color => {
    this.setState({ ProductOptionColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  CellPriceColorCallback = color => {
    this.setState({ CellPriceColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  QuantityIconColorCallback = color => {
    this.setState({ QuantityIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  QuantityTextColorCallback = color => {
    this.setState({ QuantityTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ApplyBGColorCallback = color => {
    this.setState({ ApplyBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ApplyIconColorCallback = color => {
    this.setState({ ApplyIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ApplyTextColorCallback = color => {
    this.setState({ ApplyTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  PriceTextColorCallback = color => {
    this.setState({ PriceTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ButtonBGColorCallback = color => {
    this.setState({ ButtonBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  ButtonTextColorCallback = color => {
    this.setState({ ButtonTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  DisplaySaveBtn = () => {
 /*   this.setState({ DropDownGetIconheader: val.DropDownGetIconheader });
    this.setState({ naviconcolor: val.naviconcolor });
    this.setState({ navtitlecolor: val.navtitlecolor });*/

    this.homeTopTabsShowEditAlert.current.showSaveButton();
  }
  navbgcolorVall = color => {
    this.setState({ navbgcolor: color.hex });
  }
  bannerImageUrlCallBack = (val) => {
    this.setState({bannerImageUrl: val});
  }

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
          <div>
            <div className="row TopPosition">
              <div
                className="col-lg-4"
                id="CollectionMainContainer"
                style={{ border: '1px solid #efefef' }}
              >
                <CartLeftSection
                  CartBGColorCallback={this.CartBGColorCallback}
                  CellBGColorCallback={this.CellBGColorCallback}
                  ProductTitleCallback={this.ProductTitleCallback}
                  ProductOptionColorCallback={this.ProductOptionColorCallback}
                  CellPriceColorCallback={this.CellPriceColorCallback}
                  QuantityIconColorCallback={this.QuantityIconColorCallback}
                  QuantityTextColorCallback={this.QuantityTextColorCallback}
                  ApplyBGColorCallback={this.ApplyBGColorCallback}
                  ApplyIconColorCallback={this.ApplyIconColorCallback}
                  ApplyTextColorCallback={this.ApplyTextColorCallback}
                  PriceTextColorCallback={this.PriceTextColorCallback}
                  ButtonBGColorCallback={this.ButtonBGColorCallback}
                  ButtonTextColorCallback={this.ButtonTextColorCallback}
                  CartBGColor={this.state.CartBGColor}
                  CellBGColor={this.state.CellBGColor}
                  ProductTitle={this.state.ProductTitle}
                  ProductOptionColor={this.state.ProductOptionColor}
                  CellPriceColor={this.state.CellPriceColor}
                  QuantityIconColor={this.state.QuantityIconColor}
                  QuantityTextColor={this.state.QuantityTextColor}
                  ApplyBGColor={this.state.ApplyBGColor}
                  ApplyIconColor={this.state.ApplyIconColor}
                  ApplyTextColor={this.state.ApplyTextColor}
                  PriceTextColor={this.state.PriceTextColor}
                  ButtonBGColor={this.state.ButtonBGColor}
                  ButtonTextColor={this.state.ButtonTextColor}
                />
              </div>
              <div className="col-lg-8" id="RightContainerScroll">
                <div id="CollectionMainRightContainer">
                  <CartRightSection
                    DisplaySaveBtn={this.DisplaySaveBtn}
                    CartBGColor={this.state.CartBGColor}
                    CellBGColor={this.state.CellBGColor}
                    ProductTitle={this.state.ProductTitle}
                    ProductOptionColor={this.state.ProductOptionColor}
                    CellPriceColor={this.state.CellPriceColor}
                    QuantityIconColor={this.state.QuantityIconColor}
                    QuantityTextColor={this.state.QuantityTextColor}
                    ApplyBGColor={this.state.ApplyBGColor}
                    ApplyIconColor={this.state.ApplyIconColor}
                    ApplyTextColor={this.state.ApplyTextColor}
                    PriceTextColor={this.state.PriceTextColor}
                    ButtonBGColor={this.state.ButtonBGColor}
                    ButtonTextColor={this.state.ButtonTextColor}
                    DropDownGetIconheader={this.DropDownGetIconheader}
                    naviconcolor={this.naviconcolor}
                    navtitlecolor={this.navtitlecolor}
                    NavTitle={this.NavTitle}
                    NavTitleValue={this.state.NavTitle}
                    navbgcolorVall={this.navbgcolorVall}
                    navbgcolorValue={this.state.navbgcolor}
                    DropDownGetIconheaderValue={this.state.DropDownGetIconheader}
                    naviconcolorValue={this.state.naviconcolor}
                    navtitlecolorValue={this.state.navtitlecolor}
                    bannerImageUrlCallBack={this.bannerImageUrlCallBack}
                    bannerImageUrl={this.state.bannerImageUrl}
                  />
                </div>
              </div>
              <ThemeOptions selectTheme={this.onThemeOptionSelection} />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Cart;
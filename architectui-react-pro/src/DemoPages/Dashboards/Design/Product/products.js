// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from 'react-loaders';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Col, Row } from 'reactstrap';
import { API_ROOT } from '../../../../utilities/api-config';
import '../index.css';
import { themeColorFromName } from '../mobile-theme-utils';
import ThemeOptions from '../theme-options';
import ProductcustomizePage from './product-customize-section';
import ProductSettingsSection from './product-settings-section';

class Products extends React.Component {
  homeTopTabsShowEditAlert = null;

  constructor(props) {
    super(props);
    this.homeTopTabsShowEditAlert = React.createRef();
    this.state = {
      bannerImageUrl: '',
      isLoaded: false
    };
  }

  onSaveEditedItems = e => {
    const ProductSettings = {
      FavButtonPos: this.state.FavButtonPos,
      SilderActiveColor: this.state.SilderActiveColor,
      SilderDotColor: this.state.SilderDotColor,
      SilderBGColor: this.state.SilderBGColor,
      FavBtnColor: this.state.FavBtnColor,
      ProductTitleColor: this.state.ProductTitleColor,
      ProductPriceColor: this.state.ProductPriceColor,
      ProductRatingColor: this.state.ProductRatingColor,
      ProducttitlebarBGColor: this.state.ProducttitlebarBGColor,
      AddLinkSecShow: this.state.AddLinkSecShow,
      ExternalIconColor: this.state.ExternalIconColor,
      ExternalLinkColor: this.state.ExternalLinkColor,
      ExternalBGColor: this.state.ExternalBGColor,
      ProductCellBGColor: this.state.ProductCellBGColor,
      OptionTitleColor: this.state.OptionTitleColor,
      OptionValueColor: this.state.OptionValueColor,
      OptionIconColor: this.state.OptionIconColor,
      DescTitleText: this.state.DescTitleText,
      DescTitleColor: this.state.DescTitleColor,
      DescHeaderBGColor: this.state.DescHeaderBGColor,
      DescBGColor: this.state.DescBGColor,
      DescTextColor: this.state.DescTextColor,
      CartTitleText: this.state.CartTitleText,
      CartTitleColor: this.state.CartTitleColor,
      CartButtonColor: this.state.CartButtonColor,
      CartBGColor: this.state.CartBGColor,
      FavButtonBottom: this.state.FavButtonBottom,
      FavButtonTop: this.state.FavButtonTop,
      FavButtonRight: this.state.FavButtonRight,
      FavButtonLeft: this.state.FavButtonLeft,
      MarginLeftTitleSection: this.state.MarginLeftTitleSection,
      DropDownGetIcon: this.state.DropDownGetIcon,
      DropDownGetExternalIcon: this.state.DropDownGetExternalIcon,
      CartButtonActionValue: this.state.CartButtonActionValue,
      ExternalLinkTitle: this.state.ExternalLinkTitle,
      ExternalLinkUrl: this.state.ExternalLinkUrl,
      navbgcolor: this.state.navbgcolor,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      NavTitle: this.state.NavTitle,
      FavIconValue: this.state.FavIconValue,
      navBarTitle: this.state.navBarTitle,
      productImage: this.state.productImage,
      productName: this.state.productName,
      productRate: this.state.productRate,
      productselectedTitle: this.state.productselectedTitle,
      bannerImageUrl: this.state.bannerImageUrl
    };
    axios
      .post(`${API_ROOT}/api/v2/app-product`, {
        ProductSettings
      })
      .then(res => {
        res.data && this.homeTopTabsShowEditAlert.current.showSavedButton();
      });
  };

  componentDidMount() {
    axios.get(`${API_ROOT}/api/v2/app-product`).then(res => {
      this.setState({ FavButtonPos: res.data.ProductSettings.FavButtonPos });
      this.setState({
        SilderActiveColor: res.data.ProductSettings.SilderActiveColor
      });
      this.setState({
        SilderDotColor: res.data.ProductSettings.SilderDotColor
      });
      this.setState({ SilderBGColor: res.data.ProductSettings.SilderBGColor });
      this.setState({ FavBtnColor: res.data.ProductSettings.FavBtnColor });
      this.setState({
        ProductTitleColor: res.data.ProductSettings.ProductTitleColor
      });
      this.setState({
        ProductPriceColor: res.data.ProductSettings.ProductPriceColor
      });
      this.setState({
        ProductRatingColor: res.data.ProductSettings.ProductRatingColor
      });
      this.setState({
        ProducttitlebarBGColor: res.data.ProductSettings.ProducttitlebarBGColor
      });
      this.setState({
        AddLinkSecShow: res.data.ProductSettings.AddLinkSecShow
      });
      this.setState({
        ExternalIconColor: res.data.ProductSettings.ExternalIconColor
      });
      this.setState({
        ExternalLinkColor: res.data.ProductSettings.ExternalLinkColor
      });
      this.setState({
        ExternalBGColor: res.data.ProductSettings.ExternalBGColor
      });
      this.setState({
        ProductCellBGColor: res.data.ProductSettings.ProductCellBGColor
      });
      this.setState({
        OptionTitleColor: res.data.ProductSettings.OptionTitleColor
      });
      this.setState({
        OptionValueColor: res.data.ProductSettings.OptionValueColor
      });
      this.setState({
        OptionIconColor: res.data.ProductSettings.OptionIconColor
      });
      this.setState({ DescTitleText: res.data.ProductSettings.DescTitleText });
      this.setState({
        DescTitleColor: res.data.ProductSettings.DescTitleColor
      });
      this.setState({
        DescHeaderBGColor: res.data.ProductSettings.DescHeaderBGColor
      });
      this.setState({ DescBGColor: res.data.ProductSettings.DescBGColor });
      this.setState({ DescTextColor: res.data.ProductSettings.DescTextColor });
      this.setState({ CartTitleText: res.data.ProductSettings.CartTitleText });
      this.setState({
        CartTitleColor: res.data.ProductSettings.CartTitleColor
      });
      this.setState({
        CartButtonColor: res.data.ProductSettings.CartButtonColor
      });
      this.setState({ CartBGColor: res.data.ProductSettings.CartBGColor });
      this.setState({
        FavButtonBottom: res.data.ProductSettings.FavButtonBottom
      });
      this.setState({ FavButtonTop: res.data.ProductSettings.FavButtonTop });
      this.setState({
        FavButtonRight: res.data.ProductSettings.FavButtonRight
      });
      this.setState({ FavButtonLeft: res.data.ProductSettings.FavButtonLeft });
      this.setState({
        MarginLeftTitleSection: res.data.ProductSettings.MarginLeftTitleSection
      });
      this.setState({
        DropDownGetIcon: res.data.ProductSettings.DropDownGetIcon
      });
      this.setState({
        DropDownGetExternalIcon:
          res.data.ProductSettings.DropDownGetExternalIcon
      });
      this.setState({
        CartButtonActionValue: res.data.ProductSettings.CartButtonActionValue
      });
      this.setState({
        ExternalLinkTitle: res.data.ProductSettings.ExternalLinkTitle
      });
      this.setState({
        ExternalLinkUrl: res.data.ProductSettings.ExternalLinkUrl
      });
      this.setState({ naviconcolor: res.data.ProductSettings.naviconcolor });
      this.setState({
        OnCollectionEditValue: res.data.ProductSettings.OnCollectionEditValue
      });
      this.setState({
        OnCollectionEditValueText:
          res.data.ProductSettings.OnCollectionEditValueText
      });
      this.setState({
        DropDownGetIconheader: res.data.ProductSettings.DropDownGetIconheader
      });
      this.setState({ NavTitle: res.data.ProductSettings.NavTitle });
      this.setState({ navbgcolor: res.data.ProductSettings.navbgcolor });
      this.setState({ navtitlecolor: res.data.ProductSettings.navtitlecolor });
      this.setState({ FavIconValue: res.data.ProductSettings.FavIconValue });
      this.setState({ navBarTitle: res.data.ProductSettings.navBarTitle });
      this.setState({ productImage: res.data.ProductSettings.productImage });
      this.setState({ productName: res.data.ProductSettings.productName });
      this.setState({ productRate: res.data.ProductSettings.productRate });
      this.setState({
        productselectedTitle: res.data.ProductSettings.productselectedTitle
      });
      this.setState({
        bannerImageUrl: res.data.ProductSettings.bannerImageUrl
      });
      this.setState({ isLoaded: true });
    });
  }

  DropDownGetIconheader = color => {
    this.setState({ DropDownGetIconheader: color });
  };

  naviconcolor = color => {
    this.setState({ naviconcolor: color.hex });
  };

  navtitlecolor = color => {
    this.setState({ navtitlecolor: color.hex });
  };

  NavTitle = color => {
    this.setState({ NavTitle: color });
  };

  CartButtonAction = action => {
    this.setState({ CartButtonActionValue: action });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  AddLinkSecCallback = showvalue => {
    this.setState({ AddLinkSecShow: showvalue });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SilderActiveColorCallback = SilderActiveColor => {
    this.setState({ SilderActiveColor: SilderActiveColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SilderDotColorCallback = SilderDotColor => {
    this.setState({ SilderDotColor: SilderDotColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SilderBGColorCallback = SilderBGColor => {
    this.setState({ SilderBGColor: SilderBGColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavBtnColorCallback = FavBtnColor => {
    this.setState({ FavBtnColor: FavBtnColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductTitleColorCallback = ProductTitleColor => {
    this.setState({ ProductTitleColor: ProductTitleColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductPriceColorCallback = ProductPriceColor => {
    this.setState({ ProductPriceColor: ProductPriceColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavButtonPosCallback = FavButtonPosVal => {
    this.setState({ FavButtonPos: FavButtonPosVal });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductRatingColorCallback = color => {
    this.setState({ ProductRatingColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProducttitlebarBGColorCallback = color => {
    this.setState({ ProducttitlebarBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ExternalIconColorCallback = color => {
    this.setState({ ExternalIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ExternalLinkColorCallback = color => {
    this.setState({ ExternalLinkColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ExternalBGColorCallback = color => {
    this.setState({ ExternalBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ProductCellBGColorCallback = color => {
    this.setState({ ProductCellBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  OptionTitleColorCallback = color => {
    this.setState({ OptionTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  OptionValueColorCallback = color => {
    this.setState({ OptionValueColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  OptionIconColorCallback = color => {
    this.setState({ OptionIconColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DescTitleTextCallback = text => {
    this.setState({ DescTitleText: text.target.value });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DescTitleColorCallback = color => {
    this.setState({ DescTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DescHeaderBGColorCallback = color => {
    this.setState({ DescHeaderBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DescBGColorCallback = color => {
    this.setState({ DescBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DescTextColorCallback = color => {
    this.setState({ DescTextColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CartTitleTextCallback = text => {
    this.setState({ CartTitleText: text.target.value });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CartTitleColorCallback = color => {
    this.setState({ CartTitleColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CartButtonColorCallback = color => {
    this.setState({ CartButtonColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CartBGColorCallback = color => {
    this.setState({ CartBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavButtonBottom = bottom => {
    this.setState({ FavButtonBottom: bottom });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavButtonTop = top => {
    this.setState({ FavButtonTop: top });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavButtonRight = right => {
    this.setState({ FavButtonRight: right });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavButtonLeft = left => {
    this.setState({ FavButtonLeft: left });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  MarginLeftTitleSection = margin => {
    this.setState({ MarginLeftTitleSection: margin });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DropDownGetIconCallback = icon => {
    this.setState({ DropDownGetIcon: icon });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ExternalIcon = icon => {
    this.setState({ DropDownGetExternalIcon: icon });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ExternalLinkTitleCallback = title => {
    this.setState({ ExternalLinkTitle: title });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ExternalLinkUrlCallback = url => {
    this.setState({ ExternalLinkUrl: url });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  DisplaySaveBtn = val => {
    /* this.setState({ navbgcolor: val.navbgcolor });
        this.setState({ DropDownGetIconheader: val.DropDownGetIconheader });
        this.setState({ naviconcolor: val.naviconcolor });
        this.setState({ navtitlecolor: val.navtitlecolor });
        this.setState({ NavTitle: val.NavTitle }); */

    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  FavButtonPos = val => {
    this.setState({ FavButtonPos: val });
  };

  DropDownGetIconFavouriteCallback = icon => {
    this.setState({ FavIconValue: icon });
  };

  cartBtnPhoneValue = val => {
    this.setState({ cartBtnPhoneValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  navBarTitle = val => {
    this.setState({ navBarTitle: val });
  };

  RemoveLinkDetail = () => {
    this.setState({ ExternalLinkTitle: '' });
    this.setState({ ExternalLinkUrl: '' });
  };

  productImage = val => {
    this.setState({ productImage: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  productName = val => {
    this.setState({ productName: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  productRate = val => {
    this.setState({ productRate: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  productselectedTitle = val => {
    this.setState({ productselectedTitle: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  navbgcolorClick = color => {
    this.setState({ navbgcolor: color.hex });
  };

  bannerImageUrlCallBack = val => {
    this.setState({ bannerImageUrl: val });
  };

  onThemeOptionSelection = themName => {
    this.setState({ navbgcolor: themeColorFromName(themName) });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.homeTopTabsShowEditAlert.current.setState({ selectedTheme: themName });
    this.homeTopTabsShowEditAlert.current.setState({ editedTheme: true });
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
              <div id="HomePageContentContainer">
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    id="CollectionMainContainer"
                    style={{ border: '1px solid #efefef' }}
                  >
                    <PerfectScrollbar>
                      <ProductSettingsSection
                        FavButtonPos={this.FavButtonPos}
                        SilderActiveColorCallback={
                          this.SilderActiveColorCallback
                        }
                        SilderDotColorCallback={this.SilderDotColorCallback}
                        SilderBGColorCallback={this.SilderBGColorCallback}
                        FavButtonPosCallback={this.FavButtonPosCallback}
                        FavBtnColorCallback={this.FavBtnColorCallback}
                        ProductTitleColorCallback={
                          this.ProductTitleColorCallback
                        }
                        ProductPriceColorCallback={
                          this.ProductPriceColorCallback
                        }
                        ProductRatingColorCallback={
                          this.ProductRatingColorCallback
                        }
                        ProducttitlebarBGColorCallback={
                          this.ProducttitlebarBGColorCallback
                        }
                        AddLinkSecCallback={this.AddLinkSecCallback}
                        ExternalIconColorCallback={
                          this.ExternalIconColorCallback
                        }
                        ExternalLinkColorCallback={
                          this.ExternalLinkColorCallback
                        }
                        ExternalBGColorCallback={this.ExternalBGColorCallback}
                        ProductCellBGColorCallback={
                          this.ProductCellBGColorCallback
                        }
                        OptionTitleColorCallback={this.OptionTitleColorCallback}
                        OptionValueColorCallback={this.OptionValueColorCallback}
                        OptionIconColorCallback={this.OptionIconColorCallback}
                        DescTitleTextCallback={this.DescTitleTextCallback}
                        DescTitleColorCallback={this.DescTitleColorCallback}
                        DescHeaderBGColorCallback={
                          this.DescHeaderBGColorCallback
                        }
                        DescBGColorCallback={this.DescBGColorCallback}
                        DescTextColorCallback={this.DescTextColorCallback}
                        CartTitleTextCallback={this.CartTitleTextCallback}
                        CartTitleColorCallback={this.CartTitleColorCallback}
                        CartButtonColorCallback={this.CartButtonColorCallback}
                        CartBGColorCallback={this.CartBGColorCallback}
                        FavButtonBottom={this.FavButtonBottom}
                        FavButtonTop={this.FavButtonTop}
                        FavButtonLeft={this.FavButtonLeft}
                        FavButtonRight={this.FavButtonRight}
                        MarginLeftTitleSection={this.MarginLeftTitleSection}
                        DropDownGetIconCallback={this.DropDownGetIconCallback}
                        ExternalIcon={this.ExternalIcon}
                        CartButtonAction={this.CartButtonAction}
                        ExternalLinkTitleCallback={
                          this.ExternalLinkTitleCallback
                        }
                        ExternalLinkUrlCallback={this.ExternalLinkUrlCallback}
                        SilderActiveColorValue={this.state.SilderActiveColor}
                        SilderDotColorValue={this.state.SilderDotColor}
                        SilderBGColorValue={this.state.SilderBGColor}
                        FavButtonPosValue={this.state.FavButtonPos}
                        FavBtnColorValue={this.state.FavBtnColor}
                        ProductTitleColorValue={this.state.ProductTitleColor}
                        ProductPriceColorValue={this.state.ProductPriceColor}
                        ProductRatingColorValue={this.state.ProductRatingColor}
                        ProducttitlebarBGColorValue={
                          this.state.ProducttitlebarBGColor
                        }
                        AddLinkSecShowValue={this.state.AddLinkSecShow}
                        ExternalIconColorValue={this.state.ExternalIconColor}
                        ExternalLinkColorValue={this.state.ExternalLinkColor}
                        ExternalBGColorValue={this.state.ExternalBGColor}
                        ProductCellBGColorValue={this.state.ProductCellBGColor}
                        OptionTitleColorValue={this.state.OptionTitleColor}
                        OptionValueColorValue={this.state.OptionValueColor}
                        OptionIconColorValue={this.state.OptionIconColor}
                        DescTitleTextValue={this.state.DescTitleText}
                        DescTitleColorValue={this.state.DescTitleColor}
                        DescHeaderBGColorValue={this.state.DescHeaderBGColor}
                        DescBGColorValue={this.state.DescBGColor}
                        DescTextColorValue={this.state.DescTextColor}
                        CartTitleTextValue={this.state.CartTitleText}
                        CartTitleColorValue={this.state.CartTitleColor}
                        CartButtonColorValue={this.state.CartButtonColor}
                        CartBGColorValue={this.state.CartBGColor}
                        FavButtonBottomValue={this.state.FavButtonBottom}
                        FavButtonTopValue={this.state.FavButtonTop}
                        FavButtonLeftValue={this.state.FavButtonLeft}
                        FavButtonRightValue={this.state.FavButtonRight}
                        MarginLeftTitleSectionValue={
                          this.state.MarginLeftTitleSection
                        }
                        DropDownGetIconValue={this.state.DropDownGetIcon}
                        ExternalIconValue={this.state.DropDownGetExternalIcon}
                        ExternalLinkTitleValue={this.state.ExternalLinkTitle}
                        DropDownGetIconFavouriteCallback={
                          this.DropDownGetIconFavouriteCallback
                        }
                        FavIconValue={this.state.FavIconValue}
                        DropDownGetIcon={this.state.DropDownGetIcon}
                        CartButtonActionValue={this.state.CartButtonActionValue}
                        cartBtnPhoneValue={this.cartBtnPhoneValue}
                        cartBtnPhoneVal={this.state.cartBtnPhoneValue}
                        ExternalLinkUrlVal={this.state.ExternalLinkUrl}
                        RemoveLinkDetail={this.RemoveLinkDetail}
                      />
                    </PerfectScrollbar>
                  </Col>
                  <Col md={8} sm={6} id="RightContainerScroll">
                    <div id="mbl_bg_rit">
                      <div id="CollectionMainRightContainer">
                        <PerfectScrollbar>
                          <ProductcustomizePage
                            navBarTitle={this.navBarTitle}
                            DisplaySaveBtn={this.DisplaySaveBtn}
                            SilderActiveColor={this.state.SilderActiveColor}
                            SilderDotColor={this.state.SilderDotColor}
                            SilderBGColor={this.state.SilderBGColor}
                            FavButtonPosValue={this.state.FavButtonPos}
                            FavBtnColor={this.state.FavBtnColor}
                            ProductTitleColor={this.state.ProductTitleColor}
                            ProductPriceColor={this.state.ProductPriceColor}
                            ProductRatingColor={this.state.ProductRatingColor}
                            ProducttitlebarBGColor={
                              this.state.ProducttitlebarBGColor
                            }
                            AddLinkSecShow={this.state.AddLinkSecShow}
                            ExternalIconColor={this.state.ExternalIconColor}
                            ExternalLinkColor={this.state.ExternalLinkColor}
                            ExternalBGColor={this.state.ExternalBGColor}
                            ProductCellBGColor={this.state.ProductCellBGColor}
                            OptionTitleColor={this.state.OptionTitleColor}
                            OptionValueColor={this.state.OptionValueColor}
                            OptionIconColor={this.state.OptionIconColor}
                            DescTitleText={this.state.DescTitleText}
                            DescTitleColor={this.state.DescTitleColor}
                            DescHeaderBGColor={this.state.DescHeaderBGColor}
                            DescBGColor={this.state.DescBGColor}
                            DescTextColor={this.state.DescTextColor}
                            CartTitleText={this.state.CartTitleText}
                            CartTitleColor={this.state.CartTitleColor}
                            CartButtonColor={this.state.CartButtonColor}
                            CartBGColor={this.state.CartBGColor}
                            FavButtonBottom={this.state.FavButtonBottom}
                            FavButtonTop={this.state.FavButtonTop}
                            FavButtonLeft={this.state.FavButtonLeft}
                            FavButtonRight={this.state.FavButtonRight}
                            MarginLeftTitleSection={
                              this.state.MarginLeftTitleSection
                            }
                            DropDownGetIcon={this.state.DropDownGetIcon}
                            ExternalIcon={this.state.DropDownGetExternalIcon}
                            ExternalLinkTitle={this.state.ExternalLinkTitle}
                            DropDownGetIconheader={this.DropDownGetIconheader}
                            naviconcolor={this.naviconcolor}
                            navtitlecolor={this.navtitlecolor}
                            NavTitle={this.NavTitle}
                            DropDownGetIconheaderValue={
                              this.state.DropDownGetIconheader
                            }
                            naviconcolorValue={this.state.naviconcolor}
                            navtitlecolorValue={this.state.navtitlecolor}
                            navbgcolorClick={this.navbgcolorClick}
                            navbgcolorValue={this.state.navbgcolor}
                            NavTitleValue={this.state.NavTitle}
                            navBarTitleValue={this.state.navBarTitle}
                            productImage={this.productImage}
                            productName={this.productName}
                            productRate={this.productRate}
                            productselectedTitle={this.productselectedTitle}
                            productImageValue={this.state.productImage}
                            productNameValue={this.state.productName}
                            productRateValue={this.state.productRate}
                            productselectedTitleValue={
                              this.state.productselectedTitle
                            }
                            bannerImageUrlCallBack={this.bannerImageUrlCallBack}
                            bannerImageUrl={this.state.bannerImageUrl}
                          />
                        </PerfectScrollbar>
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

export default Products;

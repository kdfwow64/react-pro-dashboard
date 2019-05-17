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
import CollectioinSettingSection from './collectioin-setting-section';
import CollectioinSettingSectionEffects from './collectioin-setting-section-effects';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.homeTopTabsShowEditAlert = React.createRef();
    this.refCollectioinSettingSectionEffects = React.createRef();

    this.state = {
      saved: false,
      collection: [],
      isLoaded: false,
      collectionHandle: '',
      bannerImageUrl: ''
    };
  }

  async getData() {
    const res = await axios(`${API_ROOT}/api/v2/app-collection`);
    return res.data;
  }

  componentWillMount() {
    this.getData().then(data => {
      this.setState({
        GridViewFieldOption: data.CollectionSettings.GridViewFieldOption
      });
      this.setState({
        gridSelectProductTitleValue:
          data.CollectionSettings.gridSelectProductTitleValue
      });
      this.setState({
        gridSelectProdTitleValue:
          data.CollectionSettings.gridSelectProdTitleValue
      });
      this.setState({
        CollectionGridRowValue: data.CollectionSettings.CollectionGridRowValue
      });
      this.setState({
        gridSelectPriceTitleValue:
          data.CollectionSettings.gridSelectPriceTitleValue
      });
      this.setState({
        gridSelectProdPriceValue:
          data.CollectionSettings.gridSelectProdPriceValue
      });
      this.setState({ gridTitleValue: data.CollectionSettings.gridTitleValue });
      this.setState({
        MainContainerBGColorValue:
          data.CollectionSettings.MainContainerBGColorValue
      });
      this.setState({ CellColorValue: data.CollectionSettings.CellColorValue });
      this.setState({
        CellseparatorColorValue: data.CollectionSettings.CellseparatorColorValue
      });
      this.setState({
        CelliconColorValue: data.CollectionSettings.CelliconColorValue
      });
      this.setState({
        productborderColorValue: data.CollectionSettings.productborderColorValue
      });
      this.setState({
        producttitleColorValue: data.CollectionSettings.producttitleColorValue
      });
      this.setState({
        pricetitleColorValue: data.CollectionSettings.pricetitleColorValue
      });
      this.setState({ IconAction: data.CollectionSettings.IconAction });
      this.setState({ SelectedOption: data.CollectionSettings.SelectedOption });
      this.setState({
        navbarBackgroundColorValue:
          data.CollectionSettings.navbarBackgroundColorValue
      });
      this.setState({ navbgcolor: data.CollectionSettings.navbgcolor });
      this.setState({
        DropDownGetIconheader: data.CollectionSettings.DropDownGetIconheader
      });
      this.setState({ naviconcolor: data.CollectionSettings.naviconcolor });
      this.setState({ navtitlecolor: data.CollectionSettings.navtitlecolor });
      this.setState({ NavTitleValue: data.CollectionSettings.NavTitleValue });
      this.setState({
        gridSelectOptionValue: data.CollectionSettings.gridSelectOptionValue
      });
      this.setState({
        gridSelectProductTitleCallback:
          data.CollectionSettings.gridSelectProductTitleCallback
      });
      this.setState({ CollectionsProductsData: data.CollectionsProductsData });
      this.setState({
        CollectionSelectedTitle: data.CollectionSettings.CollectionSelectedTitle
      });
      this.setState({
        CollectionSelectedId: data.CollectionSettings.CollectionSelectedId
      });
      this.setState({ collectionType: data.CollectionSettings.collectionType });
      this.setState({
        collectionHandle: data.CollectionSettings.collectionHandle
      });
      this.setState({ bannerImageUrl: data.CollectionSettings.bannerImageUrl });
      this.setState({ isLoaded: false });
      const passSetting = {};
      passSetting.CollectionSelectedId =
        data.CollectionSettings.CollectionSelectedId;
      passSetting.collectionType = data.CollectionSettings.collectionType;
      if (
        data.CollectionSettings.CollectionSelectedId &&
        data.CollectionSettings.collectionType
      ) {
        this.setState({ isLoaded: true });
        this.refCollectioinSettingSectionEffects.current.setParentValues(
          passSetting
        );
      }
    });
  }

  onSaveEditedItems = () => {
    const CollectionSettings = {
      gridSelectProductTitleValue: this.state.gridSelectProductTitleValue,
      gridSelectProdTitleValue: this.state.gridSelectProdTitleValue,
      CollectionGridRowValue: this.state.CollectionGridRowValue,
      gridSelectPriceTitleValue: this.state.gridSelectPriceTitleValue,
      gridSelectProdPriceValue: this.state.gridSelectProdPriceValue,
      gridTitleValue: this.state.gridTitleValue,
      MainContainerBGColorValue: this.state.MainContainerBGColorValue,
      CellColorValue: this.state.CellColorValue,
      CellseparatorColorValue: this.state.CellseparatorColorValue,
      CelliconColorValue: this.state.CelliconColorValue,
      productborderColorValue: this.state.productborderColorValue,
      producttitleColorValue: this.state.producttitleColorValue,
      pricetitleColorValue: this.state.pricetitleColorValue,
      IconAction: this.state.IconAction,
      SelectedOption: this.state.SelectedOption,
      navbarBackgroundColorValue: this.state.navbarBackgroundColorValue,
      navbgcolor: this.state.navbgcolor,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      NavTitleValue: this.state.NavTitleValue,
      gridSelectOptionValue: this.state.gridSelectOptionValue,
      GridViewFieldOption: this.state.GridViewFieldOption,
      gridSelectProductTitleCallback: this.state.gridSelectProductTitleCallback,
      CollectionsProductsData: this.state.CollectionsProductsData,
      CollectionSelectedTitle: this.state.CollectionSelectedTitle,
      CollectionSelectedId: this.state.CollectionSelectedId,
      collectionType: this.state.collectionType,
      handle: this.state.collectionHandle,
      bannerImageUrl: this.state.bannerImageUrl
    };
    axios
      .post(`${API_ROOT}/api/v2/app-collection`, {
        CollectionSettings
      })
      .then(res => {
        res.data && this.homeTopTabsShowEditAlert.current.showSavedButton();
      });
  };

  DisplaySaveBtn = CollectionSettings => {
    this.setState({
      DropDownGetIconheader: CollectionSettings.DropDownGetIconheader
    });
    this.setState({ naviconcolor: CollectionSettings.naviconcolor });
    this.setState({ navtitlecolor: CollectionSettings.navtitlecolor });
    this.setState({ navbgcolor: CollectionSettings.navbgcolor });
    this.setState({ NavTitle: CollectionSettings.NavTitle });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
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

  onThemeOptionSelection = themName => {
    this.setState({ navbgcolor: themeColorFromName(themName) });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.homeTopTabsShowEditAlert.current.setState({ selectedTheme: themName });
    this.homeTopTabsShowEditAlert.current.setState({ editedTheme: true });
  };

  MainContainerBGColorCallbck = MainContainerBGColor => {
    this.setState({ MainContainerBGColorValue: MainContainerBGColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CellBGColor = CellBGColor => {
    this.setState({ CellColorValue: CellBGColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  cellseparatorcolor = CellseparatorColor => {
    this.setState({ CellseparatorColorValue: CellseparatorColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  celliconcolor = CelliconColor => {
    this.setState({ CelliconColorValue: CelliconColor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  productbordercolor = productbordercolor => {
    this.setState({ productborderColorValue: productbordercolor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  producttitlecolor = producttitlecolor => {
    this.setState({ producttitleColorValue: producttitlecolor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  pricetitlecolor = pricetitlecolor => {
    this.setState({ pricetitleColorValue: pricetitlecolor.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CollectionGridRowOptionCallback = e => {
    this.setState({ CollectionGridRowValue: e });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  gridSelectProductTitleCall = val => {
    if (val === 'Show') {
      this.setState({ gridSelectProductTitleValue: 'block' });
      this.setState({ gridSelectProdTitleValue: 'Show' });
    } else {
      this.setState({ gridSelectProductTitleValue: 'none' });
      this.setState({ gridSelectProdTitleValue: 'Hide' });
    }
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  gridSelectPriceTitleCallback = val => {
    if (val === 'Show') {
      this.setState({ gridSelectPriceTitleValue: 'block' });
      this.setState({ gridSelectProdPriceValue: 'Show' });
    } else {
      this.setState({ gridSelectPriceTitleValue: 'none' });
      this.setState({ gridSelectProdPriceValue: 'Hide' });
    }
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  gridtitleAlignCallback = val => {
    if (val === 'Center') {
      this.setState({ gridTitleValue: 'Center' });
    }
    if (val === 'Left') {
      this.setState({ gridTitleValue: 'Left' });
    }
    if (val === 'Right') {
      this.setState({ gridTitleValue: 'Right' });
    }
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  IconCollectionAction = icon => {
    this.setState({ IconAction: icon });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SelectedOption = val => {
    this.setState({ SelectedOption: val });
    if (val === 'Grid') {
      this.setState({ gridSelectOptionValue: 'block' });
      this.setState({ GridViewFieldOption: 'none' });
      this.setState({ gridSelectProductTitleCallback: 'block' });
      this.setState({ SelectedOption: 'Grid' });
    }
    if (val === 'List') {
      this.setState({ gridSelectOptionValue: 'none' });
      this.setState({ GridViewFieldOption: 'block' });
      this.setState({ gridSelectProductTitleCallback: 'none' });
      this.setState({ SelectedOption: 'List' });
    }
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CollectionSelectedTitle = val => {
    this.setState({ CollectionSelectedTitle: val });
  };

  CollectionSelectedId = val => {
    this.setState({ CollectionSelectedId: val });
  };

  collectionType = collectionType => {
    this.setState({ collectionType });
  };

  Clickedfilter = () => {
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  collectionHandle = val => {
    this.setState({ collectionHandle: val });
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
              <div id="HomePageContentContainer">
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    id="CollectionMainContainer"
                    style={{ border: '1px solid #efefef' }}
                  >
                    <PerfectScrollbar>
                      <CollectioinSettingSection
                        GridViewFieldOption={this.state.GridViewFieldOption}
                        gridSelectOptionValue={this.state.gridSelectOptionValue}
                        CollectionGridRowOptionCallback={
                          this.CollectionGridRowOptionCallback
                        }
                        gridSelectProductTitleCall={
                          this.gridSelectProductTitleCall
                        }
                        gridSelectPriceTitleCallback={
                          this.gridSelectPriceTitleCallback
                        }
                        gridtitleAlignCallback={this.gridtitleAlignCallback}
                        MainContainerBGColor={this.MainContainerBGColorCallbck}
                        CellBGColor={this.CellBGColor}
                        cellseparatorcolor={this.cellseparatorcolor}
                        celliconcolor={this.celliconcolor}
                        productbordercolor={this.productbordercolor}
                        producttitlecolor={this.producttitlecolor}
                        pricetitlecolor={this.pricetitlecolor}
                        IconCollectionAction={this.IconCollectionAction}
                        SelectedOption={this.SelectedOption}
                        MainContainerBGColorValue={
                          this.state.MainContainerBGColorValue
                        }
                        CellBGColorValue={this.state.CellColorValue}
                        CellseparatorColorValue={
                          this.state.CellseparatorColorValue
                        }
                        CelliconColorValue={this.state.CelliconColorValue}
                        productborderColorValue={
                          this.state.productborderColorValue
                        }
                        producttitleColorValue={
                          this.state.producttitleColorValue
                        }
                        pricetitleColorValue={this.state.pricetitleColorValue}
                        IconAction={this.state.IconAction}
                        SelectedOptionValue={this.state.SelectedOption}
                        CollectionGridRowValue={
                          this.state.CollectionGridRowValue
                        }
                        gridSelectProductTitleValue={
                          this.state.gridSelectProductTitleValue
                        }
                        gridSelectPriceTitleValue={
                          this.state.gridSelectPriceTitleValue
                        }
                        gridSelectProdPriceValue={
                          this.state.gridSelectProdPriceValue
                        }
                        gridTitleValue={this.state.gridTitleValue}
                        gridSelectProdTitleValue={
                          this.state.gridSelectProdTitleValue
                        }
                      />
                    </PerfectScrollbar>
                  </Col>
                  <Col md={8} sm={6} id="RightContainerScroll">
                    <div id="mbl_bg_rit">
                      <div id="CollectionMainRightContainer">
                        <PerfectScrollbar>
                          <CollectioinSettingSectionEffects
                            ref={this.refCollectioinSettingSectionEffects}
                            DisplaySaveBtn={this.DisplaySaveBtn}
                            gridSelectOptionValue={
                              this.state.gridSelectOptionValue
                            }
                            ListSelectOptionValue={
                              this.state.GridViewFieldOption
                            }
                            CollectionGridRowValue={
                              this.state.CollectionGridRowValue
                            }
                            gridSelectProductTitleValue={
                              this.state.gridSelectProductTitleValue
                            }
                            gridSelectPriceTitleValue={
                              this.state.gridSelectPriceTitleValue
                            }
                            gridTitleValue={this.state.gridTitleValue}
                            MainContainerBGColorValue={
                              this.state.MainContainerBGColorValue
                            }
                            CellBGColorValue={this.state.CellColorValue}
                            CellseparatorColorValue={
                              this.state.CellseparatorColorValue
                            }
                            CelliconColorValue={this.state.CelliconColorValue}
                            productborderColorValue={
                              this.state.productborderColorValue
                            }
                            producttitleColorValue={
                              this.state.producttitleColorValue
                            }
                            pricetitleColorValue={
                              this.state.pricetitleColorValue
                            }
                            IconAction={this.state.IconAction}
                            DropDownGetIconheader={this.DropDownGetIconheader}
                            naviconcolor={this.naviconcolor}
                            navtitlecolor={this.navtitlecolor}
                            navbgcolor={this.navbgcolor}
                            NavTitle={this.NavTitle}
                            DropDownGetIconheaderValue={
                              this.state.DropDownGetIconheader
                            }
                            naviconcolorValue={this.state.naviconcolor}
                            navtitlecolorValue={this.state.navtitlecolor}
                            navbgcolorValue={this.state.navbgcolor}
                            NavTitleValue={this.state.NavTitleValue}
                            CollectionSettings={this.CollectionSettings}
                            SelectedOption={this.state.SelectedOption}
                            CollectionSelectedTitle={
                              this.CollectionSelectedTitle
                            }
                            CollectionSelectedTitleValue={
                              this.state.CollectionSelectedTitle
                            }
                            CollectionSelectedId={this.CollectionSelectedId}
                            CollectionSelectedIdValue={
                              this.state.CollectionSelectedId
                            }
                            collectionType={this.collectionType}
                            collectionTypeVal={this.state.collectionType}
                            Clickedfilter={this.Clickedfilter}
                            setLoad={this.setLoad}
                            isLoaded={this.state.isLoaded}
                            collectionHandle={this.collectionHandle}
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

export default Collections;

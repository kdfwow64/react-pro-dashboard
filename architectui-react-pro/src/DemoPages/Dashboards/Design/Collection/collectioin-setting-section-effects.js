// tslint:disable
// @ts-nocheck
import axios from 'axios';
import * as React from 'react';
import { ChromePicker } from 'react-color';
import Loader from 'react-loaders';
import { DropdownList } from 'react-widgets';
import { API_ROOT } from '../../../../utilities/api-config';
import CollectionSettingSingleSection from './collection-setting-grid-single-section';
import CollectioinSettingListSectionEffects from './collection-setting-list-single-section';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

const ProductsCollections = {
  collections: [
    {
      id: '111',
      name: 'Default',
      image:
        'https://cdn.shopify.com/s/files/1/0015/4655/1384/collections/mens-SUNGLASSES-banner-right.jpg',
      products: [
        {
          id: '234',
          name: 'Title 1',
          title: 'Title 2',
          imageUrl: ''
        },

        {
          id: '2343',
          name: 'Title 2',
          title: 'Title 3',
          imageUrl: ''
        },
        {
          id: '2324',
          name: 'Title 3',
          title: 'Title 4',
          imageUrl: ''
        },
        {
          id: '23334',
          name: 'Title 3',
          title: 'Title 5',
          imageUrl: ''
        },
        {
          id: '244434',
          name: 'Title 4',
          title: 'Title 6',
          imageUrl: ''
        },
        {
          id: '23334',
          name: 'Title 5',
          title: 'Title 7',
          imageUrl: ''
        }
      ]
    },
    {
      id: '123',
      name: 'Under $50',
      imageUrl: '',
      products: [
        {
          id: '234',
          name: 'Title 1',
          title: 'Title 2',
          imageUrl: ''
        },

        {
          id: '2343',
          name: 'Title 2',
          title: 'Title 3',
          imageUrl: ''
        },
        {
          id: '2324',
          name: 'Title 3',
          title: 'Title 4',
          imageUrl: ''
        },
        {
          id: '23334',
          name: 'Title 3',
          title: 'Title 5',
          imageUrl: ''
        },
        {
          id: '244434',
          name: 'Title 4',
          title: 'Title 6',
          imageUrl: ''
        },
        {
          id: '23334',
          name: 'Title 5',
          title: 'Title 7',
          imageUrl: ''
        }
      ]
    },
    {
      id: '1233',
      name: 'All',
      imageUrl: '',
      products: [
        {
          id: '2345',
          name: 'Default C2 TItle 1',
          title: 'Title 2',
          imageUrl: ''
        },

        {
          id: '23435',
          name: 'Default c2 TItle 2',
          title: 'Title 3',
          imageUrl: ''
        },
        {
          id: '23245',
          name: 'Default C2 TItle 3',
          title: 'Title 4',
          imageUrl: ''
        },
        {
          id: '233345',
          name: 'Default C2 TItle 3',
          title: 'Title 5',
          imageUrl: ''
        },
        {
          id: '2444345',
          name: 'Default C2 TItle 4',
          title: 'Title 6',
          imageUrl: ''
        },
        {
          id: '233345',
          name: 'Default C2 TItle 5',
          title: 'Title 7',
          imageUrl: ''
        }
      ]
    }
  ],

  SelectedCollectionId: '111'
};

function getSelectedCollectionProducts() {
  let products = {};
  ProductsCollections.collections.map((item, index) => {
    products = item.products;
  });
  return products;
}

class CollectioinSettingSectionEffects extends React.Component {
  constructor(props) {
    super(props);
    this.DisplayCollectionResult = this.DisplayCollectionResult.bind(this);
    this.CollectionMainSectionEditOption = this.CollectionMainSectionEditOption.bind(
      this
    );
    this.CollectionCloseEditSection = this.CollectionCloseEditSection.bind(
      this
    );

    this.navbghandleChange = this.navbghandleChange.bind(this);
    this.navtitlehandleChange = this.navtitlehandleChange.bind(this);
    this.naviconhandleChange = this.naviconhandleChange.bind(this);

    this.navbghandleClose = this.navbghandleClose.bind(this);
    this.navtitlehandleClose = this.navtitlehandleClose.bind(this);
    this.naviconhandleClose = this.naviconhandleClose.bind(this);
    this.collectionClick = this.collectionClick.bind(this);
    this.state = {
      DisplayCollection: 'none',
      CollectionMainSectionEditOptionValue: 'none',
      ShowHideGridListView: 'block',
      navbgdisplayColorPicker: false,
      navtitledisplayColorPicker: false,
      navicondisplayColorPicker: false,
      ProductsCollectionsData: [],
      CollectionsProductsData: [],
      ProductList: [],
      CollectionSelectedTitle: '',
      isLoaded: false,
      CollectionSelectedId: '',
      ProductsCollectionsDataVal: getSelectedCollectionProducts(),
      collectionTypeVal: '',
      CollectionSelectedIdValue: '',
      naviconcolor: this.props.naviconcolorValue,
      navtitlecolor: this.props.navtitlecolorValue,
      navbgcolor: this.props.navbgcolorValue,
      NavTitle: this.props.NavTitleValue
    };
  }

  setParentValues = settings => {
    this.setState({ collectionTypeVal: settings.collectionType });
    this.setState({ CollectionSelectedIdValue: settings.CollectionSelectedId });
    if (settings.collectionType && settings.CollectionSelectedId) {
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${settings.collectionType}/${
            settings.CollectionSelectedId
          }`
        )
        .then(res1 => {
          this.setState({ ProductList: res1.data.productVMList });
          this.setState({ isLoaded: true });
        });
    }
  };

  ApplyNavSettings = () => {
    const CollectionSettings = {
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      navbgcolor: this.state.navbgcolor,
      NavTitle: this.state.NavTitle
    };
    this.props.DisplaySaveBtn(CollectionSettings);
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  };

  DropDownGetIconCellectionNavCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.DropDownGetIconheader(icon);
  };

  navbghandleClose = () => {
    this.setState({ navbgdisplayColorPicker: false });
  };

  navtitlehandleClose = () => {
    this.setState({ navtitledisplayColorPicker: false });
  };

  naviconhandleClose = () => {
    this.setState({ navicondisplayColorPicker: false });
  };

  navbghandleClick = () => {
    this.setState({ navbgdisplayColorPicker: true });
  };

  navtitlehandleClick = () => {
    this.setState({
      navtitledisplayColorPicker: !this.state.navtitledisplayColorPicker
    });
  };

  naviconhandleClick = () => {
    this.setState({
      navicondisplayColorPicker: !this.state.navicondisplayColorPicker
    });
  };

  navbghandleChange(color) {
    this.setState({ navbgcolor: color.hex });
    this.props.navbgcolor(color);
  }

  naviconhandleChange(naviconcolor) {
    this.setState({ naviconcolor: naviconcolor.hex });
    this.props.naviconcolor(naviconcolor);
  }

  navtitlehandleChange(navtitlecolor) {
    this.setState({ navtitlecolor: navtitlecolor.hex });
    this.props.navtitlecolor(navtitlecolor);
  }

  DisplayCollectionResult() {
    if (this.state.DisplayCollection === 'none') {
      this.setState({ DisplayCollection: 'block' });
    } else {
      this.setState({ DisplayCollection: 'none' });
    }
  }

  CollectionMainSectionEditOption() {
    this.setState({ CollectionMainSectionEditOptionValue: 'block' });
    this.setState({ ShowHideGridListView: 'none' });
  }

  CollectionCloseEditSection() {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  }

  OnCollectionEditClick = e => {
    this.props.NavTitle(e);
  };

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '15px',
    top: '4px'
  };

  popover = {
    position: 'absolute',
    zIndex: 2
  };

  cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  collectionClick = item => {
    this.props.Clickedfilter();
    this.setState({ DisplayCollection: 'none' });
    this.setState({ CollectionSelectedTitle: item.title });
    this.props.CollectionSelectedTitle(item.title);
    this.setState({ CollectionSelectedId: item.id });
    this.props.CollectionSelectedId(item.id);
    this.props.collectionType(item.collectionType);
    this.props.collectionHandle(item.handle);
    this.setState({ isLoaded: false });
    axios
      .get(
        `${API_ROOT}/api/v2/collection/products/${item.collectionType}/${
          item.id
        }`
      )
      .then(res1 => {
        this.setState({ ProductList: res1.data.productVMList });
        res1.data && this.setState({ isLoaded: true });
      });
  };

  componentWillMount() {
    axios.get(`${API_ROOT}/api/v2/collection-listings`).then(res => {
      this.setState({ ProductsCollectionsData: res.data });
    });
  }

  bannerImageUrl = value => {
    this.setState({ bannerImageUrl: value });
    console.log('here', value);
    this.props.bannerImageUrlCallBack(value);
  };

  render() {
    return (
      <div
        id="CollectionEffectMainContainer"
        className="CollectionGridListView"
      >
        <div className="CollectionEffectContainer">
          <div className="ProductEffectResultDropDown">
            <input
              type="text"
              value={
                this.props.CollectionSelectedTitleValue ||
                'Preview Your Collection Page -- Select a Collection'
              }
              readOnly
              onClick={this.DisplayCollectionResult.bind(this)}
              className="ProductDropSearchDown"
            />
            <div className="searchProIcon">
              <i className="lnr-chevron-down" />
            </div>
            <div
              className="mainProductListSearch ProductResult"
              style={{ display: this.state.DisplayCollection }}
            >
              {this.state.ProductsCollectionsData.map((item2, index2) => {
                return (
                  <div
                    key={item2.collectionId}
                    className="collectionElementProductShowHide"
                    style={{ height: '50px', width: 'auto', cursor: 'pointer' }}
                    id={
                      this.props.CollectionSelectedIdValue === item2.id
                        ? 'Active'
                        : ''
                    }
                    onClick={() => this.collectionClick(item2)}
                  >
                    {item2.imageUrl && (
                      <img
                        style={{ width: '50px', height: '50px' }}
                        src={item2.imageUrl}
                        alt={item2.title}
                      />
                    )}
                    {!item2.imageUrl && (
                      <span
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: '#b9b9b9de',
                          color: '#fff',
                          fontSize: '10px',
                          paddingLeft: '3px'
                        }}
                      >
                        {' '}
                        No Image{' '}
                      </span>
                    )}
                    {item2.imageUrl === '' && (
                      <i
                        style={{ width: '50px', height: '50px' }}
                        className="pe-7s-photo"
                      />
                    )}

                    <span>{item2.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            id="CollectionEffectNavBarContainer"
            style={{ backgroundColor: this.props.navbgcolorValue || '#0E7C95' }}
          >
            <div
              id="CollectionEffectMyStoreTitle"
              style={{ color: this.props.navtitlecolorValue || '#fff' }}
            >
              {this.props.NavTitleValue === 'Image' && (
                <img
                  src={this.props.bannerImageUrl}
                  style={{ maxHeight: '30px', maxWidth: '90px' }}
                />
              )}
              {this.props.NavTitleValue === 'Text' && 'COLLECTIONS'}
              {!this.props.NavTitleValue && 'COLLECTIONS'}
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
          {this.state.isLoaded && (
            <div id="CollectionEffectBody">
              <div
                className="CollectionMainEditOptionContainer"
                style={{
                  display: this.state.CollectionMainSectionEditOptionValue,
                  height: '55vh'
                }}
              >
                <div className="CollectionEditSettingOptionContainer">
                  <h2>EDIT NAVIGATION BAR</h2>
                  <p>
                    *Note: Editing this navigation bar will override the theme's
                    navigation bar for this page only.
                  </p>

                  <div className="CollectionMainEditTitle">
                    <div className="col-sm-12 CollectionSettingEditTitle">
                      <label> NAVIGATION BAR TITLE (USE) </label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditTitleView">
                      <DropdownList
                        data={['Image', 'Text']}
                        onChange={this.OnCollectionEditClick.bind(this)}
                        value={this.props.NavTitleValue || 'Text'}
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
                        value={this.props.navbgcolorValue || '#0E7C95'}
                        defaultValue={this.props.navbgcolorValue || '#0E7C95'}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.navbghandleClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor:
                              this.props.navbgcolorValue || '#0E7C95'
                          }}
                          onClick={this.navbghandleClick}
                        />
                      </div>
                      {this.state.navbgdisplayColorPicker ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.navbghandleClose}
                          />
                          <ChromePicker
                            color={this.props.navbgcolorValue || '#0E7C95'}
                            onChange={this.navbghandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className="CollectionMainEditIconColor">
                    <div className="col-sm-12 CollectionSettingEditIconColor">
                      <label>NAV BAR ICON COLOR</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconColorView">
                      <input
                        type="text"
                        value={this.props.naviconcolorValue || '#fff'}
                        defaultValue={this.props.naviconcolorValue || '#fff'}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.naviconhandleClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.props.naviconcolorValue || '#fff'
                          }}
                          onClick={this.naviconhandleClick}
                        />
                      </div>
                      {this.state.navicondisplayColorPicker ? (
                        <div style={this.popover}>
                          <div style={ this.cover } onClick={ this.naviconhandleClose }/>
                          <ChromePicker
                            color={this.props.naviconcolorValue || '#fff'}
                            onChange={this.naviconhandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div> */}

                  <div
                    className="CollectionMainEditIconColor"
                    style={{
                      display:
                        this.props.NavTitleValue === 'Image' ? 'none' : 'block'
                    }}
                  >
                    <div className="col-sm-12 CollectionSettingEditIconColor">
                      <label>NAV BAR TITLE COLOR</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconColorView">
                      <input
                        type="text"
                        value={this.props.navtitlecolorValue || '#fff'}
                        defaultValue={this.props.navtitlecolorValue || '#fff'}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.navtitlehandleClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor:
                              this.props.navtitlecolorValue || '#fff'
                          }}
                          onClick={this.navtitlehandleClick}
                        />
                      </div>
                      {this.state.navtitledisplayColorPicker ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.navtitlehandleClose}
                          />
                          <ChromePicker
                            color={this.props.navtitlecolorValue || '#fff'}
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
                        this.props.NavTitleValue === 'Image' ? 'block' : 'none'
                    }}
                  >
                    <div className="col-sm-12 CollectionSettingEditImg">
                      <label>NAV IMAGE</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconImgView">
                      <S3SingleFileUploaderWithPreviewAndFileNameCapability
                        label="Choose file"
                        acceptedFiles={['image/jpeg', 'image/png']}
                        fileName={this.props.bannerImageUrl}
                        previewImageHeight="100px"
                        previewImageWidth="100px"
                        imageFolder="navTitleImage"
                        onChange={value => {
                          console.log(value);
                          this.bannerImageUrl(value);
                        }}
                      />
                      {/* <input type="file" /> */}
                    </div>
                  </div>
                  <div className="CollectionEditCancelButton CollectionEditButton">
                    <span onClick={this.CollectionCloseEditSection}>
                      CANCEL
                    </span>
                  </div>

                  <div className="CollectionEditapplyButton CollectionEditButton">
                    <span onClick={this.ApplyNavSettings}>APPLY</span>
                  </div>
                </div>
              </div>
              <div
                className="CollectionEffectMainContainer"
                style={{
                  backgroundColor: this.props.MainContainerBGColorValue,
                  display: this.state.ShowHideGridListView
                }}
              >
                <div className="CollectionEffectContainer">
                  <ul
                    className="CollectionEffectGridRightContainer"
                    id="CollectionEffectGrid"
                    style={{
                      display:
                        this.props.SelectedOption === 'Grid' ? 'block' : 'none',
                      columns: this.props.CollectionGridRowValue
                    }}
                  >
                    {this.state.ProductList &&
                      this.state.ProductList.length !== 0 &&
                      this.state.isLoaded &&
                      this.state.ProductList.map((item2, index2) => {
                        return (
                          <CollectionSettingSingleSection
                            gridSelectProductTitleValue={
                              this.props.gridSelectProductTitleValue
                            }
                            gridSelectPriceTitleValue={
                              this.props.gridSelectPriceTitleValue
                            }
                            gridTitleValue={this.props.gridTitleValue}
                            productborderColorValue={
                              this.props.productborderColorValue
                            }
                            producttitleColorValue={
                              this.props.producttitleColorValue
                            }
                            pricetitleColorValue={
                              this.props.pricetitleColorValue
                            }
                            ProdTitle={item2.title}
                            ProdImageUrl={item2.imageUrl}
                            ProdPrice={item2.price}
                          />
                        );
                      })}
                    {this.state.ProductList &&
                      this.state.ProductList.length !== 0 &&
                      !this.state.isLoaded && (
                        <div className="">
                          {' '}
                          <Loader
                            color="#0e7c95"
                            type="ball-scale-multiple"
                          />{' '}
                        </div>
                      )}
                    {!this.state.ProductList &&
                      // this.state.ProductList.length === 0 &&
                      this.state.ProductsCollectionsDataVal.map(
                        (item2, index2) => {
                          return (
                            <CollectionSettingSingleSection
                              gridSelectProductTitleValue={
                                this.props.gridSelectProductTitleValue
                              }
                              gridSelectPriceTitleValue={
                                this.props.gridSelectPriceTitleValue
                              }
                              gridTitleValue={this.props.gridTitleValue}
                              productborderColorValue={
                                this.props.productborderColorValue
                              }
                              producttitleColorValue={
                                this.props.producttitleColorValue
                              }
                              pricetitleColorValue={
                                this.props.pricetitleColorValue
                              }
                              ProdTitle={item2.title}
                              ProdImageUrl={item2.imageUrl}
                              ProdPrice={item2.price}
                            />
                          );
                        }
                      )}
                    {this.state.ProductList &&
                      this.state.ProductList.length === 0 &&
                      this.state.ProductsCollectionsDataVal.map(
                        (item2, index2) => {
                          return (
                            <CollectionSettingSingleSection
                              gridSelectProductTitleValue={
                                this.props.gridSelectProductTitleValue
                              }
                              gridSelectPriceTitleValue={
                                this.props.gridSelectPriceTitleValue
                              }
                              gridTitleValue={this.props.gridTitleValue}
                              productborderColorValue={
                                this.props.productborderColorValue
                              }
                              producttitleColorValue={
                                this.props.producttitleColorValue
                              }
                              pricetitleColorValue={
                                this.props.pricetitleColorValue
                              }
                              ProdTitle={item2.title}
                              ProdImageUrl={item2.imageUrl}
                              ProdPrice={item2.price}
                            />
                          );
                        }
                      )}
                  </ul>

                  <div
                    className="CollectionEffectGridRightContainer"
                    id="CollectionEffectList"
                    style={{
                      display:
                        this.props.SelectedOption === 'Grid' ? 'none' : 'block'
                    }}
                  >
                    {this.state.ProductList &&
                      this.state.ProductList.length !== 0 &&
                      // this.state.isLoaded &&
                      this.state.ProductList.map((item2, index2) => {
                        return (
                          <CollectioinSettingListSectionEffects
                            CellBGColorValue={this.props.CellBGColorValue}
                            CellseparatorColorValue={
                              this.props.CellseparatorColorValue
                            }
                            CelliconColorValue={this.props.CelliconColorValue}
                            productborderColorValue={
                              this.props.productborderColorValue
                            }
                            producttitleColorValue={
                              this.props.producttitleColorValue
                            }
                            pricetitleColorValue={
                              this.props.pricetitleColorValue
                            }
                            IconAction={this.props.IconAction}
                            ProdTitle={item2.title}
                            ProdImageUrl={item2.imageUrl}
                            ProdPrice={item2.price}
                          />
                        );
                      })}
                    {this.state.ProductList &&
                      this.state.ProductList.length !== 0 &&
                      !this.state.isLoaded && (
                        <div className="">
                          {' '}
                          <Loader
                            color="#0e7c95"
                            type="ball-scale-multiple"
                          />{' '}
                        </div>
                      )}
                    {!this.state.ProductList &&
                      // this.state.ProductList.length === 0 &&
                      this.state.ProductsCollectionsDataVal.map(
                        (item2, index2) => {
                          return (
                            <CollectioinSettingListSectionEffects
                              CellBGColorValue={this.props.CellBGColorValue}
                              CellseparatorColorValue={
                                this.props.CellseparatorColorValue
                              }
                              CelliconColorValue={this.props.CelliconColorValue}
                              productborderColorValue={
                                this.props.productborderColorValue
                              }
                              producttitleColorValue={
                                this.props.producttitleColorValue
                              }
                              pricetitleColorValue={
                                this.props.pricetitleColorValue
                              }
                              IconAction={this.props.IconAction}
                            />
                          );
                        }
                      )}

                    {this.state.ProductList &&
                      this.state.ProductList.length === 0 &&
                      this.state.ProductsCollectionsDataVal.map(
                        (item2, index2) => {
                          return (
                            <CollectioinSettingListSectionEffects
                              CellBGColorValue={this.props.CellBGColorValue}
                              CellseparatorColorValue={
                                this.props.CellseparatorColorValue
                              }
                              CelliconColorValue={this.props.CelliconColorValue}
                              productborderColorValue={
                                this.props.productborderColorValue
                              }
                              producttitleColorValue={
                                this.props.producttitleColorValue
                              }
                              pricetitleColorValue={
                                this.props.pricetitleColorValue
                              }
                              IconAction={this.props.IconAction}
                            />
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {!this.state.isLoaded && (
            <div id="CollectionEffectBody">
              <Loader
                color="#0e7c95"
                type="ball-scale-multiple"
                style={{
                  margin: '0 auto',
                  textAlign: 'center',
                  marginTop: '10em',
                  marginLeft: '8em'
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CollectioinSettingSectionEffects;

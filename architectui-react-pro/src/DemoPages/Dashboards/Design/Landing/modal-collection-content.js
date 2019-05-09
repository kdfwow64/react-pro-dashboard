// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React, { Fragment } from 'react';
import { ChromePicker } from 'react-color';
import IconList from '../icon-list';
var API_ROOT = 'https://thesearchit.com';

const ProductsCollections = {
  collections: [
    {
      products: [
        {
          id: '234',
          imageUrl: '',
          title: 'Title',
          collectionType: ''
        },

        {
          id: '2343',
          imageUrl: '',
          title: 'Title',
          collectionType: ''
        },
        {
          id: '2324',
          imageUrl: '',
          title: 'Title',
          collectionType: ''
        },
        {
          id: '23334',
          imageUrl: '',
          title: 'Title',
          collectionType: ''
        },
        {
          id: '23334',
          imageUrl: '',
          title: 'Title',
          collectionType: ''
        },
        {
          id: '23334',
          imageUrl: '',
          title: 'Title',
          collectionType: ''
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

class ModalSearchContent extends React.Component  {
   constructor(props) {
    super(props);
    this.onIconColorClick = this.onIconColorClick.bind(this);
    this.onIconColorClose = this.onIconColorClose.bind(this);
    this.onIconColorClickComplete = this.onIconColorClickComplete.bind(this);
    this.onHeaderTextClick = this.onHeaderTextClick.bind(this);
    this.onHeaderTitleClick = this.onHeaderTitleClick.bind(this);
    this.onHeaderTitleClose = this.onHeaderTitleClose.bind(this);
    this.onHeaderTitleClickComplete = this.onHeaderTitleClickComplete.bind(
      this
    );
    this.onHeaderBGColorClick = this.onHeaderBGColorClick.bind(this);
    this.onHeaderBGColorClose = this.onHeaderBGColorClose.bind(this);
    this.onHeaderBGColorClickComplete = this.onHeaderBGColorClickComplete.bind(
      this
    );
    this.onProductBorderolorClick = this.onProductBorderolorClick.bind(this);
    this.onProductBorderolorClose = this.onProductBorderolorClose.bind(this);
    this.onProductBorderolorClickComplete = this.onProductBorderolorClickComplete.bind(
      this
    );
    this.onActionColorClick = this.onActionColorClick.bind(this);
    this.onActionColorClose = this.onActionColorClose.bind(this);
    this.onActionColorClickComplete = this.onActionColorClickComplete.bind(
      this
    );
    this.onActionTextClick = this.onActionTextClick.bind(this);
    this.onActionTitleColorClick = this.onActionTitleColorClick.bind(this);
    this.onActionTitleColorClose = this.onActionTitleColorClose.bind(this);
    this.onActionTitleColorClickComplete = this.onActionTitleColorClickComplete.bind(
      this
    );
    this.onCollectionCellBGClick = this.onCollectionCellBGClick.bind(this);
    this.onCollectionCellBGClose = this.onCollectionCellBGClose.bind(this);
    this.onCollectionCellBGClickComplete = this.onCollectionCellBGClickComplete.bind(
      this
    );
    this.onCollectionProductTitleClick = this.onCollectionProductTitleClick.bind(
      this
    );
    this.onCollectionProductTitleClose = this.onCollectionProductTitleClose.bind(
      this
    );
    this.onCollectionProductTitleClickComplete = this.onCollectionProductTitleClickComplete.bind(
      this
    );

    this.state = {
      IconColor: this.props.defaultSettings.IconColor,
      displayIconColor: false,
      HeaderText: this.props.defaultSettings.HeaderText,
      HeaderTitle: this.props.defaultSettings.HeaderTitle,
      displayHeaderTitle: false,
      HeaderBGColor: this.props.defaultSettings.HeaderBGColor,
      displayHeaderBGColor: false,
      productBorderColor: this.props.defaultSettings.productBorderColor,
      displayProductBorderolor: false,
      ActionColor: this.props.defaultSettings.ActionColor,
      displayActionColor: false,
      ActionText: this.props.defaultSettings.ActionText,
      ActionTitleColor: this.props.defaultSettings.ActionTitleColor,
      displayActionTitleColor: false,
      CollectionCellBG: this.props.defaultSettings.CollectionCellBG,
      displayCollectionCellBG: false,
      CollectionProductTitle: this.props.defaultSettings.CollectionProductTitle,
      displayCollectionProductTitle: false,
      value: this.props.defaultSettings.value,
      DropDownGetIconheader: this.props.defaultSettings.DropDownGetIconheader,
      DropDownGetIconaction: this.props.defaultSettings.DropDownGetIconaction,
      DisplayCollectionValue: 'none',
      itemId: this.props.itemId,
      selectedProductId: this.props.defaultSettings.selectedProductId,
      prodCollectionname: this.props.defaultSettings.prodCollectionname,
      ProductsCollectionsData: [],
      SelectedCollectionId: this.props.defaultSettings.SelectedCollectionId,
      CollectionsProductsData: [],
      CollectionsProductsDataDefault: getSelectedCollectionProducts(),
      collectionType: this.props.defaultSettings.collectionType,
      handle: this.props.defaultSettings.handle
    };
  }

  onApplySetting = (e ) => {
    e.preventDefault();
    const allDraggedElementsValues = {
      IconColor: this.state.IconColor,
      HeaderText: this.state.HeaderText,
      HeaderTitle: this.state.HeaderTitle,
      HeaderBGColor: this.state.HeaderBGColor,
      productBorderColor: this.state.productBorderColor,
      ActionColor: this.state.ActionColor,
      ActionText: this.state.ActionText,
      ActionTitleColor: this.state.ActionTitleColor,
      CollectionCellBG: this.state.CollectionCellBG,
      CollectionProductTitle: this.state.CollectionProductTitle,
      value: this.state.value,
      itemId: this.props.itemId,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      DropDownGetIconaction: this.state.DropDownGetIconaction,
      ProductsCollections: this.state.ProductsCollections,
      SelectedCollectionId: this.state.SelectedCollectionId,
      selectedCollectionProducts: this.state.selectedCollectionProducts,
      selectedProductId: this.state.selectedProductId,
      prodCollectionname: this.state.prodCollectionname,
      collectionType: this.state.collectionType,
      handle: this.state.handle
    };
    this.props.onApply(allDraggedElementsValues);
    this.props.onCloseModal(this.props.modalId);
  }

  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  }

  applyAppliedSetting = (defaultSettings ) => {};
  onIconColorClick = () => {
    this.setState({ displayIconColor: true });
  }
  onIconColorClose = () => {
    this.setState({ displayIconColor: false });
  }
  onIconColorClickComplete = (color ) => {
    this.setState({ IconColor: color.hex });
  }
  onHeaderTextClick = (e ) => {
    this.setState({ HeaderText: e.target.value });
  }
  onHeaderTitleClick = () => {
    this.setState({ displayHeaderTitle: true });
  }
  onHeaderTitleClose = () => {
    this.setState({ displayHeaderTitle: false });
  }
  onHeaderTitleClickComplete = (color ) => {
    this.setState({ HeaderTitle: color.hex });
  }

  onHeaderBGColorClick = () => {
    this.setState({ displayHeaderBGColor: true });
  }
  onHeaderBGColorClose = () => {
    this.setState({ displayHeaderBGColor: false });
  }
  onHeaderBGColorClickComplete = (color ) => {
    this.setState({ HeaderBGColor: color.hex });
  }

  onProductBorderolorClick = () => {
    this.setState({ displayProductBorderolor: true });
  }
  onProductBorderolorClose = () => {
    this.setState({ displayProductBorderolor: false });
  }
  onProductBorderolorClickComplete = (color ) => {
    this.setState({ productBorderColor: color.hex });
  }

  onActionColorClick = () => {
    this.setState({ displayActionColor: true });
  }
  onActionColorClose = () => {
    this.setState({ displayActionColor: false });
  }
  onActionColorClickComplete = (color ) => {
    this.setState({ ActionColor: color.hex });
  }

  onActionTextClick = (e ) => {
    this.setState({ ActionText: e.target.value });
  }

  onActionTitleColorClick = () => {
    this.setState({ displayActionTitleColor: true });
  }
  onActionTitleColorClose = () => {
    this.setState({ displayActionTitleColor: false });
  }
  onActionTitleColorClickComplete = (color ) => {
    this.setState({ ActionTitleColor: color.hex });
  }

  onCollectionCellBGClick = () => {
    this.setState({ displayCollectionCellBG: true });
  }
  onCollectionCellBGClose = () => {
    this.setState({ displayCollectionCellBG: false });
  }
  onCollectionCellBGClickComplete = (color ) => {
    this.setState({ CollectionCellBG: color.hex });
  }

  onCollectionProductTitleClick = () => {
    this.setState({ displayCollectionProductTitle: true });
  }
  onCollectionProductTitleClose = () => {
    this.setState({ displayCollectionProductTitle: false });
  }
  onCollectionProductTitleClickComplete = (color ) => {
    this.setState({ CollectionProductTitle: color.hex });
  }

  handleChangeStart = () => {};

  handleChange = value => {
    this.setState({
      value
    });
  }

  handleChangeComplete = () => {};

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '2px',
    top: '2px'
  };
  popover = {
    position: 'absolute',
    zIndex: 10000
  };
  DropDownGetIconCellectionHederCallback = (icon ) => {
    this.setState({ DropDownGetIconheader: icon });
  }
  DropDownGetCollectionActionCallback = (icon ) => {
    this.setState({ DropDownGetIconaction: icon });
  }
  setProductsForCollection = (collectionDetails ) => {
    this.setState({ DisplayCollectionValue: 'none' });
    this.setState({ selectedProductId: collectionDetails.id });
    this.setState({ prodCollectionname: collectionDetails.title });
    this.setState({ collectionType: collectionDetails.collectionType });
    this.setState({ handle: collectionDetails.handle });
    const collectionType = collectionDetails.collectionType;
    const selectedProductId = collectionDetails.id;
    axios
      .get(
        `${API_ROOT}/api/v2/collection/products/` +
          collectionType +
          `/` +
          selectedProductId
      )
      .then(res1 => {
        this.setState({ CollectionsProductsData: res1.data.productVMList });
        res1.data && this.setState({ isLoaded: true });
      });
  }

  DisplayCollection = () => {
    if (this.state.DisplayCollectionValue === 'none') {
      this.setState({ DisplayCollectionValue: 'block' });
    } else {
      this.setState({ DisplayCollectionValue: 'none' });
    }
  }

  componentWillMount() {
    axios
      .get(`${API_ROOT}/api/v2/collection-listings`)
      .then(res => {
        this.setState({ ProductsCollectionsData: res.data });
      });
    const collectionType = this.state.collectionType;
    const selectedProductId = this.state.selectedProductId;
    if (collectionType && selectedProductId) {
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/` +
            collectionType +
            `/` +
            selectedProductId
        )
        .then(res1 => {
          this.setState({ CollectionsProductsData: res1.data.productVMList });
          res1.data && this.setState({ isLoaded: true });
        });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 Search-form-defaultSettings">
          <div
            className="col-lg-4 col-sm-4 setting_left_col setting_comman_col"
            style={{ position: 'absolute', left: '0' }}
          >
            <div className="setting_fields">
              <div
                id="FirstDropContainer"
                className="HoverEffectDragDrop"
                style={{
                  background: this.state.CollectionCellBG,
                  height: this.state.CollectionsProductsData
                    ? this.state.CollectionsProductsData.length !== 0
                      ? 'auto'
                      : '130px'
                    : '130px',
                  width: '355px',
                  overflow: this.state.CollectionsProductsData
                    ? this.state.CollectionsProductsData.length !== 0
                      ? 'auto'
                      : 'hidden'
                    : ''
                }}
              >
                <div
                  id="FirstDropTopSection"
                  style={{
                    background: this.state.HeaderBGColor,
                    position: 'absolute',
                    width: '355px',
                    height: '35px'
                  }}
                >
                  <div
                    id="FirstDropLeftIcon"
                    style={{ color: this.state.IconColor }}
                  >
                  <i className={this.state.DropDownGetIconheader} />
                  </div>
                  <div
                    id="FirstDropTopSecTitle"
                    style={{ color: this.state.HeaderTitle }}
                  >
                    {this.state.HeaderText}
                  </div>
                  <div id="FirstDropShopNowContainer">
                    <div
                      id="FirstDropShopNowTitle"
                      style={{ color: this.state.ActionTitleColor }}
                    >
                      {this.state.ActionText}
                    </div>
                    <div
                      id="FirstDropShopNowIcon"
                      style={{ color: this.state.ActionColor }}
                    >
                      <i className={this.state.DropDownGetIconaction} />
                    </div>
                  </div>
                </div>

                {this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length === 0 && (
                    <div
                      id="FirstDropProductContent"
                      style={{
                        width: '100%',
                        height: '120px',
                        paddingTop: '35px',
                        display: this.state.CollectionsProductsData
                          ? this.state.CollectionsProductsData.length === 0
                            ? 'block'
                            : 'none'
                          : ''
                      }}
                    >
                      {this.state.CollectionsProductsDataDefault.map(
                        (item , index ) => {
                          return (
                            <div className="FirstDropProductContainer">
                              <div
                                className="FirstDropProduct"
                                style={{
                                  border:
                                    '1px solid' + this.state.productBorderColor
                                }}
                              >
                            {item.imageUrl &&
                              <img style={{ 'objectFit': 'cover' }} src={item.imageUrl} alt={item.title} />
                            }
                            {!item.imageUrl &&
                              <i className="pe-7s-photo"></i>
                            }
                              </div>
                              <div
                                className="FirstDropProductTitle"
                                style={{
                                  color: this.state.CollectionProductTitle
                                }}
                              >
                                {item.title}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}

                {!this.state.CollectionsProductsData && (
                  <div
                    id="FirstDropProductContent"
                    style={{
                      width: '100%',
                      height: '120px',
                      paddingTop: '35px',
                      display: this.state.CollectionsProductsData
                        ? this.state.CollectionsProductsData.length === 0
                          ? 'block'
                          : 'none'
                        : ''
                    }}
                  >
                    {this.state.CollectionsProductsDataDefault.map(
                      (item , index ) => {
                        return (
                          <div className="FirstDropProductContainer">
                            <div
                              className="FirstDropProduct"
                              style={{
                                border:
                                  '1px solid' + this.state.productBorderColor
                              }}
                            >
                              <img style={{ 'objectFit': 'cover' }} src={item.imageUrl} />
                            </div>
                            <div
                              className="FirstDropProductTitle"
                              style={{
                                color: this.state.CollectionProductTitle
                              }}
                            >
                              {item.title}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}

                {this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length !== 0 &&
                  this.state.isLoaded && (
                    <div
                      id="FirstDropProductContent"
                      style={{
                        width: this.state.CollectionsProductsData
                          ? this.state.CollectionsProductsData.length * 70 +
                            'px'
                          : '100%',
                        height: '120px',
                        paddingTop: '35px',
                        display: this.state.CollectionsProductsData
                          ? this.state.CollectionsProductsData.length === 0
                            ? 'none'
                            : 'block'
                          : 'block'
                      }}
                    >
                      {this.state.CollectionsProductsData.map((item , index ) => {
                        return (
                          <div className="FirstDropProductContainer">
                            <div
                              className="FirstDropProduct"
                              style={{
                                border:
                                  '1px solid' + this.state.productBorderColor
                              }}
                            >
                              <img style={{ 'objectFit': 'cover' }} src={item.imageUrl} />
                            </div>

                            <div
                              className="FirstDropProductTitle"
                              style={{
                                color: this.state.CollectionProductTitle
                              }}
                            >
                              {item.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-sm-8 setting_right_col setting_comman_col"
            style={{ float: 'right' }}
          >
            <div className="setting_right_main">
              <div className="setting_title">
                HORIZONTAL PRODUCT CELL <br />
                <span style={{ fontSize: '13px' }}>
                  DISPLAYS PRODUCTS WITHIN A COLLECTION (UP TO 25)
                </span>
              </div>
              <div
                className="collection_setting_right fixSettingScrollSection"
                style={{ padding: '20px' }}
              >
                <div className="row">
                  <div className="CollectionFullRowContainer">
                    <div className="CollectionSettingIcon">
                      <label>ASSIGN COLLECTION</label>
                    </div>
                    <div className="CollectionSettingOption">
                      <div className="collectionDropdownContainer">
                        <div className="CollectionEffectResultDropDown SingleModalProduct">
                          <input
                            type="text"
                            value={
                              this.state.prodCollectionname ||
                              'SELECT COLLECTION'
                            }
                            onClick={this.DisplayCollection.bind(this)}
                          />
                          <i className="lnr-chevron-down" />
                          <div
                            className="CollectionResult"
                            style={{
                              display: this.state.DisplayCollectionValue,
                              width: '95%'
                            }}
                          >
                            {this.state.ProductsCollectionsData.map(
                              (item , index ) => {
                                return (
                                  <div
                                    key={item.id}
                                    className="collectionElementProductShowHide"
                                    id={
                                      this.state.selectedProductId === item.id
                                        ? 'Active'
                                        : ''
                                    }
                                    style={{
                                      height: '50px',
                                      width: 'auto',
                                      cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                      this.setProductsForCollection(item);
                                    }}
                                  >
                                    {item.imageUrl && (
                                      <img
                                        style={{
                                          width: '50px',
                                          height: '50px'
                                        }}
                                        src={item.imageUrl}
                                        alt={item.title}
                                      />
                                    )}
                                    {!item.imageUrl && (
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
                                    <span>{item.title}</span>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>HEADER ICON </label>
                        </div>
                        <div
                          className="ProductSilderActiveColor"
                          style={{ position: 'relative', marginLeft: '0px' }}
                        >
                          <IconList
                            DropDownGetIconCellectionHederCallback={
                              this.DropDownGetIconCellectionHederCallback
                            }
                            IconClassName={this.state.DropDownGetIconheader}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>HEADER ICON COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.IconColor}
                            defaultValue={this.state.IconColor}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onIconColorClick}
                            onBlur={this.onIconColorClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.IconColor
                              }}
                              onClick={this.onIconColorClick}
                            />
                          </div>
                          {this.state.displayIconColor ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.IconColor}
                                onChange={this.onIconColorClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>HEADER TITLE</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            defaultValue={this.state.HeaderText}
                            id="CollectionDropDown"
                            style={{ color: '#000', fontWeight: 600 }}
                            onChange={this.onHeaderTextClick}
                            value={this.state.HeaderText}
                          />
                        </div>
                      </div>

                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>HEADER TITLE COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.HeaderTitle}
                            defaultValue={this.state.HeaderTitle}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onHeaderTitleClick}
                            onBlur={this.onHeaderTitleClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.HeaderTitle
                              }}
                              onClick={this.onHeaderTitleClick}
                            />
                          </div>
                          {this.state.displayHeaderTitle ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.HeaderTitle}
                                onChange={this.onHeaderTitleClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>HEADER BACKGROUND COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.HeaderBGColor}
                            defaultValue={this.state.HeaderBGColor}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onHeaderBGColorClick}
                            onBlur={this.onHeaderBGColorClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.HeaderBGColor
                              }}
                              onClick={this.onHeaderBGColorClick}
                            />
                          </div>
                          {this.state.displayHeaderBGColor ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.HeaderBGColor}
                                onChange={this.onHeaderBGColorClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>PRODUCT BORDER COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.productBorderColor}
                            defaultValue={this.state.productBorderColor}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onProductBorderolorClick}
                            onBlur={this.onProductBorderolorClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.productBorderColor
                              }}
                              onClick={this.onProductBorderolorClick}
                            />
                          </div>
                          {this.state.displayProductBorderolor ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.productBorderColor}
                                onChange={this.onProductBorderolorClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>ACTION ICON </label>
                        </div>
                        <div
                          className="ProductSilderActiveColor"
                          style={{ position: 'relative', marginLeft: '0px' }}
                        >
                          <IconList
                            DropDownGetCollectionActionCallback={
                              this.DropDownGetCollectionActionCallback
                            }
                            IconClassName={this.state.DropDownGetIconaction}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>ACTION ICON COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.ActionColor}
                            defaultValue={this.state.ActionColor}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onActionColorClick}
                            onBlur={this.onActionColorClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.ActionColor
                              }}
                              onClick={this.onActionColorClick}
                            />
                          </div>
                          {this.state.displayActionColor ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.ActionColor}
                                onChange={this.onActionColorClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>ACTION TITLE</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            defaultValue={this.state.ActionText}
                            id="CollectionDropDown"
                            style={{ color: '#000', fontWeight: 600 }}
                            onChange={this.onActionTextClick}
                            value={this.state.ActionText}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>ACTION TITLE COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.ActionTitleColor}
                            defaultValue={this.state.ActionTitleColor}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onActionTitleColorClick}
                            onBlur={this.onActionTitleColorClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.ActionTitleColor
                              }}
                              onClick={this.onActionTitleColorClick}
                            />
                          </div>
                          {this.state.displayActionTitleColor ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.ActionTitleColor}
                                onChange={this.onActionTitleColorClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>CELL BACKGROUND COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.CollectionCellBG}
                            defaultValue={this.state.CollectionCellBG}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onCollectionCellBGClick}
                            onBlur={this.onCollectionCellBGClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state.CollectionCellBG
                              }}
                              onClick={this.onCollectionCellBGClick}
                            />
                          </div>
                          {this.state.displayCollectionCellBG ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.CollectionCellBG}
                                onChange={this.onCollectionCellBGClickComplete}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="CollectionMainEditIcon">
                        <div className="CollectionSettingIcon">
                          <label>PRODUCT TITLE COLOR</label>
                        </div>
                        <div className="CollectionMainEditBGIconView">
                          <input
                            type="text"
                            value={this.state.CollectionProductTitle}
                            defaultValue={this.state.CollectionProductTitle}
                            id="CollectionDropDown"
                            className="textColorCode"
                            onClick={this.onCollectionProductTitleClick}
                            onBlur={this.onCollectionProductTitleClose}
                          />
                          <div style={this.swatch}>
                            <div
                              className="colorPickerBorder"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: this.state
                                  .CollectionProductTitle
                              }}
                              onClick={this.onCollectionProductTitleClick}
                            />
                          </div>
                          {this.state.displayCollectionProductTitle ? (
                            <div style={this.popover}>
                              <ChromePicker
                                color={this.state.CollectionProductTitle}
                                onChange={
                                  this.onCollectionProductTitleClickComplete
                                }
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setting_bottom">
                <div className="CollectionEditCancelButton CollectionEditButton">
                  <a href="javascript:void(0);" onClick={this.onCloseModal}>
                    <span>CANCEL</span>
                  </a>
                </div>
                <div className="CollectionEditapplyButton CollectionEditButton">
                  <a href="javascript:void(0);" onClick={this.onApplySetting}>
                    <span>APPLY</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalSearchContent;
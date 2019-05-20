// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React from 'react';
import { ChromePicker } from 'react-color';
import { Row, Col, Button, CardFooter } from 'reactstrap';
import { API_ROOT } from '../../../../utilities/api-config';
import IconList from '../icon-list';

const Placeholder = './Placeholder.png';

const ProductsCollections = {
  collections: [
    {
      products: [
        {
          id: '234',
          imageUrl: '',
          title: 'Title'
        },

        {
          id: '2343',
          imageUrl: '',
          title: 'Title'
        },
        {
          id: '2324',
          imageUrl: '',
          title: 'Title'
        },
        {
          id: '23334',
          imageUrl: '',
          title: 'Title'
        },
        {
          id: '23334',
          imageUrl: '',
          title: 'Title'
        },
        {
          id: '23334',
          imageUrl: '',
          title: 'Title'
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

class ModalSearchContentSec extends React.Component {
  constructor(props) {
    super(props);

    this.onIconColorsecClick = this.onIconColorsecClick.bind(this);
    this.onIconColorsecClose = this.onIconColorsecClose.bind(this);
    this.onIconColorsecClickComplete = this.onIconColorsecClickComplete.bind(
      this
    );

    this.onHeaderTextsecClick = this.onHeaderTextsecClick.bind(this);

    this.onHeaderTitlesecClick = this.onHeaderTitlesecClick.bind(this);
    this.onHeaderTitlesecClose = this.onHeaderTitlesecClose.bind(this);
    this.onHeaderTitlesecClickComplete = this.onHeaderTitlesecClickComplete.bind(
      this
    );

    this.onHeaderBGsecColorClick = this.onHeaderBGsecColorClick.bind(this);
    this.onHeaderBGsecColorClose = this.onHeaderBGsecColorClose.bind(this);
    this.onHeaderBGsecColorClickComplete = this.onHeaderBGsecColorClickComplete.bind(
      this
    );

    this.onProductBorderolorsecClick = this.onProductBorderolorsecClick.bind(
      this
    );
    this.onProductBorderolorsecClose = this.onProductBorderolorsecClose.bind(
      this
    );
    this.onProductBorderolorsecClickComplete = this.onProductBorderolorsecClickComplete.bind(
      this
    );

    this.onActionColorsecClick = this.onActionColorsecClick.bind(this);
    this.onActionColorsecClose = this.onActionColorsecClose.bind(this);
    this.onActionColorsecClickComplete = this.onActionColorsecClickComplete.bind(
      this
    );

    this.onActionTextsecClick = this.onActionTextsecClick.bind(this);

    this.onActionTitleColorsecClick = this.onActionTitleColorsecClick.bind(
      this
    );
    this.onActionTitleColorsecClose = this.onActionTitleColorsecClose.bind(
      this
    );
    this.onActionTitleColorsecClickComplete = this.onActionTitleColorsecClickComplete.bind(
      this
    );

    this.onCollectionCellBGsecClick = this.onCollectionCellBGsecClick.bind(
      this
    );
    this.onCollectionCellBGsecClose = this.onCollectionCellBGsecClose.bind(
      this
    );
    this.onCollectionCellBGsecClickComplete = this.onCollectionCellBGsecClickComplete.bind(
      this
    );

    this.onCollectionProductTitlesecClick = this.onCollectionProductTitlesecClick.bind(
      this
    );
    this.onCollectionProductTitlesecClose = this.onCollectionProductTitlesecClose.bind(
      this
    );
    this.onCollectionProductTitlesecClickComplete = this.onCollectionProductTitlesecClickComplete.bind(
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
      ProductsCollectionsData: [],
      SelectedCollectionId: this.props.defaultSettings.SelectedCollectionId,
      CollectionsProductsData: [],
      CollectionsProductsDataDefault: getSelectedCollectionProducts(),
      prodCollectionname: this.props.defaultSettings.prodCollectionname || '',
      collectionType: this.props.defaultSettings.collectionType || '',
      selectedProductId: this.props.defaultSettings.selectedProductId || '',
      handle: this.props.defaultSettings.handle
    };
  }

  onApplySetting = e => {
    e.preventDefault();
    const alldefaultSettings = {
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
      selectedProductId: this.state.selectedProductId,
      prodCollectionname: this.state.prodCollectionname,
      SelectedCollectionId: this.state.SelectedCollectionId,
      collectionType: this.state.collectionType,
      handle: this.state.handle
    };
    this.props.onApply(alldefaultSettings);
    this.props.onCloseModal(this.props.modalId);
  };

  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  };

  applyAppliedSetting = defaultSettings => {};

  onIconColorsecClick = () => {
    this.setState({ displayIconColor: true });
  };

  onIconColorsecClose = () => {
    this.setState({ displayIconColor: false });
  };

  onIconColorsecClickComplete = color => {
    this.setState({ IconColor: color.hex });
  };

  onHeaderTextsecClick = e => {
    this.setState({ HeaderText: e.target.value });
  };

  onHeaderTitlesecClick = () => {
    this.setState({ displayHeaderTitle: true });
  };

  onHeaderTitlesecClose = () => {
    this.setState({ displayHeaderTitle: false });
  };

  onHeaderTitlesecClickComplete = color => {
    this.setState({ HeaderTitle: color.hex });
  };

  onHeaderBGsecColorClick = () => {
    this.setState({ displayHeaderBGColor: true });
  };

  onHeaderBGsecColorClose = () => {
    this.setState({ displayHeaderBGColor: false });
  };

  onHeaderBGsecColorClickComplete = color => {
    this.setState({ HeaderBGColor: color.hex });
  };

  onProductBorderolorsecClick = () => {
    this.setState({ displayProductBorderolor: true });
  };

  onProductBorderolorsecClose = () => {
    this.setState({ displayProductBorderolor: false });
  };

  onProductBorderolorsecClickComplete = color => {
    this.setState({ productBorderColor: color.hex });
  };

  onActionColorsecClick = () => {
    this.setState({ displayActionColor: true });
  };

  onActionColorsecClose = () => {
    this.setState({ displayActionColor: false });
  };

  onActionColorsecClickComplete = color => {
    this.setState({ ActionColor: color.hex });
  };

  onActionTextsecClick = e => {
    this.setState({ ActionText: e.target.value });
  };

  onActionTitleColorsecClick = () => {
    this.setState({ displayActionTitleColor: true });
  };

  onActionTitleColorsecClose = () => {
    this.setState({ displayActionTitleColor: false });
  };

  onActionTitleColorsecClickComplete = color => {
    this.setState({ ActionTitleColor: color.hex });
  };

  onCollectionCellBGsecClick = () => {
    this.setState({ displayCollectionCellBG: true });
  };

  onCollectionCellBGsecClose = () => {
    this.setState({ displayCollectionCellBG: false });
  };

  onCollectionCellBGsecClickComplete = color => {
    this.setState({ CollectionCellBG: color.hex });
  };

  onCollectionProductTitlesecClick = () => {
    this.setState({ displayCollectionProductTitle: true });
  };

  onCollectionProductTitlesecClose = () => {
    this.setState({ displayCollectionProductTitle: false });
  };

  onCollectionProductTitlesecClickComplete = color => {
    this.setState({ CollectionProductTitle: color.hex });
  };

  handleChangeStart = () => {};

  handleChange = value => {
    this.setState({
      value
    });
  };

  handleChangeComplete = () => {};

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '2px',
    top: '4px'
  };

  popover = {
    position: 'absolute',
    zIndex: 10000
  };

  DropDownGetIconCellection2HederCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
  };

  DropDownGetCollection2ActionCallback = icon => {
    this.setState({ DropDownGetIconaction: icon });
  };

  setProductsForCollection = collectionDetails => {
    this.setState({ DisplayCollectionValue: 'none' });
    if (collectionDetails.id) {
      this.setState({ selectedProductId: collectionDetails.id });
    }
    this.setState({ prodCollectionname: collectionDetails.title });
    if (collectionDetails.collectionType) {
      this.setState({ collectionType: collectionDetails.collectionType });
    }
    this.setState({ handle: collectionDetails.handle });
    const collectionType = collectionDetails.collectionType;
    const selectedProductId = collectionDetails.id;
    axios
      .get(
        `${API_ROOT}/api/v2/collection/products/${collectionType}/${selectedProductId}`
      )
      .then(res1 => {
        this.setState({ CollectionsProductsData: res1.data.productVMList });
        res1.data && this.setState({ isLoaded: true });
      });
  };

  DisplayCollection = () => {
    if (this.state.DisplayCollectionValue === 'none') {
      this.setState({ DisplayCollectionValue: 'block' });
    } else {
      this.setState({ DisplayCollectionValue: 'none' });
    }
  };

  componentWillMount() {
    axios.get(`${API_ROOT}/api/v2/collection-listings`).then(res => {
      this.setState({ ProductsCollectionsData: res.data });
    });
    const collectionType = this.state.collectionType;
    const selectedProductId = this.state.selectedProductId;
    if (collectionType && selectedProductId) {
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${collectionType}/${selectedProductId}`
        )
        .then(res1 => {
          this.setState({ CollectionsProductsData: res1.data.productVMList });
          res1.data && this.setState({ isLoaded: true });
        });
    }
  }

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  render() {
    return (
      <Row className="p-3">
        <Col md={4} className="d-flex align-items-center">
          <div className="setting_fields">
            <div
              id="SecondDropContainer"
              className="HoverEffectDragDrop"
              style={{
                background: this.state.CollectionCellBG,
                height:
                  this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length !== 0
                    ? 'auto'
                    : '130px',
                width: '268px',
                overflow:
                  this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length !== 0
                    ? 'auto'
                    : 'hidden'
              }}
            >
              <div
                id="SecondDropTopSection"
                style={{
                  background: this.state.HeaderBGColor,
                  position: 'absolute',
                  width: '268px',
                  height: '35px'
                }}
              >
                <div
                  id="SecondDropLeftIcon"
                  style={{ color: this.state.IconColor }}
                >
                  <i className={this.state.DropDownGetIconheader} />
                </div>
                <div
                  id="SecondDropTopSecTitle"
                  style={{ color: this.state.HeaderTitle }}
                >
                  {this.state.HeaderText}
                </div>
                <div id="SecondDropShopNowContainer">
                  <div
                    id="SecondDropShopNowTitle"
                    style={{ color: this.state.ActionTitleColor }}
                  >
                    {this.state.ActionText}
                  </div>
                  <div
                    id="SecondDropShopNowIcon"
                    style={{ color: this.state.ActionColor }}
                  >
                    <i className={this.state.DropDownGetIconaction} />
                  </div>
                </div>
              </div>
              <div
                id="SecondDropProductContent"
                style={{
                  width: '100%',
                  height: '120px',
                  paddingTop: '35px',
                  display:
                    this.state.CollectionsProductsData &&
                    this.state.CollectionsProductsData.length === 0
                      ? 'block'
                      : 'none'
                }}
              >
                {this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length === 0 &&
                  this.state.CollectionsProductsDataDefault.map(
                    (item, index) => {
                      return (
                        <div className="SecondDropProductContainer">
                          <div
                            className="SecondDropProduct"
                            style={{
                              border: `1px solid${
                                this.state.productBorderColor
                              }`
                            }}
                          >
                            {item.imageUrl && (
                              <img src={item.imageUrl} alt={item.title} />
                            )}
                            {!item.imageUrl && <i className="pe-7s-photo" />}
                          </div>
                          <div
                            className="SecondDropProductTitle"
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
              <div
                id="SecondDropProductContent"
                style={{
                  width:
                    this.state.CollectionsProductsData &&
                    `${this.state.CollectionsProductsData.length * 70}px`,
                  height: '120px',
                  paddingTop: '35px',
                  display:
                    this.state.CollectionsProductsData &&
                    this.state.CollectionsProductsData.length === 0
                      ? 'none'
                      : 'block'
                }}
              >
                {!this.state.isLoaded &&
                  this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length !== 0 && (
                    <div className="">
                      {' '}
                      {/* <Loader loaded={this.state.isLoaded} />{' '} */}
                    </div>
                  )}
                {this.state.CollectionsProductsData &&
                  this.state.CollectionsProductsData.length !== 0 &&
                  this.state.isLoaded &&
                  this.state.CollectionsProductsData.map((item, index) => {
                    return (
                      <div className="FirstDropProductContainer">
                        <div
                          className="FirstDropProduct"
                          style={{
                            border: `1px solid${this.state.productBorderColor}`
                          }}
                        >
                          <img src={item.imageUrl} />
                        </div>

                        <div
                          className="FirstDropProductTitle"
                          style={{ color: this.state.CollectionProductTitle }}
                        >
                          {item.title}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Col>
        <Col md={8}>
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
                            this.state.prodCollectionname || 'SELECT COLLECTION'
                          }
                          onClick={this.DisplayCollection.bind(this)}
                          className="ProductDropSearchDown"
                        />
                        <div className="searchDropModal">
                          <i className="lnr-chevron-down" />
                        </div>
                        <div
                          className="ProductResult mainProductListSearch"
                          style={{
                            display: this.state.DisplayCollectionValue
                          }}
                        >
                          {this.state.ProductsCollectionsData.map(
                            (item, index) => {
                              return (
                                <div
                                  key={item.id}
                                  className="collectionElementProductShowHide Active"
                                  style={{
                                    height: '50px',
                                    width: 'auto',
                                    cursor: 'pointer'
                                  }}
                                  id={
                                    this.state.selectedProductId === item.id
                                      ? 'Active'
                                      : ''
                                  }
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
                          DropDownGetIconCellection2HederCallback={
                            this.DropDownGetIconCellection2HederCallback
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
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onIconColorsecClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.IconColor
                            }}
                            onClick={this.onIconColorsecClick}
                          />
                        </div>
                        {this.state.displayIconColor ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onIconColorsecClose}
                            />
                            <ChromePicker
                              color={this.state.IconColor}
                              onChange={this.onIconColorsecClickComplete}
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
                          id="CollectionDropDown"
                          style={{ color: '#000', fontWeight: 600 }}
                          onChange={this.onHeaderTextsecClick}
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
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onHeaderTitlesecClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.HeaderTitle
                            }}
                            onClick={this.onHeaderTitlesecClick}
                          />
                        </div>
                        {this.state.displayHeaderTitle ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onHeaderTitlesecClose}
                            />
                            <ChromePicker
                              color={this.state.HeaderTitle}
                              onChange={this.onHeaderTitlesecClickComplete}
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
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onProductBorderolorsecClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.productBorderColor
                            }}
                            onClick={this.onProductBorderolorsecClick}
                          />
                        </div>
                        {this.state.displayProductBorderolor ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onProductBorderolorsecClose}
                            />
                            <ChromePicker
                              color={this.state.productBorderColor}
                              onChange={
                                this.onProductBorderolorsecClickComplete
                              }
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
                        <label>ACTION TITLE</label>
                      </div>
                      <div className="CollectionMainEditBGIconView">
                        <input
                          type="text"
                          id="CollectionDropDown"
                          style={{ color: '#000', fontWeight: 600 }}
                          onChange={this.onActionTextsecClick}
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
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onActionTitleColorsecClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.ActionTitleColor
                            }}
                            onClick={this.onActionTitleColorsecClick}
                          />
                        </div>
                        {this.state.displayActionTitleColor ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onActionTitleColorsecClose}
                            />
                            <ChromePicker
                              color={this.state.ActionTitleColor}
                              onChange={this.onActionTitleColorsecClickComplete}
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
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onCollectionCellBGsecClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.CollectionCellBG
                            }}
                            onClick={this.onCollectionCellBGsecClick}
                          />
                        </div>
                        {this.state.displayCollectionCellBG ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onCollectionCellBGsecClose}
                            />
                            <ChromePicker
                              color={this.state.CollectionCellBG}
                              onChange={this.onCollectionCellBGsecClickComplete}
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
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onCollectionProductTitlesecClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.CollectionProductTitle
                            }}
                            onClick={this.onCollectionProductTitlesecClick}
                          />
                        </div>
                        {this.state.displayCollectionProductTitle ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onCollectionProductTitlesecClose}
                            />
                            <ChromePicker
                              color={this.state.CollectionProductTitle}
                              onChange={
                                this.onCollectionProductTitlesecClickComplete
                              }
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="CollectionMainEditIcon">
                      <div className="CollectionSettingIcon">
                        <label>HEADER BACKGROUND COLOR</label>
                      </div>
                      <div className="CollectionMainEditBGIconView">
                        <input
                          type="text"
                          value={this.state.HeaderBGColor}
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.onHeaderBGsecColorClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.state.HeaderBGColor
                            }}
                            onClick={this.onHeaderBGsecColorClick}
                          />
                        </div>
                        {this.state.displayHeaderBGColor ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.onHeaderBGsecColorClose}
                            />
                            <ChromePicker
                              color={this.state.HeaderBGColor}
                              onChange={this.onHeaderBGsecColorClickComplete}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardFooter className="d-block text-right">
              <Button
                size="sm"
                className="mr-2"
                color="link"
                onClick={this.onCloseModal}
              >
                Cancel
              </Button>
              <Button
                className="btn-wide btn-shadow"
                color="primary"
                onClick={this.onApplySetting}
              >
                Apply
              </Button>
            </CardFooter>
          </div>
        </Col>
      </Row>
    );
  }
}
export default ModalSearchContentSec;

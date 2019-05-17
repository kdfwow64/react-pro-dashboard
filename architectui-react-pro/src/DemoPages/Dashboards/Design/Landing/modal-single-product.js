// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React from 'react';
import { ChromePicker } from 'react-color';
import Switch from 'react-switchery-component';
import 'react-switchery-component/react-switchery-component.css';
import { Button, CardFooter } from 'reactstrap';
import { API_ROOT } from '../../../../utilities/api-config';
import '../index.css';

const Placeholder = './Placeholder.png';
const iconData = ['ios-add'];

const ProductsCollectionsCellsSettings = [
  {
    id: 'unique1',
    // content: 'Default',
    // type: 'product',
    collectionId: '123',
    productId: '123',
    customTitle: '',
    showPrice: true,
    ShowCollectionProduct: 'none',
    DisplayCollectionValue: 'none',
    CollectionDisplay: 'none',
    ProductDisplay: 'none',
    title: '',
    name: '',
    pictureValue: '',
    titleValue: '',
    selectedid: '',
    selectedproductid: ''
  }
];

const LeftProductsCollectionsCellsSettings = {
  collections: [
    {
      id: 'unique1',
      content: 'Default',
      imageUrl: Placeholder,
      title: 'PRODUCT',
      price: 'Price',
      showPrice: true,
      collection: 'PRODUCT',
      DisplayCollectionValue: 'none',
      collectionType: '',
      handle: '',
      collectionId: '',
      productHandle: '',
      ShowCollectionProduct: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    }
  ]
};

const SelectedData = {};

class ModalSingleProduct extends React.Component {
  constructor(props) {
    super(props);

    this.onTitleColorClick = this.onTitleColorClick.bind(this);
    this.onTitleColorClose = this.onTitleColorClose.bind(this);
    this.onTitleColorClickComplete = this.onTitleColorClickComplete.bind(this);

    this.onPriceColorClick = this.onPriceColorClick.bind(this);
    this.onPriceColorClose = this.onPriceColorClose.bind(this);
    this.onPriceColorClickComplete = this.onPriceColorClickComplete.bind(this);

    this.onProductBorderColorClick = this.onProductBorderColorClick.bind(this);
    this.onProductBorderColorClose = this.onProductBorderColorClose.bind(this);
    this.onProductBorderColorClickComplete = this.onProductBorderColorClickComplete.bind(
      this
    );

    this.onCellBGColorClick = this.onCellBGColorClick.bind(this);
    this.onCellBGColorClose = this.onCellBGColorClose.bind(this);
    this.onCellBGColorClickComplete = this.onCellBGColorClickComplete.bind(
      this
    );

    this.onPageCircleActiveColorClick = this.onPageCircleActiveColorClick.bind(
      this
    );
    this.onPageCircleActiveColorClose = this.onPageCircleActiveColorClose.bind(
      this
    );
    this.onPageCircleActiveColorClickComplete = this.onPageCircleActiveColorClickComplete.bind(
      this
    );

    this.onPageCircleInactiveColorClick = this.onPageCircleInactiveColorClick.bind(
      this
    );
    this.onPageCircleInactiveColorClose = this.onPageCircleInactiveColorClose.bind(
      this
    );
    this.onPageCircleInactiveColorClickComplete = this.onPageCircleInactiveColorClickComplete.bind(
      this
    );

    this.onApplySetting = this.onApplySetting.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.ProductTitle = this.ProductTitle.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.getCellContents = this.getCellContents.bind(this);
    this.RemoveNewAddedDiv = this.RemoveNewAddedDiv.bind(this);
    this.GetProductcollection = this.GetProductcollection.bind(this);

    this.state = {
      titleColor: this.props.defaultSettings.titleColor,
      displayTitleColor: false,
      priceColor: this.props.defaultSettings.priceColor,
      displayPriceColor: false,
      productBorderColor: this.props.defaultSettings.productBorderColor,
      displayProductBorderColor: false,
      cellBGColor: this.props.defaultSettings.cellBGColor,
      displayCellBGColor: false,
      pageCircleActiveColor: this.props.defaultSettings.pageCircleActiveColor,
      displayPageCircleActiveColor: false,
      pageCircleInactiveColor: this.props.defaultSettings
        .pageCircleInactiveColor,
      displayPageCircleInactiveColor: false,
      customTitle: this.props.defaultSettings.customTitle,
      DisplayCollectionValue: 'none',
      ProductDisplay: 'none',
      CollectionDisplay: 'none',
      ShowCollectionProduct: 'none',
      isChecked: this.props.defaultSettings.isChecked || true,
      postVal: '',
      counterOfPicture: 2,
      isCheckedFirst: this.props.defaultSettings.isCheckedFirst || true,
      cellContents:
        this.props.defaultSettings.cellContents ||
        ProductsCollectionsCellsSettings,
      leftcellContents: LeftProductsCollectionsCellsSettings.collections,
      SearchText: [],
      selectedProductName: this.props.defaultSettings.selectedProductName || '',
      prodcollection: this.props.defaultSettings.prodcollection || 'default',
      prodCollectionname: this.props.defaultSettings.prodCollectionname,
      CollectionsProductsData: [],
      ProductsCollectionsData: [],
      selectedimageUrl: this.props.defaultSettings.selectedimageUrl,
      selectedprice: this.props.defaultSettings.selectedprice,
      selectedName: this.props.defaultSettings.selectedName || '',
      handle: this.props.defaultSettings.handle,
      // productHandle: this.props.defaultSettings.productHandle,
      showCollectionDropdown: this.props.defaultSettings
        .showCollectionDropdown || ['none', 'none', 'none', 'none', 'none'],
      showProductDropdown: this.props.defaultSettings.showProductDropdown || [
        'none',
        'none',
        'none',
        'none',
        'none'
      ],
      addanotherdisplay: this.props.defaultSettings.addanotherdisplay || 'block'
    };
  }

  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  };

  onApplySetting = e => {
    // e.preventDefault();
    const allSettings = {
      titleColor: this.state.titleColor,
      priceColor: this.state.priceColor,
      productBorderColor: this.state.productBorderColor,
      cellBGColor: this.state.cellBGColor,
      pageCircleActiveColor: this.state.pageCircleActiveColor,
      pageCircleInactiveColor: this.state.pageCircleInactiveColor,
      customTitle: this.state.customTitle,
      itemId: this.props.itemId,
      isChecked: this.state.isChecked,
      counterOfPicture: this.state.counterOfPicture,
      cellContents: this.state.cellContents,
      displayTitleColor: this.state.displayTitleColor,
      displayPriceColor: this.state.displayPriceColor,
      displayProductBorderColor: this.state.displayProductBorderColor,
      displayCellBGColor: this.state.displayCellBGColor,
      displayPageCircleActiveColor: this.state.displayPageCircleActiveColor,
      displayPageCircleInactiveColor: this.state.displayPageCircleInactiveColor,
      DisplayCollectionValue: this.state.DisplayCollectionValue,
      ProductDisplay: this.state.ProductDisplay,
      CollectionDisplay: this.state.CollectionDisplay,
      ShowCollectionProduct: this.state.ShowCollectionProduct,
      postVal: this.state.postVal,
      isCheckedFirst: this.state.isCheckedFirst,
      selectedProductName: this.state.selectedProductName,
      prodcollection: this.state.prodcollection,
      prodCollectionname: this.state.prodCollectionname,
      selectedimageUrl: this.state.selectedimageUrl,
      selectedprice: this.state.selectedprice,
      selectedName: this.state.selectedName,
      handle: this.state.handle,
      // productHandle: this.state.productHandle,
      showCollectionDropdown: this.state.showCollectionDropdown,
      showProductDropdown: this.state.showProductDropdown,
      addanotherdisplay: this.state.addanotherdisplay
    };
    this.props.onApply(allSettings);
    this.props.onCloseModal(this.props.modalId);
  };

  applyAppliedSetting = defaultSettings => {};

  getCellContents = () => {
    const cellContents = [...this.state.cellContents];
    const rLength = cellContents.length;
    if (cellContents.length >= 4) {
      this.setState({ addanotherdisplay: 'none' });
    }
    cellContents.push(ProductsCollectionsCellsSettings[0]);
    this.setState({ cellContents });
  };

  RemoveNewAddedDiv = index => {
    if (this.state.cellContents.length >= 1) {
      this.setState({
        cellContents: this.state.cellContents.filter((_, i) => i !== index)
      });
    }
    if (this.state.cellContents.length <= 5) {
      this.setState({ addanotherdisplay: 'block' });
    }
  };

  onTitleColorClick = () => {
    this.setState({ displayTitleColor: true });
  };

  onTitleColorClose = () => {
    this.setState({ displayTitleColor: false });
  };

  onTitleColorClickComplete = color => {
    this.setState({ titleColor: color.hex });
  };

  onPriceColorClick = () => {
    this.setState({ displayPriceColor: true });
  };

  onPriceColorClose = () => {
    this.setState({ displayPriceColor: false });
  };

  onPriceColorClickComplete = color => {
    this.setState({ priceColor: color.hex });
  };

  onProductBorderColorClick = () => {
    this.setState({ displayProductBorderColor: true });
  };

  onProductBorderColorClose = () => {
    this.setState({ displayProductBorderColor: false });
  };

  onProductBorderColorClickComplete = color => {
    this.setState({ productBorderColor: color.hex });
  };

  onPageCircleActiveColorClick = () => {
    this.setState({ displayPageCircleActiveColor: true });
  };

  onPageCircleActiveColorClose = () => {
    this.setState({ displayPageCircleActiveColor: false });
  };

  onPageCircleActiveColorClickComplete = color => {
    this.setState({ pageCircleActiveColor: color.hex });
  };

  onPageCircleInactiveColorClick = () => {
    this.setState({ displayPageCircleInactiveColor: true });
  };

  onPageCircleInactiveColorClose = () => {
    this.setState({ displayPageCircleInactiveColor: false });
  };

  onPageCircleInactiveColorClickComplete = color => {
    this.setState({ pageCircleInactiveColor: color.hex });
  };

  onCellBGColorClick = () => {
    this.setState({ displayCellBGColor: true });
  };

  onCellBGColorClose = () => {
    this.setState({ displayCellBGColor: false });
  };

  onCellBGColorClickComplete = color => {
    this.setState({ cellBGColor: color.hex });
  };

  SearchProduct(e) {
    const searchText = e.target.value;
    const CollectionsProducts = this.state.CollectionsProductsData;
    const updatedCollectionsProducts = CollectionsProducts.filter(function(
      item
    ) {
      return (
        item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ CollectionsProductsData: updatedCollectionsProducts });
  }

  handleChange(item, index, e) {
    if (index === 0) {
      const newCellContents = [...this.state.cellContents];
      const cellItem = newCellContents[index];
      cellItem.showPrice = !cellItem.showPrice;
      newCellContents[index] = cellItem;
      this.setState({ cellContents: newCellContents });
      this.setState({ isCheckedFirst: e.target.checked });
    }
    this.setState({ isChecked: e.target.checked });
    const newCellContents = [...this.state.cellContents];
    const cellItem = this.state.cellContents[index];
    cellItem.showPrice = !cellItem.showPrice; // e.target.checked;
    newCellContents[index] = cellItem;
    this.setState({ cellContents: newCellContents });
  }

  onCellStyleChange = e => {
    this.setState({ leftcellContentsType: e.target.value });
  };

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

  DisplayCollection = (item, index) => {
    const showCollectionDropdown = [...this.state.showCollectionDropdown];
    showCollectionDropdown[index] =
      showCollectionDropdown[index] === 'none' ? 'block' : 'none';
    this.setState({ showCollectionDropdown });
  };

  GetProductcollection = (item, index, e) => {
    const newCellContents = [...this.state.cellContents];
    const cellItem = this.state.cellContents[index];

    cellItem.name = '';
    item.collectionname = '';
    item.productname = '';

    cellItem.pictureValue = e.target.value;
    cellItem.DisplayCollectionValue = 'none';

    if (e.target.value === 'default') {
      cellItem.ProductDisplay = 'none';
      cellItem.CollectionDisplay = 'none';
      cellItem.ShowCollectionProduct = 'none';
    } else if (e.target.value === 'collection') {
      cellItem.ProductDisplay = 'none';
      cellItem.CollectionDisplay = 'block';
      cellItem.ShowCollectionProduct = 'block';
    } else if (e.target.value === 'product') {
      cellItem.ProductDisplay = 'block';
      cellItem.CollectionDisplay = 'none';
      cellItem.ShowCollectionProduct = 'block';
    }

    newCellContents[index] = cellItem;
    this.setState({ cellContents: newCellContents });
  };

  ProductTitle = (item, index, e) => {
    if (index === 0) {
      const newLeftCellContents = [...this.state.leftcellContents];
      const cellItem = newLeftCellContents[index];
      // cellItem.title = e.target.value;
      cellItem.name = e.target.value;
      newLeftCellContents[index] = cellItem;
      this.setState({ leftcellContents: newLeftCellContents });
      this.setState({ selectedName: e.target.value });
    }
    const newCellContents = [...this.state.cellContents];
    const cellItem = this.state.cellContents[index];

    // let leftcellItem = this.state.leftcellContents[index];

    cellItem.name = e.target.value;
    newCellContents[index] = cellItem;
    this.setState({ cellContents: newCellContents });
  };

  setProductsForCollection = (item2, index2, item, index) => {
    item2.DisplayCollectionValue = 'none';
    const newcellContents = [...this.state.cellContents];
    const cellContentsItem = [];
    item2.titleValue = item.title;
    item2.imageUrl = item2.imageUrl;
    item2.handle = item2.handle;
    item2.CollectionDisplay = item.CollectionDisplay;
    item2.ProductDisplay = item.ProductDisplay;
    item2.ShowCollectionProduct = item.ShowCollectionProduct;
    item2.DisplayCollectionValue = 'none';
    item2.pictureValue = item.pictureValue;
    item2.selectedid = item2.id;
    item2.titleValue = item.title;
    item2.showPrice = item.showPrice;
    item2.collectionname = item.title;
    item2.productname = '';
    newcellContents[index] = item2;
    this.setState({ cellContents: newcellContents });

    const showCollectionDropdown = [...this.state.showCollectionDropdown];
    showCollectionDropdown[index] = 'none';
    this.setState({ showCollectionDropdown });

    if (index === 0) {
      this.setState({ selectedProductName: item2.id });
      this.setState({ prodCollectionname: item2.title });
      this.setState({ selectedimageUrl: item2.imageUrl });
      this.setState({ handle: item2.handle });
      this.setState({ selectedprice: '' });
      this.setState({ DisplayCollectionValue: 'none' });
      this.setState({ selectedName: '' });
      const newleftcellContents = [...this.state.leftcellContents];
      let cellContentsItem = {};
      cellContentsItem = item2;
      newleftcellContents[index] = cellContentsItem;
      this.setState({ leftcellContents: newleftcellContents });
    }
  };

  setCollectionForProduct = (item2, index2, item, index) => {
    item2.DisplayCollectionValue = 'none';
    const newcellContents = [...this.state.cellContents];
    const cellContentsItem = {};
    cellContentsItem.CollectionDisplay = item.CollectionDisplay;
    cellContentsItem.ProductDisplay = item.ProductDisplay;
    cellContentsItem.ShowCollectionProduct = item.ShowCollectionProduct;
    cellContentsItem.pictureValue = item.pictureValue;
    cellContentsItem.imageUrl = item2.imageUrl;
    cellContentsItem.price = item2.price;
    cellContentsItem.showPrice = item.showPrice;
    cellContentsItem.DisplayProductValue = 'none';
    cellContentsItem.titleValue = item2.title;
    cellContentsItem.title = item2.title;
    cellContentsItem.selectedproductid = item2.id;
    cellContentsItem.collectionname = '';
    cellContentsItem.productname = item.title;
    cellContentsItem.productHandle = item2.handle;
    newcellContents[index] = cellContentsItem;
    this.setState({ cellContents: newcellContents });
    const showProductDropdown = [...this.state.showProductDropdown];
    showProductDropdown[index] = 'none';
    this.setState({ showProductDropdown });

    if (index === 0) {
      const newleftcellContents = [...this.state.leftcellContents];
      let cellContentsItem = {};
      cellContentsItem = item2;
      newleftcellContents[index] = cellContentsItem;
      this.setState({ leftcellContents: newleftcellContents });
      this.setState({ selectedProductName: item2.id });
      this.setState({ prodCollectionname: item2.title });
      this.setState({ selectedimageUrl: item2.imageUrl });
      this.setState({ productHandle: item2.productHandle });
      this.setState({ selectedprice: item2.price });
      this.setState({ DisplayCollectionValue: 'none' });
      this.setState({ selectedName: '' });
    }
  };

  DisplayProduct = (item, index, e) => {
    const showProductDropdown = [...this.state.showProductDropdown];

    showProductDropdown[index] =
      showProductDropdown[index] === 'none' ? 'block' : 'none';

    this.setState({ showProductDropdown });
  };

  componentWillMount() {
    const newleftcellContents = [...this.state.leftcellContents];
    let cellContentsItem = {};
    if (this.state.selectedProductName) {
      const SelectedCollectionData = {
        title: this.state.prodCollectionname,
        imageUrl: this.state.selectedimageUrl,
        price: this.state.selectedprice
      };
      cellContentsItem = SelectedCollectionData;
      newleftcellContents[0] = cellContentsItem;
      this.setState({ leftcellContents: newleftcellContents });
    }

    axios.get(`${API_ROOT}/api/v2/collection-listings`).then(res => {
      this.setState({ ProductsCollectionsData: res.data });
    });
    axios.get(`${API_ROOT}/api/products`).then(res => {
      this.setState({ CollectionsProductsData: res.data });
    });
  }

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  render() {
    const { value } = this.state;
    return (
      <div className="row">
        <div className="col-lg-12 Search-form-settings">
          <div className="col-lg-4 col-sm-4 setting_left_col setting_comman_col">
            <div className="setting_fields">
              {this.state.leftcellContents.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="HoverEffectDragDrop"
                      id="ThirdDropContainer"
                      style={{ backgroundColor: this.state.cellBGColor }}
                    >
                      {item.imageUrl && (
                        <div className="ThirdCollectionPicture">
                          <img
                            src={item.imageUrl}
                            style={{
                              border: `1px solid ${
                                this.state.productBorderColor
                              }`,
                              height: '100%',
                              width: '100%'
                            }}
                          />
                        </div>
                      )}
                      {item.imageUrl === null && (
                        <div
                          className="ThirdCollectionPicture"
                          style={{
                            border: `1px solid ${
                              this.state.productBorderColor
                            }`,
                            backgroundColor: 'rgba(200, 200, 200, 0.37)'
                          }}
                        >
                          <span style={{ fontSize: '17px' }}>No Image</span>
                        </div>
                      )}
                      {!item.imageUrl && item.imageUrl !== null && (
                        <div
                          className="ThirdCollectionPicture"
                          style={{
                            border: `1px solid ${this.state.productBorderColor}`
                          }}
                        >
                          <i className="pe-7s-photo" />
                        </div>
                      )}
                      {item.title && !this.state.prodCollectionname && (
                        <div
                          className="ThirdPictureTitle"
                          style={{ color: this.state.titleColor }}
                        >
                          {item.title}
                        </div>
                      )}
                      {item.title && this.state.prodCollectionname && (
                        <div
                          className="ThirdPictureTitle"
                          style={{ color: this.state.titleColor }}
                        >
                          {this.state.prodCollectionname}
                        </div>
                      )}
                      {!item.title && (
                        <div
                          className="ThirdPictureTitle"
                          style={{ color: this.state.titleColor }}
                        >
                          PRODUCT
                        </div>
                      )}
                      {item.price && this.state.selectedprice && (
                        <div
                          className="ThirdPicturePriceTitle"
                          style={{
                            color: this.state.priceColor,
                            display:
                              this.state.isCheckedFirst === true
                                ? 'block'
                                : 'none'
                          }}
                        >
                          ${item.price}
                        </div>
                      )}
                      {!item.price && !this.state.selectedprice && (
                        <div
                          className="ThirdPicturePriceTitle"
                          style={{
                            color: this.state.priceColor,
                            display:
                              this.state.isCheckedFirst === true
                                ? 'block'
                                : 'none'
                          }}
                        />
                      )}
                      {!item.price && !this.state.prodcollection && (
                        <div
                          className="ThirdPicturePriceTitle"
                          style={{
                            color: this.state.priceColor,
                            display: 'block'
                          }}
                        >
                          Price
                        </div>
                      )}
                      <div className="ThirdPicturesCircles">
                        {this.state.cellContents.map((item, index) => {
                          return (
                            <div className="ThirdPicturesCircleContainer">
                              <div
                                className="ThirdPicturesCircle"
                                style={{
                                  backgroundColor:
                                    index === 0
                                      ? this.state.pageCircleActiveColor
                                      : this.state.pageCircleInactiveColor
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-8 col-sm-8 setting_right_col setting_comman_col">
            <div className="setting_right_main">
              <div className="setting_title single_product_setting_modal_title">
                <h2>SWIPING PICTURE CELL</h2>
                <h6>DISPLAYS PRODUCTS OR COLLECTIONS (UP TO 5)</h6>
              </div>
              <div className="fixSettingScrollSection">
                {this.state.cellContents.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="title_setting_single">CELL CONTENT</div>
                      <div className="picture1_txt">PICTURE #{index + 1}</div>
                      <div className="SingleproductpictureOption">
                        <h2>TAPPING THIS PICTURE GOES TO</h2>
                        <select
                          className="pictureCollectionProduct"
                          onChange={e => {
                            this.GetProductcollection(item, index, e);
                          }}
                          value={item.pictureValue}
                        >
                          <option value="default">
                            Choose Collection or Product
                          </option>
                          <option value="collection">Collection</option>
                          <option value="product">Product</option>
                        </select>
                      </div>
                      <div
                        id="SingleProductModal"
                        style={{ display: item.ShowCollectionProduct }}
                      >
                        <div
                          className="CollectionProductBg"
                          style={{ display: item.CollectionDisplay }}
                        >
                          <div className="SingleProductModalTitleContainer">
                            SELECT COLLECTION FOR PICTURE #{index + 1}
                          </div>
                          <div className="CollectionEffectResultDropDown SingleModalProduct">
                            <input
                              type="text"
                              readOnly
                              value={item.title || 'SELECT COLLECTION'}
                              onClick={e => {
                                this.DisplayCollection(item, index);
                              }}
                              className="ProductDropSearchDown"
                            />
                            <div className="searchDropModal">
                              <i className="lnr-chevron-down" />
                            </div>
                            <div
                              className="ProductResult mainProductListSearch"
                              style={{
                                display: this.state.showCollectionDropdown[
                                  index
                                ]
                              }}
                            >
                              {this.state.ProductsCollectionsData.map(
                                (item2, index2) => {
                                  return (
                                    <div
                                      key={item2.id}
                                      className="collectionElementProductShowHide"
                                      style={{
                                        height: '50px',
                                        width: 'auto',
                                        cursor: 'pointer'
                                      }}
                                      onClick={() => {
                                        this.setProductsForCollection(
                                          item2,
                                          index2,
                                          item,
                                          index
                                        );
                                      }}
                                      id={
                                        item.collectionId === item2.collectionId
                                          ? 'Active'
                                          : ''
                                      }
                                    >
                                      {item2.imageUrl && (
                                        <img
                                          style={{
                                            width: '50px',
                                            height: '50px'
                                          }}
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
                                      <span>{item2.title}</span>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className="CollectionProductBg"
                          style={{ display: item.ProductDisplay }}
                        >
                          <div className="SingleProductModalTitleContainer">
                            SELECT OR SEARCH FOR A PRODUCT #{index + 1}
                          </div>
                          <div className="CollectionEffectResultDropDown SingleModalProduct">
                            <input
                              type="text"
                              readOnly
                              value={item.title || 'SELECT A PRODUCT'}
                              onClick={e => {
                                this.DisplayProduct(item, index, e);
                              }}
                              className="ProductDropSearchDown"
                            />
                            <div className="searchDropModal">
                              <i className="lnr-chevron-down" />
                            </div>
                            <div
                              className="ProductResult mainProductListSearch"
                              style={{
                                display: this.state.showProductDropdown[index]
                              }}
                            >
                              <input
                                type="text"
                                onKeyUp={this.SearchProduct}
                                defaultValue=""
                                value={this.state.searchText}
                              />
                              {this.state.CollectionsProductsData.map(
                                (item3, index3) => {
                                  return (
                                    <div
                                      key={item3.id}
                                      className="collectionElementProductShowHide productCollection"
                                      style={{
                                        height: '50px',
                                        width: 'auto',
                                        cursor: 'pointer'
                                      }}
                                      onClick={() => {
                                        this.setCollectionForProduct(
                                          item3,
                                          index3,
                                          item,
                                          index
                                        );
                                      }}
                                      id={item.id === item3.id ? 'Active' : ''}
                                    >
                                      {item3.imageUrl && (
                                        <img
                                          style={{
                                            width: '50px',
                                            height: '50px'
                                          }}
                                          src={item3.imageUrl}
                                          alt={item3.title}
                                        />
                                      )}
                                      {!item3.imageUrl && (
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
                                      <span style={{ lineHeight: 'unset' }}>
                                        {item3.title}
                                      </span>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                        {item.pictureValue === 'product' && (
                          <div className="ProductNamePrice">
                            <div className="PriceSection">
                              <p>SHOW PRICE</p>
                              {index === 0 && (
                                <div
                                  className="PricesettingsSwitchContainer"
                                  id={
                                    this.state.isChecked === true
                                      ? 'active_switch'
                                      : ''
                                  }
                                >
                                  <Switch
                                    checked={this.state.isChecked}
                                    onChange={e => {
                                      this.handleChange(item, index, e);
                                    }}
                                  />
                                </div>
                              )}
                              {index !== 0 && (
                                <div
                                  className="PricesettingsSwitchContainer"
                                  id={
                                    item.showPrice === true
                                      ? 'active_switch'
                                      : ''
                                  }
                                >
                                  <Switch
                                    checked={item.showPrice}
                                    onChange={e => {
                                      this.handleChange(item, index, e);
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {index >= 1 && (
                          <div
                            className="RemoveCollectionProduct"
                            key={this.state.counterOfPicture}
                            onClick={() => {
                              this.RemoveNewAddedDiv(index);
                            }}
                          >
                            <i className="lnr-trash" /> Remove Picture
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <br />
                <div
                  className="Append_right_link_container"
                  onClick={this.getCellContents}
                  style={{ display: this.state.addanotherdisplay }}
                >
                  <div className="Append_right_link_title">
                    <Button
                      className="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x"
                      outline
                      color="primary"
                    >
                      Add Another
                    </Button>
                  </div>
                  <div className="Append_right_link_icon" />
                </div>

                <div>
                  <div className="title_setting_single">
                    CELL THEME SETTINGS
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>TITLE COLOR </label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.titleColor}
                        defaultValue={this.state.titleColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onTitleColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.titleColor
                          }}
                          onClick={this.onTitleColorClick}
                        />
                      </div>
                      {this.state.displayTitleColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onTitleColorClose}
                          />
                          <ChromePicker
                            color={this.state.titleColor}
                            onChange={this.onTitleColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>PRICE COLOR (IF APPLICABLE)</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.priceColor}
                        defaultValue={this.state.priceColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onPriceColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.priceColor
                          }}
                          onClick={this.onPriceColorClick}
                        />
                      </div>
                      {this.state.displayPriceColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onPriceColorClose}
                          />
                          <ChromePicker
                            color={this.state.priceColor}
                            onChange={this.onPriceColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
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
                        onClick={this.onProductBorderColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.productBorderColor
                          }}
                          onClick={this.onProductBorderColorClick}
                        />
                      </div>
                      {this.state.displayProductBorderColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onProductBorderColorClose}
                          />
                          <ChromePicker
                            color={this.state.productBorderColor}
                            onChange={this.onProductBorderColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>CELL BACKGROUND COLOR</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.cellBGColor}
                        defaultValue={this.state.cellBGColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onCellBGColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.cellBGColor
                          }}
                          onClick={this.onCellBGColorClick}
                        />
                      </div>
                      {this.state.displayCellBGColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onCellBGColorClose}
                          />
                          <ChromePicker
                            color={this.state.cellBGColor}
                            onChange={this.onCellBGColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>PAGE CIRCLE COLOR ACTIVE</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.pageCircleActiveColor}
                        defaultValue={this.state.pageCircleActiveColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onPageCircleActiveColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.pageCircleActiveColor
                          }}
                          onClick={this.onPageCircleActiveColorClick}
                        />
                      </div>
                      {this.state.displayPageCircleActiveColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onPageCircleActiveColorClose}
                          />
                          <ChromePicker
                            color={this.state.pageCircleActiveColor}
                            onChange={this.onPageCircleActiveColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>PAGE CIRCLE COLOR INACTIVE</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.pageCircleInactiveColor}
                        defaultValue={this.state.pageCircleInactiveColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onPageCircleInactiveColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.pageCircleInactiveColor
                          }}
                          onClick={this.onPageCircleInactiveColorClick}
                        />
                      </div>
                      {this.state.displayPageCircleInactiveColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onPageCircleInactiveColorClose}
                          />
                          <ChromePicker
                            color={this.state.pageCircleInactiveColor}
                            onChange={
                              this.onPageCircleInactiveColorClickComplete
                            }
                          />
                        </div>
                      ) : null}
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
          </div>
        </div>
      </div>
    );
  }
}
export default ModalSingleProduct;

// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React from 'react';
import { ChromePicker } from 'react-color';
import Switch from 'react-switchery-component';
import 'react-switchery-component/react-switchery-component.css';
import { Button, CardFooter } from 'reactstrap';
import { DropdownList } from 'react-widgets';
import { API_ROOT } from '../../../../utilities/api-config';

const ProductsCollectionsCellsSettings = [
  {
    id: 'unique1',
    content: 'Default',
    type: 'product',
    collectionId: '123',
    productId: '123',
    customTitle: '',
    showPrice: true,
    ShowCollectionProduct: 'none',
    DisplayCollectionValue: 'none',
    CollectionDisplay: 'none',
    ProductDisplay: 'none',
    pictureValue: '',
    titleValue: '',
    selectedid: '',
    selectedproductid: ''
  },
  {
    id: 'unique1',
    content: 'Default',
    type: 'product',
    collectionId: '123',
    productId: '123',
    customTitle: '',
    showPrice: true,
    ShowCollectionProduct: 'none',
    DisplayCollectionValue: 'none',
    CollectionDisplay: 'none',
    ProductDisplay: 'none',
    pictureValue: '',
    titleValue: '',
    selectedid: '',
    selectedproductid: ''
  },
  {
    id: 'unique1',
    content: 'Default',
    type: 'product',
    collectionId: '123',
    productId: '123',
    customTitle: '',
    showPrice: true,
    ShowCollectionProduct: 'none',
    DisplayCollectionValue: 'none',
    CollectionDisplay: 'none',
    ProductDisplay: 'none',
    pictureValue: '',
    titleValue: '',
    selectedid: '',
    selectedproductid: ''
  },
  {
    id: 'unique1',
    content: 'Default',
    type: 'product',
    collectionId: '123',
    productId: '123',
    customTitle: '',
    showPrice: true,
    ShowCollectionProduct: 'none',
    DisplayCollectionValue: 'none',
    CollectionDisplay: 'none',
    ProductDisplay: 'none',
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
      imageUrl: '',
      title: '',
      name: '',
      collectionname: '',
      productname: '',
      price: 'Price',
      showPrice: true,
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: '',
      productId: '',
      collectionId: ''
    },
    {
      id: 'unique2',
      content: 'Default',
      imageUrl: '',
      title: '',
      name: '',
      collectionname: '',
      productname: '',
      price: 'Price',
      showPrice: true,
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: '',
      productId: '',
      collectionId: ''
    },
    {
      id: 'unique3',
      content: 'Default',
      imageUrl: '',
      title: '',
      name: '',
      collectionname: '',
      productname: '',
      price: 'Price',
      showPrice: true,
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: '',
      productId: '',
      collectionId: ''
    },
    {
      id: 'unique4',
      content: 'Default',
      imageUrl: '',
      title: '',
      name: '',
      collectionname: '',
      productname: '',
      price: 'Price',
      showPrice: true,
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: '',
      productId: '',
      collectionId: ''
    }
  ]
};

const ProductsCollections = {
  collections: [
    {
      id: '123',
      content: 'Default',
      title: 'Under $50',
      imageUrl: '',
      name: 'Under $50',
      showPrice: true,
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    },
    {
      id: '234',
      content: 'Default',
      title: 'All',
      imageUrl: '',
      name: 'All',
      showPrice: true,
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    }
  ],
  SelectedCollectionId: '123'
};

const CollectionsProducts = {
  collections: [
    {
      id: '111',
      content: 'Default',
      title: 'PRODUCT',
      imageUrl: '',
      price: 'Price',
      name: 'PRODUCT',
      showPrice: true,
      collection: 'Under $50',
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    },
    {
      id: '123',
      content: 'Default',
      title: 'Under $50',
      imageUrl: '',
      price: '6.16',
      name:
        'Female Fashion Frame Cat Eyes Shades Sunglasses Integrated UV Glasses',
      showPrice: true,
      collection: 'Under $50',
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    },
    {
      id: '234',
      content: 'Default',
      title: 'All',
      imageUrl: '',
      price: '7.16',
      name:
        'Men Women Square Vintage Mirrored Sunglasses Eyewear Outdoor Sports Glasse',
      showPrice: true,
      collection: 'All',
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    },
    {
      id: '345',
      content: 'Default',
      title: 'All',
      imageUrl: '',
      price: '7.16',
      name:
        'Men Women Square Vintage Mirrored Sunglasses Eyewear Outdoor Sports Glasse',
      showPrice: true,
      collection: 'Under $50',
      ShowCollectionProduct: 'none',
      DisplayCollectionValue: 'none',
      CollectionDisplay: 'none',
      ProductDisplay: 'none',
      DisplayProductValue: 'none',
      pictureValue: '',
      titleValue: '',
      selectedid: '',
      selectedproductid: ''
    }
  ],
  SelectedCollectionId: '111'
};

function getSelectedCollectionProducts() {
  let products = {};
  ProductsCollections.collections.map((item, index) => {
    // if (item.id === ProductsCollections.SelectedCollectionId) {
    products = item;
    // }
  });
  return products;
}
const iconData = ['ios-add'];

class ModalCollectionWithTitleContent extends React.Component {
  displayData = null;

  constructor(props) {
    super(props);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onApplySetting = this.onApplySetting.bind(this);

    this.onCellTitleChange = this.onCellTitleChange.bind(this);
    this.onSubCellTitleChange = this.onSubCellTitleChange.bind(this);

    this.onCellStyleChange = this.onCellStyleChange.bind(this);
    this.onCellTitleStyleChange = this.onCellTitleStyleChange.bind(this);
    this.onSubTitleStyleChange = this.onSubTitleStyleChange.bind(this);

    this.onCellTitleColorClick = this.onCellTitleColorClick.bind(this);
    this.onCellTitleColorClose = this.onCellTitleColorClose.bind(this);
    this.onCellTitleColorClickComplete = this.onCellTitleColorClickComplete.bind(
      this
    );

    this.onCellSubTitleColorClick = this.onCellSubTitleColorClick.bind(this);
    this.onCellSubTitleColorClose = this.onCellSubTitleColorClose.bind(this);
    this.onCellSubTitleColorClickComplete = this.onCellSubTitleColorClickComplete.bind(
      this
    );

    this.onProductTitleColorClick = this.onProductTitleColorClick.bind(this);
    this.onProductTitleColorClose = this.onProductTitleColorClose.bind(this);
    this.onProductTitleColorClickComplete = this.onProductTitleColorClickComplete.bind(
      this
    );

    this.onPriceColorClick = this.onPriceColorClick.bind(this);
    this.onPriceColorClose = this.onPriceColorClose.bind(this);
    this.onPriceColorClickComplete = this.onPriceColorClickComplete.bind(this);

    this.onImageCellSubTitleColorClick = this.onImageCellSubTitleColorClick.bind(
      this
    );
    this.onImageCellSubTitleColorClose = this.onImageCellSubTitleColorClose.bind(
      this
    );
    this.onImageCellSubTitleColorClickComplete = this.onImageCellSubTitleColorClickComplete.bind(
      this
    );

    this.onCellBGColorClick = this.onCellBGColorClick.bind(this);
    this.onCellBGColorClose = this.onCellBGColorClose.bind(this);
    this.onCellBGColorClickComplete = this.onCellBGColorClickComplete.bind(
      this
    );

    this.GetProductcollection = this.GetProductcollection.bind(this);
    this.DisplayCollection = this.DisplayCollection.bind(this);

    // this.appendDiv = this.appendDiv.bind(this);
    this.displayData = [];

    this.RemoveNewAddedDiv = this.RemoveNewAddedDiv.bind(this);
    this.getCellContents = this.getCellContents.bind(this);
    this.ProductTitle = this.ProductTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.setCollectionForProduct = this.setCollectionForProduct.bind(this);

    this.state = {
      cellStyle: this.props.defaultSettings.cellStyle,
      cellTitleStyle: this.props.defaultSettings.cellTitleStyle || 'Center',
      subTitleStyle: this.props.defaultSettings.subTitleStyle,
      cellTitle: this.props.defaultSettings.cellTitle,
      cellSubTitle: this.props.defaultSettings.cellSubTitle,
      cellTitleColor: this.props.defaultSettings.cellTitleColor,
      displayCellTitleColor: false,
      cellSubTitleColor: this.props.defaultSettings.cellSubTitleColor,
      displayCellSubTitleColor: false,
      productTitleColor: this.props.defaultSettings.productTitleColor,
      displayProductTitleColor: false,
      priceColor: this.props.defaultSettings.priceColor,
      displayPriceColor: false,
      imageCellSubTitleColor: this.props.defaultSettings.imageCellSubTitleColor,
      displayImageCellSubTitleColor: false,
      cellBGColor: this.props.defaultSettings.cellBGColor,
      displayCellBGColor: false,
      productList: this.props.defaultSettings.productList,
      ProductDisplay: this.props.defaultSettings.ProductDisplay,
      CollectionDisplay: this.props.defaultSettings.CollectionDisplay,
      ShowCollectionProduct: this.props.defaultSettings.ShowCollectionProduct,
      ProductTitleValue: this.props.defaultSettings.ProductTitleValue,
      DisplayCollectionValue: this.props.defaultSettings.DisplayCollectionValue,
      CellVertical: this.props.defaultSettings.CellVertical,
      Cellhorizontal: this.props.defaultSettings.Cellhorizontal,
      HideTitleSection: this.props.defaultSettings.HideTitleSection,
      ShowHideSubTitle: this.props.defaultSettings.ShowHideSubTitle,
      isChecked: this.props.defaultSettings.isChecked,
      ProductsCollections:
        this.props.defaultSettings.ProductsCollections ||
        ProductsCollections.collections,
      selectedCollectionProducts:
        this.props.defaultSettings.selectedCollectionProducts ||
        getSelectedCollectionProducts(),
      counterOfPicture: 2,
      cellContents:
        this.props.defaultSettings.ProductsCollectionsCellsSettings ||
        ProductsCollectionsCellsSettings,
      leftcellContents:
        this.props.defaultSettings.leftcellContents ||
        LeftProductsCollectionsCellsSettings.collections,
      leftcellContentsType: this.props.defaultSettings.leftcellContentsType,
      CollectionsProducts:
        this.props.defaultSettings.CollectionsProducts ||
        CollectionsProducts.collections,
      SearchText: [],
      DefaultWidth: 530,
      Subtitle: this.props.defaultSettings.Subtitle,
      ProductsCollectionsData: [],
      CollectionsProductsData: [],
      addanotherdisplay:
        this.props.defaultSettings.addanotherdisplay || 'block',

      showCollectionDropdown: this.props.defaultSettings
        .showCollectionDropdown || ['none', 'none', 'none', 'none'],
      showProductDropdown: this.props.defaultSettings.showProductDropdown || [
        'none',
        'none',
        'none',
        'none'
      ]
    };
  }

  onCellTitleChange = e => {
    this.setState({ cellTitle: e.target.value });
  };

  onSubCellTitleChange = e => {
    this.setState({ cellSubTitle: e.target.value });
  };

  onCellTitleStyleChange = e => {
    this.setState({ cellTitleStyle: e });
    if (e === 'Hide') {
      this.setState({ HideTitleSection: 'none' });
    } else {
      this.setState({ HideTitleSection: 'block' });
    }
  };

  onSubTitleStyleChange = e => {
    this.setState({ Subtitle: e });
    if (e === 'Hide') {
      this.setState({ ShowHideSubTitle: 'none' });
    } else {
      this.setState({ ShowHideSubTitle: 'block' });
    }
  };

  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  };

  onApplySetting = e => {
    e.preventDefault();
    const allSettings = {
      cellStyle: this.state.cellStyle,
      cellTitleStyle: this.state.cellTitleStyle,
      subTitleStyle: this.state.subTitleStyle,
      cellTitle: this.state.cellTitle,
      cellSubTitle: this.state.cellSubTitle,
      cellTitleColor: this.state.cellTitleColor,
      cellSubTitleColor: this.state.cellSubTitleColor,
      productTitleColor: this.state.productTitleColor,
      priceColor: this.state.priceColor,
      imageCellSubTitleColor: this.state.imageCellSubTitleColor,
      cellBGColor: this.state.cellBGColor,
      displayCellBGColor: this.state.displayCellBGColor,
      productList: this.state.productList,
      ProductDisplay: this.state.ProductDisplay,
      CollectionDisplay: this.state.CollectionDisplay,
      ShowCollectionProduct: this.state.ShowCollectionProduct,
      ProductTitleValue: this.state.ProductTitleValue,
      DisplayCollectionValue: this.state.DisplayCollectionValue,
      CellVertical: this.state.CellVertical,
      Cellhorizontal: this.state.Cellhorizontal,
      HideTitleSection: this.state.HideTitleSection,
      ShowHideSubTitle: this.state.ShowHideSubTitle,
      isChecked: this.state.isChecked,
      itemId: this.props.itemId,
      ProductsCollections: this.state.ProductsCollections,
      selectedCollectionProducts: this.state.selectedCollectionProducts,
      counterOfPicture: 2,
      leftcellContents: this.state.leftcellContents,
      leftcellContentsType: this.state.leftcellContentsType,
      DefaultWidth: this.state.DefaultWidth,
      Subtitle: this.state.Subtitle,
      addanotherdisplay: this.state.addanotherdisplay,
      showCollectionDropdown: this.state.showCollectionDropdown,
      showProductDropdown: this.state.showProductDropdown
    };

    this.props.onApply(allSettings);
    this.props.onCloseModal(this.props.modalId);
  };

  applyAppliedSetting = defaultSettings => {};

  onCellStyleChange = e => {
    this.setState({ leftcellContentsType: e });
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

  onImageCellSubTitleColorClick = () => {
    this.setState({ displayImageCellSubTitleColor: true });
  };

  onImageCellSubTitleColorClose = () => {
    this.setState({ displayImageCellSubTitleColor: false });
  };

  onImageCellSubTitleColorClickComplete = color => {
    this.setState({ imageCellSubTitleColor: color.hex });
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

  onProductTitleColorClick = () => {
    this.setState({ displayProductTitleColor: true });
  };

  onProductTitleColorClose = () => {
    this.setState({ displayProductTitleColor: false });
  };

  onProductTitleColorClickComplete = color => {
    this.setState({ productTitleColor: color.hex });
  };

  onCellSubTitleColorClick = () => {
    this.setState({ displayCellSubTitleColor: true });
  };

  onCellSubTitleColorClose = () => {
    this.setState({ displayCellSubTitleColor: false });
  };

  onCellSubTitleColorClickComplete = color => {
    this.setState({ cellSubTitleColor: color.hex });
  };

  onCellTitleColorClick = () => {
    this.setState({ displayCellTitleColor: true });
  };

  onCellTitleColorClose = () => {
    this.setState({ displayCellTitleColor: false });
  };

  onCellTitleColorClickComplete = color => {
    this.setState({ cellTitleColor: color.hex });
  };

  RemoveNewAddedDiv = index => {
    if (this.state.cellContents.length > 1) {
      this.setState({
        cellContents: this.state.cellContents.filter((_, i) => i !== index)
      });
    }
    if (this.state.leftcellContents.length > 4) {
      this.setState({
        leftcellContents: this.state.leftcellContents.filter(
          (_, i) => i !== index
        )
      });
    }
    if (this.state.cellContents.length <= 20) {
      this.setState({ addanotherdisplay: 'block' });
    }
  };

  setProductsForCollection = (item2, index2, item, index) => {
    const newleftcellContents = [...this.state.leftcellContents];
    const cellContentsItem = [];
    item2.titleValue = item.title;
    item2.CollectionDisplay = item.CollectionDisplay;
    item2.ProductDisplay = item.ProductDisplay;
    item2.ShowCollectionProduct = item.ShowCollectionProduct;
    item2.DisplayCollectionValue = 'none';
    item2.pictureValue = item.pictureValue;
    item2.selectedid = item.id;
    item2.titleValue = item.title;
    item2.showPrice = item.showPrice;
    item2.collectionname = item.title;
    item2.productname = '';
    newleftcellContents[index] = item2;

    this.setState({ leftcellContents: newleftcellContents });
    const showCollectionDropdown = [...this.state.showCollectionDropdown];
    showCollectionDropdown[index] = 'none';
    this.setState({ showCollectionDropdown });
  };

  handleChange(item, index, e) {
    const newCellContents = [...this.state.cellContents];
    const cellItem = this.state.cellContents[index];
    cellItem.showPrice = !cellItem.showPrice; // e.target.checked;
    newCellContents[index] = cellItem;
    this.setState({ cellContents: newCellContents });

    const newleftcellContents = [...this.state.leftcellContents];
    const newcellItem = this.state.leftcellContents[index];
    newcellItem.showPrice = e.target.checked; // (newcellItem.settings.showPrice) ? false : true;
    newleftcellContents[index] = newcellItem;
    this.setState({ leftcellContents: newleftcellContents });
  }

  SearchProduct(e) {
    const searchText = e.target.value;
    const CollectionsProducts = this.state.CollectionsProducts;
    const updatedCollectionsProducts = CollectionsProducts.filter(function(
      item
    ) {
      return (
        item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ CollectionsProducts: updatedCollectionsProducts });
  }

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

  GetProductcollection = (item, index, e) => {
    const newCellContents = [...this.state.cellContents];
    const cellItem = this.state.cellContents[index];

    const newLeftCellContents = [...this.state.leftcellContents];
    const leftcellItem = this.state.leftcellContents[index];

    leftcellItem.name = '';
    item.collectionname = '';
    item.productname = '';

    leftcellItem.pictureValue = e.target.value;
    // leftcellItem.name = e.target.value;
    leftcellItem.DisplayCollectionValue = 'none';

    if (e.target.value === 'default') {
      leftcellItem.ProductDisplay = 'none';
      leftcellItem.CollectionDisplay = 'none';
      leftcellItem.ShowCollectionProduct = 'none';
    } else if (e.target.value === 'collection') {
      leftcellItem.ProductDisplay = 'none';
      leftcellItem.CollectionDisplay = 'block';
      leftcellItem.ShowCollectionProduct = 'block';
    } else if (e.target.value === 'product') {
      leftcellItem.ProductDisplay = 'block';
      leftcellItem.CollectionDisplay = 'none';
      leftcellItem.ShowCollectionProduct = 'block';
    }
    newCellContents[index] = cellItem;
    newLeftCellContents[index] = leftcellItem;

    this.setState({ cellContents: newCellContents });
    this.setState({ leftcellContents: newLeftCellContents });
  };

  ProductTitle = (item, index, e) => {
    const newLeftCellContents = [...this.state.leftcellContents];
    const cellItem = this.state.leftcellContents[index];

    const leftcellItem = this.state.leftcellContents[index];

    leftcellItem.name = e.target.value;
    newLeftCellContents[index] = cellItem;
    this.setState({ leftcellContents: newLeftCellContents });
  };

  DisplayCollection = (item, index, e) => {
    const showCollectionDropdown = [...this.state.showCollectionDropdown];
    showCollectionDropdown[index] =
      showCollectionDropdown[index] === 'none' ? 'block' : 'none';
    this.setState({ showCollectionDropdown });
  };

  DisplayProduct = (item, index, e) => {
    const showProductDropdown = [...this.state.showProductDropdown];

    showProductDropdown[index] =
      showProductDropdown[index] === 'none' ? 'block' : 'none';

    this.setState({ showProductDropdown });
  };

  getCellContents = () => {
    const newLeftcellContents = [...this.state.leftcellContents];
    const rLength = this.state.cellContents.length;
    const lLenth = newLeftcellContents.length;
    if (rLength >= 19) {
      this.setState({ addanotherdisplay: 'none' });
    }

    if (rLength >= lLenth) {
      newLeftcellContents[lLenth] =
        LeftProductsCollectionsCellsSettings.collections[0];
      this.setState({ leftcellContents: newLeftcellContents });
    }

    if (rLength >= 4) {
      this.setState({ DefaultWidth: this.state.DefaultWidth + 130 });
    }

    const cellContents = [...this.state.cellContents];
    cellContents.push(ProductsCollectionsCellsSettings[0]);
    this.setState({ cellContents });

    const showProductDropdown = [...this.state.showProductDropdown];
    showProductDropdown.push('none');
    this.setState({ showProductDropdown });

    const showCollectionDropdown = [...this.state.showCollectionDropdown];
    showCollectionDropdown.push('none');
    this.setState({ showCollectionDropdown });
  };

  setCollectionForProduct = (item2, index2, item, index) => {
    const newleftcellContents = [...this.state.leftcellContents];
    let cellContentsItem = {};

    item2.CollectionDisplay = item.CollectionDisplay;
    item2.ProductDisplay = item.ProductDisplay;
    item2.ShowCollectionProduct = item.ShowCollectionProduct;
    item2.pictureValue = item.pictureValue;
    item2.showPrice = item.showPrice;
    item2.DisplayProductValue = 'none';
    item2.titleValue = item.title;
    item2.selectedproductid = item.productId;
    item2.collectionname = '';
    item2.productname = item.title;

    cellContentsItem = item2;
    newleftcellContents[index] = item2;

    this.setState({ leftcellContents: newleftcellContents });

    const showProductDropdown = [...this.state.showProductDropdown];
    showProductDropdown[index] = 'none';
    this.setState({ showProductDropdown });
  };

  componentDidMount() {
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
    const FullPxWidth = `${this.state.DefaultWidth}px`;
    return (
      <div className="row">
        <div className="col-lg-12 Search-form-settings">
          <div className="col-lg-4 col-sm-4 setting_left_col setting_comman_col positionAbsolute">
            <div
              className="HoverEffectDragDrop"
              id="FifthDropContainer"
              style={{ backgroundColor: this.state.cellBGColor }}
            >
              <div
                className="FifthDropGridContainer"
                style={{ width: '260px' }}
              >
                <div
                  className={
                    this.state.leftcellContentsType === 'Horizontal'
                      ? 'productTitleFixed'
                      : ''
                  }
                  style={{ display: this.state.HideTitleSection }}
                >
                  <div
                    className="FifthDropGridTopTitle"
                    style={{
                      textAlign: this.state.cellTitleStyle,
                      color: this.state.cellTitleColor
                    }}
                  >
                    {this.state.cellTitle}
                  </div>
                  <div
                    className="FifthDropGridSubTitle"
                    style={{
                      textAlign: this.state.cellTitleStyle,
                      color: this.state.cellSubTitleColor,
                      display: this.state.ShowHideSubTitle
                    }}
                  >
                    {this.state.cellSubTitle}
                  </div>
                </div>
                <div
                  className={
                    this.state.leftcellContentsType === 'Horizontal'
                      ? 'productListoverflow'
                      : 'verticalFixed'
                  }
                  style={{
                    width:
                      this.state.leftcellContentsType === 'Horizontal'
                        ? FullPxWidth
                        : ''
                  }}
                >
                  {this.state.leftcellContents.map((item, index) => {
                    return (
                      <div
                        className={
                          this.state.leftcellContentsType === 'Horizontal'
                            ? 'productBox'
                            : ''
                        }
                        key={index}
                      >
                        <div
                          style={{
                            display:
                              this.state.leftcellContentsType === 'Vertical'
                                ? 'block'
                                : 'none'
                          }}
                        >
                          <div className="FifthDropGridLeftContainer">
                            <div className="FifthDropGridTopContainer">
                              {item.imageUrl && (
                                <div
                                  className="FifthDropGridphoto dynamic_product_image"
                                  style={{ width: '110px', marginLeft: '0' }}
                                >
                                  <img
                                    src={item.imageUrl}
                                    style={{
                                      border: `1px solid ${
                                        this.state.imageCellSubTitleColor
                                      }`
                                    }}
                                  />
                                </div>
                              )}
                              {item.imageUrl === '' && (
                                <div
                                  className="FifthDropGridphoto dynamic_product_image"
                                  style={{
                                    border: `1px solid ${
                                      this.state.imageCellSubTitleColor
                                    }`,
                                    width: '110px',
                                    marginLeft: '0'
                                  }}
                                >
                                  <i className="pe-7s-photo" />
                                </div>
                              )}
                              {item.imageUrl === null && (
                                <div
                                  className="FifthDropGridphoto dynamic_product_image"
                                  style={{
                                    border: `1px solid ${
                                      this.state.imageCellSubTitleColor
                                    }`,
                                    width: '110px',
                                    marginLeft: '0'
                                  }}
                                >
                                  <span style={{ fontSize: '17px' }}>
                                    No Image
                                  </span>
                                </div>
                              )}

                              {!item.title && !item.name && (
                                <div
                                  className="FifthDropGridTitle"
                                  id="FifthDropGridTitle1"
                                  style={{
                                    color: this.state.productTitleColor,
                                    display:
                                      !item.title && !item.name
                                        ? 'block'
                                        : 'none'
                                  }}
                                >
                                  PRODUCT
                                </div>
                              )}
                              {item.name && (
                                <div
                                  className="FifthDropGridTitle nmn"
                                  id="FifthDropGridTitle1"
                                  style={{
                                    color: this.state.productTitleColor,
                                    display: item.name ? 'block' : 'none'
                                  }}
                                >
                                  {item.name}{' '}
                                </div>
                              )}
                              {!item.name && (
                                <div
                                  className="FifthDropGridTitle ti"
                                  id="FifthDropGridTitle1"
                                  style={{
                                    color: this.state.productTitleColor,
                                    display:
                                      !item.name && item.title !== ''
                                        ? 'block'
                                        : 'none'
                                  }}
                                >
                                  {item.title}{' '}
                                </div>
                              )}
                              <div
                                className="FifthDropGridPrice"
                                id="FifthDropGridPrice1"
                                style={{
                                  color: this.state.priceColor,
                                  display: item.showPrice ? 'block' : 'none'
                                }}
                              >
                                {item.price || ''}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display:
                              this.state.leftcellContentsType === 'Horizontal'
                                ? 'block'
                                : 'none',
                            overflowX: 'scroll',
                            height: 'auto',
                            width: '100%'
                          }}
                        >
                          <div>
                            <div className="horizontal_collection">
                              <div
                                className="FifthDropGridphoto"
                                style={{ width: '110px', marginLeft: '0' }}
                              >
                                <img
                                  src={item.imageUrl}
                                  style={{
                                    border: `1px solid ${
                                      this.state.imageCellSubTitleColor
                                    }`
                                  }}
                                />
                              </div>
                              <div
                                className="FifthDropGridTitle"
                                id="FifthDropGridTitle1"
                                style={{ color: this.state.productTitleColor }}
                              >
                                {item.title}
                              </div>
                              <div
                                className="FifthDropGridPrice"
                                id="FifthDropGridPrice1"
                                style={{
                                  color: this.state.priceColor,
                                  display: item.showPrice ? 'block' : 'none'
                                }}
                              >
                                {item.price || ''}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-sm-8 setting_right_col setting_comman_col floatRight">
            <div className="setting_right_main">
              <div className="setting_title single_product_setting_modal_title">
                <h2>QUAD CELL</h2>
                <h6>SHOWS PRODUCTS/COLLECTIONS (MIN 4, MAX 20)</h6>
              </div>
              <div className="fixSettingScrollSection">
                {this.state.leftcellContents.map((item, index) => {
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
                                this.DisplayCollection(item, index, e);
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
                              <div
                                className="PricesettingsSwitchContainer"
                                id={
                                  item.showPrice === true ? 'active_switch' : ''
                                }
                              >
                                <Switch
                                  checked={item.showPrice}
                                  onChange={e => {
                                    this.handleChange(item, index, e);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        {index >= 4 && (
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
                  <div className="CollectionMainEditIcon">
                    <div className="CollectionSettingIcon">
                      <label>CELL STYLE </label>
                    </div>
                    <div
                      className="col-sm-12 CollectionSettingOption"
                      style={{ padding: '0px' }}
                    >
                      <DropdownList
                        data={['Vertical', 'Horizontal']}
                        onChange={this.onCellStyleChange}
                        value={this.state.leftcellContentsType}
                        textField="name"
                      />
                    </div>
                  </div>
                  <div className="CollectionMainEditIcon">
                    <div className="CollectionSettingIcon">
                      <label>CELL TITLE STYLE</label>
                    </div>
                    <div
                      className="col-sm-12 CollectionSettingOption"
                      style={{ padding: '0px' }}
                    >
                      <DropdownList
                        data={['Left', 'Center', 'Hide']}
                        onChange={this.onCellTitleStyleChange}
                        value={this.state.cellTitleStyle}
                        textField="name"
                      />
                    </div>
                  </div>
                  <div className="CollectionMainEditIcon">
                    <div className="CollectionSettingIcon">
                      <label>SUB TITLE STYLE</label>
                    </div>
                    <div
                      className="col-sm-12 CollectionSettingOption"
                      style={{ padding: '0px' }}
                    >
                      <DropdownList
                        data={['Show', 'Hide']}
                        onChange={this.onSubTitleStyleChange}
                        value={this.state.Subtitle}
                        textField="name"
                      />
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>CELL TITLE</label>
                    </div>
                    <div
                      className="col-sm-12 CollectionSettingOption"
                      style={{ padding: '0px' }}
                    >
                      <input
                        type="text"
                        name="cellTitle"
                        defaultValue="Example: Our Best Products"
                        value={this.state.cellTitle}
                        onChange={this.onCellTitleChange}
                      />
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>CELL SUBTITLE</label>
                    </div>
                    <div
                      className="col-sm-12 CollectionSettingOption"
                      style={{ padding: '0px' }}
                    >
                      <input
                        type="text"
                        name="cellSubTitle"
                        defaultValue="Example: On Sale Until Monday"
                        value={this.state.cellSubTitle}
                        onChange={this.onSubCellTitleChange}
                      />
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>CELL TITLE COLOR</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.cellTitleColor}
                        defaultValue={this.state.cellTitleColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onCellTitleColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.cellTitleColor
                          }}
                          onClick={this.onCellTitleColorClick}
                        />
                      </div>
                      {this.state.displayCellTitleColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onCellTitleColorClose}
                          />
                          <ChromePicker
                            color={this.state.cellTitleColor}
                            onChange={this.onCellTitleColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>CELL SUBTITLE COLOR</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.cellSubTitleColor}
                        defaultValue={this.state.cellSubTitleColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onCellSubTitleColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.cellSubTitleColor
                          }}
                          onClick={this.onCellSubTitleColorClick}
                        />
                      </div>
                      {this.state.displayCellSubTitleColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onCellSubTitleColorClose}
                          />
                          <ChromePicker
                            color={this.state.cellSubTitleColor}
                            onChange={this.onCellSubTitleColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>PRODUCT TITLE COLOR</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.productTitleColor}
                        defaultValue={this.state.productTitleColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onProductTitleColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.productTitleColor
                          }}
                          onClick={this.onProductTitleColorClick}
                        />
                      </div>
                      {this.state.displayProductTitleColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onProductTitleColorClose}
                          />
                          <ChromePicker
                            color={this.state.productTitleColor}
                            onChange={this.onProductTitleColorClickComplete}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="CollectionSettingIcon">
                      <label>PRICE COLOR</label>
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
                      <label>IMAGE BORDER COLOR</label>
                    </div>
                    <div className="CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.state.imageCellSubTitleColor}
                        defaultValue={this.state.imageCellSubTitleColor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.onImageCellSubTitleColorClick}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.state.imageCellSubTitleColor
                          }}
                          onClick={this.onImageCellSubTitleColorClick}
                        />
                      </div>
                      {this.state.displayImageCellSubTitleColor ? (
                        <div style={this.popover}>
                          <div
                            style={this.cover}
                            onClick={this.onImageCellSubTitleColorClose}
                          />
                          <ChromePicker
                            color={this.state.imageCellSubTitleColor}
                            onChange={
                              this.onImageCellSubTitleColorClickComplete
                            }
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
                </div>
              </div>

              {/* <div className="setting_bottom">
                <div className="CollectionEditCancelButton CollectionEditButton">
                {/* } <a href="javascript:void(0);" onClick={this.onCloseModal}>
                    <span>CANCEL</span>
                      </a>
                <Button className="mr-2 btn btn-link btn-sm" onClick={this.onCloseModal}>
                  CANCEL
                </Button>
                </div>
                <div className="CollectionEditapplyButton CollectionEditButton">
                 {/*}  <a href="javascript:void(0);" >
                    <span>APPLY</span>
                  </a>
                  <Button className="btn btn-success btn-lg" onClick={this.onApplySetting}>
                    APPLY
                  </Button>
                </div>
              </div> */}

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
export default ModalCollectionWithTitleContent;

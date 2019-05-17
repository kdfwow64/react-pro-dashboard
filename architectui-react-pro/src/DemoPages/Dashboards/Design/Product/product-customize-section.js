// tslint:disable
// @ts-nocheck
import axios from 'axios';
import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ChromePicker } from 'react-color';
import { DropdownList } from 'react-widgets';
import ProductAddCart from './product-details-elements/product-add-cart';
import ProductDescription from './product-details-elements/product-description';
import ProductExternalLink from './product-details-elements/product-external-link';
import ProductOptionAvailable from './product-details-elements/product-option-available';
import ProductPicture from './product-details-elements/product-pictures';
import ProducttitleAndPrice from './product-details-elements/product-title-price';
import { API_ROOT } from '../../../../utilities/api-config';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

const CollectionsProducts = {
  collections: [
    {
      id: '123',
      content: 'Default',
      settings: {
        title: '',
        image:
          'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-593439598.jpg',
        price: '6.16',
        name:
          'Female Fashion Frame Cat Eyes Shades Sunglasses Integrated UV Glasses',
        showPrice: true,
        collection: 'Under $50'
      }
    },
    {
      id: '234',
      content: 'Default',
      settings: {
        title: 'All',
        image:
          'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-593463524.jpg',
        price: '7.16',
        name:
          'Men Women Square Vintage Mirrored Sunglasses Eyewear Outdoor Sports Glasse',
        showPrice: true,
        collection: 'All'
      }
    },
    {
      id: '345',
      content: 'Default',
      settings: {
        title: 'All',
        image:
          'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-340838051.jpg',
        price: '7.16',
        name:
          'Men Women Square Vintage Mirrored Sunglasses Eyewear Outdoor Sports Glasse',
        showPrice: true,
        collection: 'Under $50'
      }
    }
  ],
  SelectedCollectionId: '111'
};

class ProductcustomizePage extends React.Component {
  constructor(props) {
    super(props);
    this.DisplayProductResult = this.DisplayProductResult.bind(this);
    this.navbghandleClose = this.navbghandleClose.bind(this);
    this.navbghandleChange = this.navbghandleChange.bind(this);
    this.CollectionMainSectionEditOption = this.CollectionMainSectionEditOption.bind(
      this
    );
    this.CollectionCloseEditSection = this.CollectionCloseEditSection.bind(
      this
    );
    this.navtitlehandleClose = this.navtitlehandleClose.bind(this);
    this.navtitlehandleChange = this.navtitlehandleChange.bind(this);
    this.naviconhandleChange = this.naviconhandleChange.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    // this.setCollectionForProduct = this.setCollectionForProduct.bind(this);
    this.OnCollectionEditClick = this.OnCollectionEditClick.bind(this);
    this.singleProductClick = this.singleProductClick.bind(this);
    this.DropDownGetIconProductNavCallback = this.DropDownGetIconProductNavCallback.bind(
      this
    );

    this.state = {
      DisplayProduct: 'none',
      CollectionMainSectionEditOptionValue: 'none',
      navbgcolor: this.props.navbgcolorValue,
      ShowHideGridListView: 'block',
      navtitledisplayColorPicker: false,
      navtitlecolor: this.props.navtitlecolorValue,
      naviconcolor: this.props.naviconcolorValue,
      navicondisplayColorPicker: false,
      navbgdisplayColorPicker: false,
      OnCollectionEditValue: 'none',
      DropDownGetIconheader: this.props.DropDownGetIconheaderValue,
      productPageElements: this.getProductPageElements(),
      SearchText: [],
      CollectionsProducts: CollectionsProducts.collections,
      productselectedTitle: '',
      CollectionsProductsData: [],
      bannerImageUrl: ''
    };
  }

  getProductPageElements = () => {
    const productPageElements = [
      {
        id: 1,
        elementName: 'ProductPicture'
      },
      {
        id: 2,
        elementName: 'ProducttitleAndPrice'
      },
      {
        id: 3,
        elementName: 'ProductExternalLink'
      },
      {
        id: 4,
        elementName: 'ProductOptionAvailable'
      },
      {
        id: 5,
        elementName: 'ProductDescription'
      },
      {
        id: 6,
        elementName: 'ProductAddCart'
      }
    ];
    return productPageElements;
  };

  navbghandleChange(navbgcolor) {
    this.setState({ navtitlecolor: navbgcolor.hex });
    this.props.navbgcolorClick(navbgcolor);
  }

  SearchProduct(e) {
    const searchText = e.target.value;
    const CollectionsProducts = this.state.CollectionsProducts;
    const updatedCollectionsProducts = CollectionsProducts.filter(function(
      item
    ) {
      return (
        item.settings.name
          .toLowerCase()
          .search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ CollectionsProducts: updatedCollectionsProducts });
  }

  navtitlehandleChange(navtitlecolor) {
    this.setState({ navtitlecolor: navtitlecolor.hex });
    this.props.navtitlecolor(navtitlecolor);
  }

  naviconhandleChange(naviconcolor) {
    this.setState({ naviconcolor: naviconcolor.hex });
    this.props.naviconcolor(naviconcolor);
  }

  naviconhandleClick = () => {
    this.setState({
      navicondisplayColorPicker: !this.navicondisplayColorPicker
    });
  };

  CollectionMainSectionEditOption() {
    this.setState({ CollectionMainSectionEditOptionValue: 'block' });
    this.setState({ ShowHideGridListView: 'none' });
  }

  navtitlehandleClose = () => {
    this.setState({ navtitledisplayColorPicker: false });
  };

  navbghandleClose = () => {
    this.setState({ navbgdisplayColorPicker: false });
  };

  DisplayProductResult() {
    if (this.state.DisplayProduct === 'none') {
      this.setState({ DisplayProduct: 'block' });
    } else {
      this.setState({ DisplayProduct: 'none' });
    }
  }

  CollectionCloseEditSection() {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  }

  OnCollectionEditClick = e => {
    this.setState({ NavTitle: e });
    this.props.navBarTitle(e);
  };

  navbghandleClick = () => {
    this.setState({ navbgdisplayColorPicker: !this.navbgdisplayColorPicker });
  };

  navtitlehandleClick = () => {
    this.setState({
      navtitledisplayColorPicker: !this.navtitledisplayColorPicker
    });
  };

  naviconhandleClose = () => {
    this.setState({ navicondisplayColorPicker: false });
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
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  DropDownGetIconProductNavCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.DropDownGetIconheader(icon);
  };

  ApplyNavSettings = () => {
    const CollectionSettings = {
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      navbgcolor: this.state.navbgcolor,
      NavTitle: this.state.NavTitle
    };
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
    this.props.DisplaySaveBtn(CollectionSettings);
  };

  getProductPageElementContent = e => {
    if (e.elementName === 'ProductPicture') {
      return (
        <ProductPicture
          SilderActiveColor={this.props.SilderActiveColor}
          SilderDotColor={this.props.SilderDotColor}
          SilderBGColor={this.props.SilderBGColor}
          FavButtonPosValue={this.props.FavButtonPosValue}
          FavBtnColor={this.props.FavBtnColor}
          FavButtonBottom={this.props.FavButtonBottom}
          FavButtonTop={this.props.FavButtonTop}
          FavButtonLeft={this.props.FavButtonLeft}
          FavButtonRight={this.props.FavButtonRight}
          DropDownGetIcon={this.props.DropDownGetIcon}
          productImage={this.props.productImageValue}
        />
      );
    }
    if (e.elementName === 'ProducttitleAndPrice') {
      return (
        <ProducttitleAndPrice
          ProductTitleColor={this.props.ProductTitleColor}
          ProductPriceColor={this.props.ProductPriceColor}
          ProductRatingColor={this.props.ProductRatingColor}
          ProducttitlebarBGColor={this.props.ProducttitlebarBGColor}
          MarginLeftTitleSection={this.props.MarginLeftTitleSection}
          productName={this.props.productNameValue}
          FavButtonPosValue={this.props.FavButtonPosValue}
          FavBtnColor={this.props.FavBtnColor}
          DropDownGetIcon={this.props.DropDownGetIcon}
          productRate={this.props.productRateValue}
        />
      );
    }
    if (e.elementName === 'ProductExternalLink') {
      return (
        <ProductExternalLink
          AddLinkSecShow={this.props.AddLinkSecShow}
          ExternalIconColor={this.props.ExternalIconColor}
          ExternalLinkColor={this.props.ExternalLinkColor}
          ExternalBGColor={this.props.ExternalBGColor}
          ExternalIcon={this.props.ExternalIcon}
          ExternalLinkTitle={this.props.ExternalLinkTitle}
        />
      );
    }

    if (e.elementName === 'ProductOptionAvailable') {
      return (
        <ProductOptionAvailable
          ProductCellBGColor={this.props.ProductCellBGColor}
          OptionTitleColor={this.props.OptionTitleColor}
          OptionValueColor={this.props.OptionValueColor}
          OptionIconColor={this.props.OptionIconColor}
        />
      );
    }

    if (e.elementName === 'ProductDescription') {
      return (
        <ProductDescription
          DescTitleText={this.props.DescTitleText}
          DescTitleColor={this.props.DescTitleColor}
          DescHeaderBGColor={this.props.DescHeaderBGColor}
          DescBGColor={this.props.DescBGColor}
          DescTextColor={this.props.DescTextColor}
        />
      );
    }
    if (e.elementName === 'ProductAddCart') {
      return (
        <ProductAddCart
          CartTitleText={this.props.CartTitleText}
          CartTitleColor={this.props.CartTitleColor}
          CartButtonColor={this.props.CartButtonColor}
          CartBGColor={this.props.CartBGColor}
        />
      );
    }
  };

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = this.reorder(
        this.state.productPageElements,
        source.index,
        destination.index
      );
      let state = { items };
      if (source.droppableId === 'droppable') {
        state = { productPageElements: items };
      }
      this.setState(state);
    }
    this.props.DisplaySaveBtn();
  };

  singleProductClick = item => {
    this.setState({ DisplayProduct: 'none' });
    this.props.productselectedTitle(item.title);
    this.props.productImage(item.imageUrl);
    this.props.productName(item.title);
    this.props.productRate(item.price);
  };

  bannerImageUrl = value => {
    this.setState({ bannerImageUrl: value });
    this.props.bannerImageUrlCallBack(value);
  };

  componentDidMount() {
    axios.get(`${API_ROOT}/api/products`).then(res => {
      this.setState({ CollectionsProductsData: res.data });
    });
  }

  render() {
    return (
      <div className="ProductcustomizeMainsection">
        <div className="Productcustomizesection">
          <div className="ProductEffectResultDropDown">
            <input
              type="text"
              value={
                this.props.productselectedTitleValue ||
                'Preview Your Product Page -- Select a Product'
              }
              readOnly
              onClick={this.DisplayProductResult}
              className="ProductDropSearchDown"
            />
            <div className="searchProIcon">
              <i className="lnr-chevron-down" />
            </div>
            <div
              className="ProductResult"
              style={{ display: this.state.DisplayProduct }}
            >
              <div className="mainProductListSearch">
                {this.state.CollectionsProductsData.map((item3, index3) => {
                  return (
                    <div
                      key={item3.id}
                      className="collectionElementProductShowHide productCollection"
                      style={{
                        height: 'auto',
                        width: 'auto',
                        cursor: 'pointer'
                      }}
                      onClick={() => this.singleProductClick(item3)}
                    >
                      <img
                        style={{ width: '50px', height: '50px' }}
                        src={item3.imageUrl}
                        alt={item3.title}
                      />
                      <span style={{ lineHeight: 'unset' }}>{item3.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="ProductRightBody">
            <div
              id="CollectionEffectNavBarContainer"
              style={{
                backgroundColor: this.props.navbgcolorValue || '#0E7C95'
              }}
            >
              <div
                id="CollectionEffectnavBars"
                style={{ color: this.state.naviconcolor }}
              >
                <i className={this.props.DropDownGetIconheaderValue} />
              </div>
              <div
                id="CollectionEffectMyStoreTitle"
                style={{ color: this.props.navtitlecolorValue || '#fff' }}
              >
                {this.props.navBarTitleValue === 'Image' && (
                  <img
                    src={this.props.bannerImageUrl}
                    style={{ maxHeight: '30px', maxWidth: '90px' }}
                  />
                )}
                {this.props.navBarTitleValue === 'Text' && 'PRODUCT'}
                {!this.props.navBarTitleValue && 'PRODUCT'}
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

            <div id="CollectionEffectBody">
              <div
                className="CollectionMainEditOptionContainer"
                style={{
                  display: this.state.CollectionMainSectionEditOptionValue
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
                      <label>NAVIGATION BAR TITLE </label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditTitleView">
                      <DropdownList
                        data={['Image', 'Text']}
                        onChange={this.OnCollectionEditClick}
                        value={this.props.navBarTitleValue || 'Text'}
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
                        defaultValue={this.navbgcolor}
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

                  {/* <div className="CollectionMainEditIcon">
                    <div className="col-sm-12 CollectionSettingIcon">
                      <label>NAV BAR ICON (Will be applied globally)</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditBGIconView">
                      <IconList
                        DropDownGetIconProductNavCallback={
                          this.DropDownGetIconProductNavCallback
                        }
                        IconClassName={this.props.DropDownGetIconheaderValue}
                      />
                    </div>
                  </div> 

                  <div className="CollectionMainEditIconColor">
                    <div className="col-sm-12 CollectionSettingEditIconColor">
                      <label>NAV BAR ICON COLOR</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconColorView">
                      <input
                        type="text"
                        value={this.props.naviconcolorValue || '#fff'}
                        defaultValue={this.naviconcolor}
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
                        this.props.navBarTitleValue === 'Image'
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
                        value={this.props.navtitlecolorValue || '#fff'}
                        defaultValue={this.navtitlecolor}
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
                        this.props.navBarTitleValue === 'Image'
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
                        acceptedFiles={['image/jpeg', 'image/png']}
                        fileName={this.props.bannerImageUrl}
                        previewImageHeight="100px"
                        previewImageWidth="100px"
                        imageFolder="navTitleImage"
                        onChange={value => this.bannerImageUrl(value)}
                      />
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

              <div style={{ display: this.state.ShowHideGridListView }}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <div
                    className="HomeRightLeftContainer"
                    style={{ height: 'auto' }}
                  >
                    <div className="">
                      <div className="navigationStyle">
                        <Droppable droppableId="droppable">
                          {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
                              {this.state.productPageElements.map(
                                (item, index) => (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        style={{ lineHeight: '100px' }}
                                        className="menu-item menu-item"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        {this.getProductPageElementContent(
                                          item
                                        )}
                                      </div>
                                    )}
                                  </Draggable>
                                )
                              )}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </div>
                    </div>
                  </div>
                </DragDropContext>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductcustomizePage;

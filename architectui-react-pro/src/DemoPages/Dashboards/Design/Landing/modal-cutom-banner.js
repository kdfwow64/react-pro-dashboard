// tslint:disable
// @ts-nocheck
import { faAt, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import InputMask from 'react-input-mask';
import { InputGroup, InputGroupAddon } from 'reactstrap';

var API_ROOT = 'https://thesearchit.com';

class ModalCustomBanner extends React.Component {
  constructor(props) {
    super(props);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.BannerOption = this.BannerOption.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);

    this.state = {
      bannerImageUrl: this.props.defaultSettings.bannerImageUrl || '',
      DisplayCollectionValue: this.props.defaultSettings.DisplayCollectionValue,
      DisplayProductValue: this.props.defaultSettings.DisplayProductValue,
      Bannerselectoption: this.props.defaultSettings.Bannerselectoption,
      BannerUrl: this.props.defaultSettings.BannerUrl,
      BannerPhone: this.props.defaultSettings.BannerPhone,
      BannerEmail: this.props.defaultSettings.BannerEmail,
      //        ProductsCollections: ProductsCollections.collections,
      ProductsCollectionsData:
        this.props.defaultSettings.ProductsCollectionsData || [],
      selectedProductName: this.props.defaultSettings.selectedProductName,
      prodCollectionname: this.props.defaultSettings.prodCollectionname,
      selectedOption: null,
      // CollectionsProducts: CollectionsProducts.collections,
      CollectionsProductsData: [],
      SearchText: [],
      BannerOptionValue: this.props.defaultSettings.BannerOptionValue,
      isLoaded: false,
      handle: this.props.defaultSettings.handle,
      productHandle: this.props.defaultSettings.productHandle,
      productCollectionName: this.props.defaultSettings.productCollectionName,
    };
  }

  componentWillMount() {
    axios
      .get(`${API_ROOT}/api/v2/collection-listings`)
      .then(res => {
        this.setState({ ProductsCollectionsData: res.data });
      });
    axios
      .get(
        `${API_ROOT}/api/products`
      )
      .then(res1 => {
        this.setState({ CollectionsProductsData: res1.data });
        this.setState({ isLoaded: true });
      });
  }

  BannerUrl = e => {
    this.setState({ BannerUrl: e.target.value });
  }
  BannerPhone = e => {
    this.setState({ BannerPhone: e.target.value });
  }
  BannerOption = e => {
    this.setState({ Bannerselectoption: e.target.value });
    this.setState({ BannerOptionValue: e.target.value });
    this.setState({ prodCollectionname: '' });
  }
  BannerEmail = e => {
    this.setState({ BannerEmail: e.target.value });
  }
  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  }
  onApplySetting = e => {
    e.preventDefault();
    const allSettings = {
      bannerImageUrl: this.state.bannerImageUrl,
      DisplayCollectionValue: this.state.DisplayCollectionValue,
      DisplayProductValue: this.state.DisplayProductValue,
      Bannerselectoption: this.state.Bannerselectoption,
      BannerUrl: this.state.BannerUrl,
      BannerPhone: this.state.BannerPhone,
      BannerEmail: this.state.BannerEmail,
      itemId: this.props.itemId,
      selectedProductName: this.state.selectedProductName,
      prodCollectionname: this.state.prodCollectionname,
      BannerOptionValue: this.state.BannerOptionValue,
      handle: this.state.handle,
      productHandle: this.state.productHandle,
      productCollectionName: this.state.productCollectionName,
      // CollectionsProductsData: this.state.CollectionsProductsData,
      // ProductsCollectionsData: this.state.ProductsCollectionsData,
    };

    this.props.onApply(allSettings);
    this.props.onCloseModal(this.props.modalId);
  }
  applyAppliedSetting = defaultSettings => { };

  DisplayCollection = e => {
    if (this.state.DisplayCollectionValue === 'none') {
      this.setState({ DisplayCollectionValue: 'block' });
    } else {
      this.setState({ DisplayCollectionValue: 'none' });
    }
  }
  DisplayProduct = e => {
    if (this.state.DisplayProductValue === 'none') {
      this.setState({ DisplayProductValue: 'block' });
    } else {
      this.setState({ DisplayProductValue: 'none' });
    }
  }

  setProductsForCollection = collectionDetails => {
    this.setState({ selectedCollectionProducts: collectionDetails });
    this.setState({ DisplayCollectionValue: 'none' });
    this.setState({ selectedProductName: collectionDetails.id });
    this.setState({ prodCollectionname: collectionDetails.title });
    this.setState({ handle: collectionDetails.handle });
    this.setState({ productCollectionName: collectionDetails.handle });
  }

  setCollectionForProduct = collectionDetails => {
    // console.log(collectionDetails);
    this.setState({ selectedCollectionProducts: collectionDetails });
    this.setState({ DisplayCollectionValue: 'none' });
    this.setState({ selectedProductName: collectionDetails.id });
    this.setState({ prodCollectionname: collectionDetails.title });
    this.setState({ productHandle: collectionDetails.handle });
    this.setState({ productCollectionName: collectionDetails.handle });
  }

  handleDropdownChange = selectedItems => { };
  SearchProduct(e) {
    const searchText = e.target.value;
    const CollectionsProducts = this.state.CollectionsProductsData;
    const updatedCollectionsProducts = CollectionsProducts.filter(function (item) {
      return (
        item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ CollectionsProductsData: updatedCollectionsProducts });
  }

  render() {
    const { value } = this.state;
    const { selectedOption } = this.state;
    // console.log(this.state.CollectionsProductsData);
    return (
      <div className="row">
        <div className="col-lg-12 Search-form-settings">
          <div className="col-lg-4 col-sm-4 setting_left_col setting_comman_col">
            <div
              className="HoverEffectDragDrop"
              id="SixthDropContainer"
              style={{ height: 'auto', position: 'relative', top: '10em' }}
            >
              <div className="HoverEffectDragDrop" id="FourthDropContainer"
                style={{ paddingTop: this.state.bannerImageUrl === '' ? '20%' : '0' }}
              >
                {this.state.bannerImageUrl === '' ? (" CUSTOM BANNER ") : (<img style={{ maxWidth: '100%', maxHeight: '100%' }} src={this.state.bannerImageUrl} />)}
              </div>

            </div>
          </div>
          <div className="col-lg-8 col-sm-8 setting_right_col setting_comman_col">
            <div className="setting_right_main" style={{ float: 'none' }}>
              <div className="setting_title single_product_setting_modal_title">
                <h2>ATTACH BANNER</h2>
              </div>
              <div className="fixSettingScrollSection">
                <div style={{ overflow: 'hidden' }}>
                  <div className="SingleProductMainEdit">
                    <div className="SingleProductModalTitleContainer">
                      BANNER BACKGROUND
                    </div>
                    <div
                      className="CollectionEffectResultDropDown SingleModalProduct"
                      style={{ marginTop: 'unset', width: '150px' }}
                    >
                      {/* <FileUploader
                        label="Choose file"
                        acceptedFiles={[ 'image/jpeg', 'image/png' ]}
                        fileName={this.state.bannerImageUrl}
                        previewImageHeight={'100px'}
                        previewImageWidth={'100px'}
                        imageFolder={"homepagev2"}
                        onChange={value => this.setState({ bannerImageUrl: value })}
    />*/}
                      <input type="file"></input>
                    </div>
                  </div>
                  <div className="SingleProductMainEdit">
                    <div className="SingleProductModalTitleContainer">
                      ACTION
                    </div>
                    <div className="CollectionEffectResultDropDown SingleModalProduct">
                      <select
                        id="BannerOption"
                        onChange={this.BannerOption}
                        value={this.state.BannerOptionValue}
                      >
                        <option value="none">
                          Choose Collection or Product
                        </option>
                        <option value="Collection">Goto Collection</option>
                        <option value="Product">Goto Product</option>
                        <option value="Webpage">Visit Webpage</option>
                        <option value="Phone">Call a Number</option>
                        <option value="Emailaddress">Send Email</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '25px',
                    backgroundColor: 'rgb(242, 242, 242)'
                  }}
                >
                  <div
                    className="CollectionProductBg"
                    style={{
                      display:
                        this.state.Bannerselectoption === 'Collection'
                          ? 'block'
                          : 'none',
                      padding: '15px'
                    }}
                  >
                    <div className="SingleProductModalTitleContainer">
                      SELECT COLLECTION
                    </div>
                    <div
                      className="CollectionEffectResultDropDown SingleModalProduct"
                      style={{ position: 'relative' }}
                    >
                      <input
                        type="text"
                        value={
                          this.state.prodCollectionname || 'SELECT COLLECTION'
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
                          (item, index) => {
                            return (
                              <div
                                key={item.id}
                                className="collectionElementProductShowHide"
                                id={
                                  this.state.selectedProductName === item.id
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
                                    style={{ width: '50px', height: '50px' }}
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
                  <div
                    className="CollectionProductBg"
                    style={{
                      display:
                        this.state.Bannerselectoption === 'Product'
                          ? 'block'
                          : 'none',
                      padding: '15px'
                    }}
                  >
                    <div className="SingleProductModalTitleContainer">
                      SELECT OR SEARCH FOR PRODUCT
                    </div>
                    <div
                      className="CollectionEffectResultDropDown SingleModalProduct"
                      style={{ position: 'relative' }}
                    >
                      <input
                        type="text"
                        value={
                          this.state.prodCollectionname || 'SELECT A PRODUCT'
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
                        <input
                          type="text"
                          onKeyUp={this.SearchProduct}
                          defaultValue=""
                          value={this.state.searchText}
                        />

                        {!this.state.isLoaded && (
                          <div className="">
                            {' '}
                            {/* <Loader loaded={this.state.isLoaded} />{' '} */}
                          </div>
                        )}
                        {this.state.isLoaded &&
                          this.state.CollectionsProductsData &&
                          this.state.CollectionsProductsData.map(
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
                                    this.setCollectionForProduct(item3);
                                  }}
                                  id={
                                    this.state.selectedProductName == item3.id
                                      ? 'Active'
                                      : ''
                                  }
                                >
                                  {item3.imageUrl && (
                                    <img
                                      style={{ width: '50px', height: '50px' }}
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
                  <div
                    className="CollectionProductBg"
                    style={{
                      display:
                        this.state.Bannerselectoption === 'Webpage'
                          ? 'block'
                          : 'none',
                      padding: '15px'
                    }}
                  >
                    <div className="SingleProductModalTitleContainer">
                      ENTER URL
                    </div>
                    <div className="SingleModalProduct">
                      {/*} <input
                        type="text"
                        value={this.state.BannerUrl}
                        onChange={this.BannerUrl.bind(this)}
                  />*/}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <div className="input-group-text">
                            <FontAwesomeIcon icon={faLink} />
                          </div>
                        </InputGroupAddon>
                        <InputMask className="form-control"
                          value={this.state.BannerEmail}
                          onChange={this.BannerEmail.bind(this)} />
                      </InputGroup>
                    </div>
                  </div>
                  <div
                    className="CollectionProductBg"
                    style={{
                      display:
                        this.state.Bannerselectoption === 'Phone'
                          ? 'block'
                          : 'none',
                      padding: '15px'
                    }}
                  >
                    <div className="SingleProductModalTitleContainer">
                      ENTER PHONE NUMBER
                    </div>
                    <div className="SingleModalProduct">
                      {/*<input
                        type="text"
                        value={this.state.BannerPhone}
                        onChange={this.BannerPhone.bind(this)}
                      />*/}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <div className="input-group-text">
                            <FontAwesomeIcon icon={faPhone} />
                          </div>
                        </InputGroupAddon>
                        <InputMask className="form-control"
                          value={this.state.BannerPhone}
                          onChange={this.BannerPhone.bind(this)} />
                      </InputGroup>
                    </div>
                  </div>
                  <div
                    className="CollectionProductBg"
                    style={{
                      display:
                        this.state.Bannerselectoption === 'Emailaddress'
                          ? 'block'
                          : 'none',
                      padding: '15px'
                    }}
                  >
                    <div className="SingleProductModalTitleContainer">
                      ENTER EMAIL ADDRESS
                    </div>
                    <div className="SingleModalProduct">
                      {/*} <input
                        type="text"
                        value={this.state.BannerEmail}
                        onChange={this.BannerEmail.bind(this)}
                  />*/}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <div className="input-group-text">
                            <FontAwesomeIcon icon={faAt} />
                          </div>
                        </InputGroupAddon>
                        <InputMask className="form-control"
                          value={this.state.BannerEmail}
                          onChange={this.BannerEmail.bind(this)} />
                      </InputGroup>
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
export default ModalCustomBanner;
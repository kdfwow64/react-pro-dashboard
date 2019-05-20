// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React from 'react';
import { ChromePicker } from 'react-color';
import { Button, CardFooter } from 'reactstrap';
import { API_ROOT } from '../../../../utilities/api-config';
import IconList from '../icon-list';

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

class ModalBrowseProductCollections extends React.Component {
  constructor(props) {
    super(props);

    this.onIconColorClick = this.onIconColorClick.bind(this);
    this.onIconColorClose = this.onIconColorClose.bind(this);
    this.onIconColorClickComplete = this.onIconColorClickComplete.bind(this);

    this.onTitleColorClick = this.onTitleColorClick.bind(this);
    this.onTitleColorClose = this.onTitleColorClose.bind(this);
    this.onTitleColorClickComplete = this.onTitleColorClickComplete.bind(this);

    this.onFooterBGColorClick = this.onFooterBGColorClick.bind(this);
    this.onFooterBGColorClose = this.onFooterBGColorClose.bind(this);
    this.onFooterBGColorClickComplete = this.onFooterBGColorClickComplete.bind(
      this
    );

    this.onImageSpacingColorClick = this.onImageSpacingColorClick.bind(this);
    this.onImageSpacingColorClose = this.onImageSpacingColorClose.bind(this);
    this.onImageSpacingColorClickComplete = this.onImageSpacingColorClickComplete.bind(
      this
    );
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onApplySetting = this.onApplySetting.bind(this);
    this.state = {
      CollectionsProductsData: [],
      CollectionsProductsDataVal: getSelectedCollectionProducts(),
      iconColor: this.props.defaultSettings.iconColor,
      displayIconColor: false,
      title: this.props.defaultSettings.title,
      titleColor: this.props.defaultSettings.titleColor,
      displayTitleColor: false,
      footerBGColor: this.props.defaultSettings.footerBGColor,
      displayFooterBGColor: false,
      imageSpacingColor: this.props.defaultSettings.imageSpacingColor,
      displayImageSpacingColor: false,
      DropDownGetIconheader: this.props.defaultSettings.DropDownGetIconheader,
      DisplayCollectionValue: 'none',
      selectedProductName: this.props.defaultSettings.selectedProductName,
      prodCollectionname: this.props.defaultSettings.prodCollectionname,
      ProductsCollectionsData: [],

      isLoaded: false,
      collectionType: this.props.defaultSettings.collectionType || '',
      handle: this.props.defaultSettings.handle || ''
    };
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  };

  onApplySetting = e => {
    e.preventDefault();
    const allSettings = {
      iconColor: this.state.iconColor,
      title: this.state.title,
      titleColor: this.state.titleColor,
      footerBGColor: this.state.footerBGColor,
      imageSpacingColor: this.state.imageSpacingColor,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      itemId: this.props.itemId,
      counterOfPicture: 2,
      cellContents: this.state.cellContents,
      leftcellContents: this.state.leftcellContents,
      leftcellContentsType: this.state.leftcellContentsType,
      CollectionsProducts: this.state.CollectionsProducts,
      selectedProductName: this.state.selectedProductName,
      prodCollectionname: this.state.prodCollectionname,
      collectionType: this.state.collectionType,
      handle: this.state.handle
    };
    this.props.onApply(allSettings);
    this.props.onCloseModal(this.props.modalId);
  };

  applyAppliedSetting = defaultSettings => {};

  DisplayCollection = () => {
    if (this.state.DisplayCollectionValue === 'none') {
      this.setState({ DisplayCollectionValue: 'block' });
    } else {
      this.setState({ DisplayCollectionValue: 'none' });
    }
  };

  onIconColorClick = () => {
    this.setState({ displayIconColor: true });
  };

  onIconColorClose = () => {
    this.setState({ displayIconColor: false });
  };

  onIconColorClickComplete = color => {
    this.setState({ iconColor: color.hex });
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

  onFooterBGColorClick = () => {
    this.setState({ displayFooterBGColor: true });
  };

  onFooterBGColorClose = () => {
    this.setState({ displayFooterBGColor: false });
  };

  onFooterBGColorClickComplete = color => {
    this.setState({ footerBGColor: color.hex });
  };

  onImageSpacingColorClick = () => {
    this.setState({ displayImageSpacingColor: true });
  };

  onImageSpacingColorClose = () => {
    this.setState({ displayImageSpacingColor: false });
  };

  onImageSpacingColorClickComplete = color => {
    this.setState({ imageSpacingColor: color.hex });
  };

  DropDownGetIconBrowseIconCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
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

  setProductsForCollection = (collectionDetails, index) => {
    axios
      .get(
        `${API_ROOT}/api/v2/collection/products/${
          collectionDetails.collectionType
        }/${collectionDetails.id}`
      )
      .then(res1 => {
        this.setState({ CollectionsProductsData: res1.data.productVMList });

        res1.data && this.setState({ isLoaded: true });
      });
    this.setState({ selectedProductName: collectionDetails.id });
    this.setState({ DisplayCollectionValue: 'none' });
    this.setState({ prodCollectionname: collectionDetails.title });
    this.setState({ collectionType: collectionDetails.collectionType });
    this.setState({ handle: collectionDetails.handle });
  };

  componentWillMount() {
    axios.get(`${API_ROOT}/api/v2/collection-listings`).then(res => {
      this.setState({ ProductsCollectionsData: res.data });
    });
    if (this.state.collectionType && this.state.selectedProductName) {
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${
            this.state.collectionType
          }/${this.state.selectedProductName}`
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
      <div className="row">
        <div className="col-lg-12 Search-form-settings">
          <div className="col-lg-4 col-sm-4 setting_left_col setting_comman_col">
            <div
              className="HoverEffectDragDrop modal_sixthDropContainer"
              id="SixthDropContainer"
              style={{ overflowX: 'scroll' }}
            >
              {this.state.CollectionsProductsData &&
                this.state.CollectionsProductsData.length === 0 &&
                this.state.CollectionsProductsDataVal.map((item, index) => {
                  return (
                    <div key={index} className="browseProductList">
                      <div
                        className="SixthGridContainer"
                        style={{
                          backgroundColor: this.state.imageSpacingColor
                        }}
                      >
                        <div
                          className="SixthGridLeftTopPicture"
                          style={{
                            border: `1px solid ${this.state.imageSpacingColor}`
                          }}
                        >
                          {item.imageUrl && item.imageUrl !== '' && (
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              style={{ width: '70%', height: '100%' }}
                            />
                          )}
                          {item.imageUrl === '' && item.imageUrl === null && (
                            <div />
                          )}
                          {!item.imageUrl && <i className="pe-7s-photo" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              {this.state.CollectionsProductsData &&
                this.state.CollectionsProductsData.length !== 0 &&
                this.state.CollectionsProductsData.map((item, index) => {
                  return (
                    <div key={index} className="browseProductList">
                      <div
                        className="SixthGridContainer"
                        style={{
                          backgroundColor: this.state.imageSpacingColor
                        }}
                      >
                        <div
                          className="SixthGridLeftTopPicture"
                          style={{
                            border: `1px solid ${this.state.imageSpacingColor}`
                          }}
                        >
                          {item.imageUrl && item.imageUrl !== '' && (
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              style={{ width: '100%', height: '105%' }}
                            />
                          )}
                          {item.imageUrl === '' && item.imageUrl === null && (
                            <div />
                          )}
                          {!item.imageUrl && <i className="pe-7s-photo" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="SixthGridHeaderDetails responsiveGridHeader"
            style={{
              color: this.state.titleColor,
              backgroundColor: this.state.footerBGColor,
              width: '219px',
              bottom: '18.4%',
              left: '30px'
            }}
          >
            <span id="SixthGridHeaderDetailsTitle">{this.state.title}</span>
            &nbsp;
            <span id="SixthGridHeaderIcon">
              <i
                style={{ color: this.state.iconColor }}
                className={this.state.DropDownGetIconheader}
              />
            </span>
          </div>

          <div className="col-lg-8 col-sm-8 setting_right_col setting_comman_col">
            <div className="setting_right_main">
              <div className="setting_title single_product_setting_modal_title">
                <h2>QUAD CELL</h2>
                <h6>SHOWS PRODUCTS/COLLECTIONS (MIN 4, MAX 20)</h6>
              </div>

              <div className="fixSettingScrollSection">
                <div className="CollectionProductBg">
                  <div className="SingleProductModalTitleContainer">
                    ASSIGN COLLECTION
                  </div>
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
                      {this.state.ProductsCollectionsData.map((item, index) => {
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
                              this.setProductsForCollection(item, index);
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
                      })}
                    </div>
                  </div>
                </div>

                <div className="SingleProductMainEdit">
                  <div className="CollectionSettingIcon">
                    <label>ICON</label>
                  </div>
                  <div className="col-sm-12 CollectionSettingOption">
                    <IconList
                      DropDownGetIconBrowseIconCallback={
                        this.DropDownGetIconBrowseIconCallback
                      }
                      IconClassName={this.state.DropDownGetIconheader}
                    />
                  </div>
                </div>

                <div className="SingleProductMainEdit">
                  <div className="CollectionSettingIcon">
                    <label>ICON COLOR </label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      // value={this.state.iconColor}
                      defaultValue={this.state.iconColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onIconColorClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.iconColor
                        }}
                        onClick={this.onIconColorClick}
                      />
                    </div>
                    {this.state.displayIconColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onIconColorClose}
                        />
                        <ChromePicker
                          color={this.state.iconColor}
                          onChange={this.onIconColorClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="SingleProductMainEdit">
                  <div className="CollectionSettingIcon">
                    <label>TITLE</label>
                  </div>
                  <div
                    className="col-sm-12 CollectionSettingOption"
                    style={{ padding: '0px' }}
                  >
                    <input
                      type="text"
                      name="title"
                      defaultValue={this.state.title}
                      // value={this.state.title}
                      onChange={this.onTitleChange}
                      style={{ width: '95%' }}
                    />
                  </div>
                </div>

                <div className="SingleProductMainEdit">
                  <div className="CollectionSettingIcon">
                    <label>TITLE COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      // value={this.state.titleColor}
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
                    <label>FOOTER BACKGROUND COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      // value={this.state.footerBGColor}
                      defaultValue={this.state.footerBGColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onFooterBGColorClick}
                      style={{ width: '95%' }}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.footerBGColor
                        }}
                        onClick={this.onFooterBGColorClick}
                      />
                    </div>
                    {this.state.displayFooterBGColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onFooterBGColorClose}
                        />
                        <ChromePicker
                          color={this.state.footerBGColor}
                          onChange={this.onFooterBGColorClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="SingleProductMainEdit">
                  <div className="CollectionSettingIcon">
                    <label>IMAGE SPACING COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      // value={this.state.imageSpacingColor}
                      defaultValue={this.state.imageSpacingColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onImageSpacingColorClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.imageSpacingColor
                        }}
                        onClick={this.onImageSpacingColorClick}
                      />
                    </div>
                    {this.state.displayImageSpacingColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onImageSpacingColorClose}
                        />
                        <ChromePicker
                          color={this.state.imageSpacingColor}
                          onChange={this.onImageSpacingColorClickComplete}
                        />
                      </div>
                    ) : null}
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
export default ModalBrowseProductCollections;

// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React from 'react';
import { API_ROOT } from '../../../../utilities/api-config';

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
    //  if (item.id === ProductsCollections.SelectedCollectionId) {
    products = item.products;
    //  }
  });
  return products;
}

class BrowseCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconColor: this.props.settings.iconColor,
      displayIconColor: false,
      title: this.props.settings.title,
      titleColor: this.props.settings.titleColor,
      displayTitleColor: false,
      footerBGColor:
        this.props.callType !== 'droppable'
          ? this.props.BrowsefooterBGColor
          : this.props.settings.footerBGColor,
      displayFooterBGColor: false,
      imageSpacingColor: this.props.settings.imageSpacingColor,
      displayImageSpacingColor: false,
      DropDownGetIconheader: this.props.settings.DropDownGetIconheader,
      selectedProductName: this.props.settings.selectedProductName,
      collectionType: this.props.settings.collectionType,
      CollectionsProductsData: [],
      CollectionsProductsDataVal: getSelectedCollectionProducts(),
      isLoaded: false
    };
  }

  setAllSettingsOnApply = settings => {
    this.setState(settings);
  };

  componentWillMount() {
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

  render() {
    return (
      <div
        className="HoverEffectDragDrop"
        id="SixthDropContainer"
        style={{ overflowX: 'scroll' }}
      >
        {this.state.CollectionsProductsData &&
          this.state.CollectionsProductsData.length !== 0 &&
          this.state.CollectionsProductsData.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="SixthGridContainer"
                  style={{ backgroundColor: this.state.imageSpacingColor }}
                >
                  <div
                    className="SixthGridLeftTopPicture"
                    style={{
                      border: `1px solid ${this.state.imageSpacingColor}`
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: '100%', height: '105%' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        {this.props.callType !== 'droppable' &&
          this.state.CollectionsProductsDataVal.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="SixthGridContainer"
                  style={{ backgroundColor: this.state.imageSpacingColor }}
                >
                  <div
                    className="SixthGridLeftTopPicture"
                    style={{
                      border: `1px solid ${this.state.imageSpacingColor}`
                    }}
                  >
                    <i className="pe-7s-photo" />
                    {/* <img src={item.imageUrl} alt={item.title} style={{ width: '70%', height: '100%' }} /> */}
                  </div>
                </div>
              </div>
            );
          })}
        {this.state.CollectionsProductsData &&
          this.state.CollectionsProductsData.length === 0 &&
          this.props.callType === 'droppable' &&
          this.state.CollectionsProductsDataVal.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="SixthGridContainer"
                  style={{ backgroundColor: this.state.imageSpacingColor }}
                >
                  <div
                    className="SixthGridLeftTopPicture"
                    style={{
                      border: `1px solid ${this.state.imageSpacingColor}`
                    }}
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        style={{ width: '70%', height: '100%' }}
                      />
                    )}
                    {!item.imageUrl && <i className="pe-7s-photo" />}
                  </div>
                </div>
              </div>
            );
          })}

        <div
          className="SixthGridHeaderDetails"
          style={{
            color: this.state.titleColor,
            backgroundColor: this.state.footerBGColor
          }}
        >
          <span id="SixthGridHeaderDetailsTitle">{this.state.title}</span>&nbsp;
          <span id="SixthGridHeaderIcon">
            <i
              style={{ color: this.state.iconColor }}
              className={this.state.DropDownGetIconheader}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default BrowseCollection;

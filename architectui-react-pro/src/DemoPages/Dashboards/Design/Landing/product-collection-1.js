// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React, { Fragment } from 'react';
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

class ProductCollection1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IconColor: this.props.settings.IconColor,
      displayIconColor: false,

      HeaderText: this.props.settings.HeaderText,

      HeaderTitle: this.props.settings.HeaderTitle,
      displayHeaderTitle: false,

      HeaderBGColor:
        this.props.callType !== 'droppable'
          ? this.props.Collection1HeaderBGColor
          : this.props.settings.HeaderBGColor,
      displayHeaderBGColor: false,

      productBorderColor: this.props.settings.productBorderColor,
      displayproductBorderColor: false,

      ActionColor: this.props.settings.ActionColor,
      displayActionColor: false,

      ActionText: this.props.settings.ActionText,

      ActionTitleColor: this.props.settings.ActionTitleColor,
      displayActionTitleColor: false,

      CollectionCellBG: this.props.settings.CollectionCellBG,
      displayCollectionCellBG: false,

      CollectionProductTitle: this.props.settings.CollectionProductTitle,
      displayCollectionProductTitle: false,

      value: this.props.settings.value,
      DropDownGetIconheader: this.props.settings.DropDownGetIconheader,
      DropDownGetIconaction: this.props.settings.DropDownGetIconaction,
      CollectionsProductsData: [],
      CollectionsProductsDataDefault: getSelectedCollectionProducts(),
      selectedProductId: this.props.settings.selectedProductId,
      collectionType: this.props.settings.collectionType
      // isLoaded: false,
    };
  }

  setAllSettingsOnApply = settings => {
    this.setState(settings);
  };

  componentWillMount() {
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

  render() {
    return (
      <Fragment>
        <div
          id="FirstDropContainer"
          className="HoverEffectDragDrop"
          style={{ background: this.state.CollectionCellBG, height: 'auto' }}
        >
          <div
            id="FirstDropTopSection"
            style={{ background: this.state.HeaderBGColor }}
          >
            <div id="FirstDropLeftIcon" style={{ color: this.state.IconColor }}>
              <i className={this.state.DropDownGetIconheader} />
            </div>
            <div
              id="FirstDropTopSecTitle"
              style={{ color: this.state.HeaderTitle, textAlign: 'left' }}
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
          <div
            id="FirstDropProductContent"
            style={{
              display:
                this.state.CollectionsProductsData &&
                this.state.CollectionsProductsData.length !== 0
                  ? 'block'
                  : 'none'
            }}
          >
            {// this.state.isLoaded &&
            this.state.CollectionsProductsData &&
              this.state.CollectionsProductsData.length !== 0 &&
              this.state.CollectionsProductsData.map((item, index) => {
                return (
                  <div key={index} className="FirstDropProductContainer">
                    <div
                      className="FirstDropProduct"
                      style={{
                        border: `1px solid${this.state.productBorderColor}`
                      }}
                    >
                      {item.imageUrl && (
                        <img
                          style={{ objectFit: 'cover' }}
                          src={item.imageUrl}
                          alt={item.title}
                        />
                      )}
                      {!item.imageUrl ||
                        item.imageUrl === '' ||
                        (item.imageUrl === null && (
                          <i className="pe-7s-photo" />
                        ))}
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
          <div
            id="FirstDropProductContent"
            style={{
              display: this.props.callType !== 'droppable' ? 'block' : 'none'
            }}
          >
            {// this.state.isLoaded &&
            this.props.callType !== 'droppable' &&
              this.state.CollectionsProductsDataDefault.map((item, index) => {
                return (
                  <div key={index} className="FirstDropProductContainer">
                    <div
                      className="FirstDropProduct"
                      style={{
                        border: `1px solid${this.state.productBorderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
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
          <div
            id="FirstDropProductContent"
            style={{
              display:
                this.state.CollectionsProductsData &&
                this.state.CollectionsProductsData.length === 0 &&
                this.props.callType === 'droppable'
                  ? 'block'
                  : 'none'
            }}
          >
            {// this.state.isLoaded &&
            !this.state.CollectionsProductsData ||
              (this.state.CollectionsProductsData.length === 0 &&
                this.props.callType === 'droppable' &&
                this.state.CollectionsProductsDataDefault.map((item, index) => {
                  return (
                    <div key={index} className="FirstDropProductContainer">
                      <div
                        className="FirstDropProduct"
                        style={{
                          border: `1px solid${this.state.productBorderColor}`
                        }}
                      >
                        {item.imageUrl && (
                          <img
                            style={{ objectFit: 'cover' }}
                            src={item.imageUrl}
                            alt={item.title}
                          />
                        )}
                        {!item.imageUrl && <i className="pe-7s-photo" />}
                      </div>
                      <div
                        className="FirstDropProductTitle"
                        style={{ color: this.state.CollectionProductTitle }}
                      >
                        {item.title}
                      </div>
                    </div>
                  );
                }))}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ProductCollection1;

// tslint:disable
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
class ProductCollection2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IconColor: this.props.settings.IconColor,
      HeaderText: this.props.settings.HeaderText,
      HeaderTitle: this.props.settings.HeaderTitle,
      HeaderBGColor:
        this.props.callType !== 'droppable'
          ? this.props.Collection2HeaderBGsecColor
          : this.props.settings.HeaderBGColor,
      productBorderColor: this.props.settings.productBorderColor,
      ActionColor: this.props.settings.ActionColor,
      ActionText: this.props.settings.ActionText,
      ActionTitleColor: this.props.settings.ActionTitleColor,
      CollectionCellBG: this.props.settings.CollectionCellBG,
      CollectionProductTitle: this.props.settings.CollectionProductTitle,
      value: this.props.settings.value,
      DropDownGetIconheader: this.props.settings.DropDownGetIconheader,
      DropDownGetIconaction: this.props.settings.DropDownGetIconaction,
      CollectionsProductsData: [],
      CollectionsProductsDataDefault: getSelectedCollectionProducts(),
      selectedProductId: this.props.settings.selectedProductId,
      collectionType: this.props.settings.collectionType,
      prodCollectionname: this.props.settings.prodCollectionname,
      isLoaded: false
    };
  }

  setAllSettingsOnApply = settings => {
    this.setState(settings);
  };

  componentWillMount() {
    if (
      this.props.settings.collectionType &&
      this.props.settings.selectedProductId
    ) {
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${
            this.props.settings.collectionType
          }/${this.props.settings.selectedProductId}`
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
        id="SecondDropContainer"
        className="HoverEffectDragDrop"
        style={{ background: this.state.CollectionCellBG, height: 'auto' }}
      >
        <div
          id="SecondDropTopSection"
          style={{ background: this.state.HeaderBGColor }}
        >
          <div id="SecondDropLeftIcon" style={{ color: this.state.IconColor }}>
            <i className={this.state.DropDownGetIconheader} />
          </div>
          <div
            id="SecondDropTopSecTitle"
            style={{ color: this.state.HeaderTitle, textAlign: 'left' }}
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
        {
          // !this.state.isLoaded && this.props.callType === 'droppable' && <div className=""> <Loader loaded={this.state.isLoaded} /> </div>
        }
        <div
          id="SecondDropProductContent"
          style={{
            width: '500px',
            display:
              this.state.CollectionsProductsData &&
              this.state.CollectionsProductsData.length !== 0
                ? 'block'
                : 'none'
          }}
        >
          {this.state.CollectionsProductsData &&
            this.state.CollectionsProductsData.length !== 0 &&
            this.state.CollectionsProductsData.map((item, index) => {
              return (
                <div key={index} className="SecondDropProductContainer">
                  <div
                    className="SecondDropProduct"
                    style={{
                      border: `1px solid${this.state.productBorderColor}`
                    }}
                  >
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt={item.title} />
                    )}
                    {!item.imageUrl && <i className="pe-7s-photo" />}
                  </div>
                  <div
                    className="SecondDropProductTitle"
                    style={{ color: this.state.CollectionProductTitle }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
        <div
          id="SecondDropProductContent"
          style={{
            width: '500px',
            display: this.props.callType !== 'droppable' ? 'block' : 'none'
          }}
        >
          {
            // !this.state.isLoaded && this.props.callType === 'droppable' && <div className=""> <Loader loaded={this.state.isLoaded} /> </div>
          }
          {// this.state.isLoaded &&
          this.props.callType !== 'droppable' &&
            this.state.CollectionsProductsDataDefault.map((item, index) => {
              return (
                <div key={index} className="SecondDropProductContainer">
                  <div
                    className="SecondDropProduct"
                    style={{
                      border: `1px solid${this.state.productBorderColor}`
                    }}
                  >
                    <i className="pe-7s-photo" />
                  </div>
                  <div
                    className="SecondDropProductTitle"
                    style={{ color: this.state.CollectionProductTitle }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
        <div
          id="SecondDropProductContent"
          style={{
            width: '500px',
            display:
              this.state.CollectionsProductsData &&
              this.state.CollectionsProductsData.length === 0 &&
              this.props.callType === 'droppable'
                ? 'block'
                : 'none'
          }}
        >
          {
            // !this.state.isLoaded && this.props.callType === 'droppable' && <div className=""> <Loader loaded={this.state.isLoaded} /> </div>
          }
          {this.state.CollectionsProductsData &&
            this.state.CollectionsProductsData.length === 0 &&
            this.props.callType === 'droppable' &&
            this.state.CollectionsProductsDataDefault.map((item, index) => {
              return (
                <div key={index} className="SecondDropProductContainer">
                  <div
                    className="SecondDropProduct"
                    style={{
                      border: `1px solid${this.state.productBorderColor}`
                    }}
                  >
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt={item.title} />
                    )}
                    {!item.imageUrl && <i className="pe-7s-photo" />}
                  </div>
                  <div
                    className="SecondDropProductTitle"
                    style={{ color: this.state.CollectionProductTitle }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ProductCollection2;

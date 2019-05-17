// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';
// const Placeholder = './Placeholder.png';

const LeftProductsCollectionsCellsSettings = {
  collections: [
    {
      id: 'unique1',
      content: 'Default',
      imageUrl: '',
      title: 'PRODUCT',
      price: 'Price',
      showPrice: 'true'
    },
    {
      id: 'unique2',
      content: 'Default',
      imageUrl: '',
      title: 'PRODUCT',
      price: 'Price',
      showPrice: 'true'
    },
    {
      id: 'unique3',
      content: 'Default',
      imageUrl: '',
      title: 'PRODUCT',
      price: 'Price',
      showPrice: 'true'
    },
    {
      id: 'unique4',
      content: 'Default',
      imageUrl: '',
      title: 'PRODUCT',
      price: 'Price',
      showPrice: 'true'
    }
  ]
};

class CollectionTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellStyle: this.props.settings.cellStyle,
      cellTitleStyle: this.props.settings.cellTitleStyle,
      subTitleStyle: this.props.settings.subTitleStyle,
      cellTitle: this.props.settings.cellTitle,
      cellSubTitle: this.props.settings.cellSubTitle,

      cellTitleColor: this.props.settings.cellTitleColor,
      displayCellTitleColor: false,
      cellSubTitleColor:
        this.props.callType !== 'droppable'
          ? this.props.CollectioncellSubTitleColor
          : this.props.settings.cellSubTitleColor,
      displayCellSubTitleColor: false,
      productTitleColor: this.props.settings.productTitleColor,
      displayProductTitleColor: false,
      priceColor: this.props.settings.priceColor,
      displayPriceColor: false,
      imageCellSubTitleColor: this.props.settings.imageCellSubTitleColor,
      displayImageCellSubTitleColor: false,
      cellBGColor: this.props.settings.cellBGColor,
      displayCellBGColor: false,

      productList: this.props.settings.productList,
      ProductDisplay: this.props.settings.ProductDisplay,
      CollectionDisplay: this.props.settings.CollectionDisplay,
      ShowCollectionProduct: this.props.settings.ShowCollectionProduct,
      ProductTitleValue: this.props.settings.ProductTitleValue,
      DisplayCollectionValue: this.props.settings.DisplayCollectionValue,
      CellVertical: this.props.settings.CellVertical,
      Cellhorizontal: this.props.settings.Cellhorizontal,
      HideTitleSection: this.props.settings.HideTitleSection,
      ShowHideSubTitle: this.props.settings.ShowHideSubTitle,
      isChecked: this.props.settings.isChecked,

      leftcellContents:
        this.props.settings.leftcellContents ||
        LeftProductsCollectionsCellsSettings.collections,
      leftcellContentsType: this.props.settings.leftcellContentsType,
      CollectionsProducts: [],
      DefaultWidth: this.props.settings.DefaultWidth,
      Subtitle: this.props.settings.Subtitle
    };
  }

  setAllSettingsOnApply = settings => {
    this.setState(settings);
  };

  render() {
    const FullPxWidth = `${this.state.DefaultWidth}px`;
    return (
      <div
        className="HoverEffectDragDrop"
        id="FifthDropContainer"
        style={{
          backgroundColor: this.state.cellBGColor,
          height:
            this.state.leftcellContentsType === 'Horizontal' ? 'auto' : '500px'
        }}
      >
        <div className="FifthDropGridContainer">
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
                display: this.state.Subtitle === 'show' ? 'block' : 'none'
              }}
            >
              {this.state.cellSubTitle}
            </div>
          </div>
          <div
            className={
              this.state.leftcellContentsType === 'Horizontal'
                ? 'productListoverflow'
                : ''
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
                          <div className="FifthDropGridphoto dynamic_product_image">
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
                              }`
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
                              }`
                            }}
                          >
                            <span style={{ fontSize: '17px' }}>No Image</span>
                          </div>
                        )}

                        {!item.title && !item.name && (
                          <div
                            className="FifthDropGridTitle"
                            id="FifthDropGridTitle1"
                            style={{
                              color: this.state.productTitleColor,
                              display:
                                !item.title && !item.name ? 'block' : 'none'
                            }}
                          >
                            PRODUCT
                          </div>
                        )}
                        {item.name && (
                          <div
                            className="FifthDropGridTitle"
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
                            className="FifthDropGridTitle"
                            id="FifthDropGridTitle1"
                            style={{
                              color: this.state.productTitleColor,
                              display:
                                !item.name && item.title ? 'block' : 'none'
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
                          {item.price}
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
                        <div className="FifthDropGridphoto">
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
                          {item.price}
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
    );
  }
}

export default CollectionTitle;

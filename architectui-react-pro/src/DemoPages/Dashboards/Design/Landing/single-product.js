// tslint:disable
// @ts-nocheck
import React from 'react';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleColor: this.props.settings.titleColor,
      displayTitleColor: false,
      priceColor: this.props.settings.priceColor,
      displayPriceColor: false,
      productBorderColor: this.props.settings.productBorderColor,
      displayProductBorderColor: false,
      cellBGColor: this.props.settings.cellBGColor,
      displayCellBGColor: false,
      pageCircleActiveColor:
        this.props.callType !== 'droppable'
          ? this.props.SingleActiveDotColor
          : this.props.settings.pageCircleActiveColor,
      displayPageCircleActiveColor: false,
      pageCircleInactiveColor: this.props.settings.pageCircleInactiveColor,
      displayPageCircleInactiveColor: false,
      customTitle: this.props.settings.customTitle,
      DisplayCollectionValue: 'none',
      ProductDisplay: 'none',
      CollectionDisplay: 'none',
      ShowCollectionProduct: 'none',
      isChecked: this.props.settings.isCheckedFirst,
      prodCollectionname: this.props.settings.prodCollectionname || '',
      selectedimageUrl: this.props.settings.selectedimageUrl || '',
      selectedProductName: this.props.settings.selectedProductName || '',
      leftcellContents: [],
      selectedprice: this.props.settings.selectedprice || '',
      prodcollection: this.props.settings.prodcollection || '',
      selectedName: this.props.settings.selectedName || '',
      cellContents: this.props.settings.cellContents || []
    };
  }

  setAllSettingsOnApply = settings => {
    this.setState(settings);
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
    if (!this.state.selectedProductName) {
      const SelectedCollectionData = {
        id: this.state.selectedProductName
      };
      cellContentsItem = SelectedCollectionData;
      newleftcellContents[0] = cellContentsItem;
      this.setState({ leftcellContents: newleftcellContents });
    }
  }

  render() {
    return (
      <div
        className="HoverEffectDragDrop"
        id="ThirdDropContainer"
        style={{ backgroundColor: this.state.cellBGColor }}
      >
        {this.state.leftcellContents.map((item, index) => {
          return (
            <div key={index}>
              {item.imageUrl && (
                <div className="ThirdCollectionPicture">
                  <img
                    src={item.imageUrl}
                    style={{
                      border: `1px solid ${this.state.productBorderColor}`,
                      height: '100%',
                      width: '100%'
                    }}
                  />
                </div>
              )}
              {item.imageUrl === '' && (
                <div
                  className="ThirdCollectionPicture"
                  style={{
                    border: `1px solid ${this.state.productBorderColor}`,
                    backgroundColor: 'rgba(200, 200, 200, 0.37)'
                  }}
                >
                  <span style={{ fontSize: '17px' }}>No Image</span>
                </div>
              )}
              {!item.imageUrl && item.imageUrl !== '' && (
                <div
                  className="ThirdCollectionPicture"
                  style={{
                    border: `1px solid ${this.state.productBorderColor}`
                  }}
                >
                  <i className="pe-7s-photo" />
                </div>
              )}
              {item.title && this.state.selectedName && (
                <div
                  className="ThirdPictureTitle"
                  style={{ color: this.state.titleColor }}
                >
                  {this.state.selectedName}
                </div>
              )}
              {item.title && !this.state.selectedName && (
                <div
                  className="ThirdPictureTitle"
                  style={{ color: this.state.titleColor }}
                >
                  {item.title}
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
              {item.price && (
                <div
                  className="ThirdPicturePriceTitle"
                  style={{
                    color: this.state.priceColor,
                    display: this.state.isChecked === true ? 'block' : 'none'
                  }}
                >
                  {item.price}
                </div>
              )}
              {!item.price && this.state.prodcollection !== 'product' && (
                <div
                  className="ThirdPicturePriceTitle"
                  style={{
                    color: this.state.priceColor,
                    display: this.state.isChecked === true ? 'block' : 'none'
                  }}
                />
              )}
              {!item.price && !this.state.prodcollection && (
                <div
                  className="ThirdPicturePriceTitle"
                  style={{ color: this.state.priceColor, display: 'block' }}
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
          );
        })}
      </div>
    );
  }
}

export default SingleProduct;

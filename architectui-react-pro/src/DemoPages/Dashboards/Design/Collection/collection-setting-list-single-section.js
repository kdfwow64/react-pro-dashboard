// tslint:disable
import * as React from 'react';

class CollectionSettingListSingleSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="CollectionEffectListContainer"
        style={{
          backgroundColor: this.props.CellBGColorValue,
          borderBottom: `1px solid ${this.props.CellseparatorColorValue}`
        }}
      >
        <div className="CollectionEffectListContainerImage">
          <div
            className="CollectionEffectListImage"
            style={{
              border: `1px solid ${this.props.productborderColorValue}`
            }}
          >
            {this.props.ProdImageUrl && (
              <img
                src={this.props.ProdImageUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px',
                  position: 'absolute',
                  right: '0'
                }}
              />
            )}
            {!this.props.ProdImageUrl && <i className="pe-7s-photo" />}
          </div>
        </div>
        <div className="CollectionEffectListContainerTitleAndPrice">
          <div
            className="CollectionEffectListProductTitle"
            style={{ color: this.props.producttitleColorValue }}
          >
            {this.props.ProdTitle || 'PRODUCT'}
          </div>
          <div
            className="CollectionEffectListProductPrice"
            style={{ color: this.props.pricetitleColorValue || '#333333' }}
          >
            ${this.props.ProdPrice}
          </div>
          {/* <div
            className="CollectionEffectListRightActionIcon"
            style={{ color: this.props.CelliconColorValue || '#2ecc71' }}
          >
            <i className={this.props.IconAction || 'lnr-chevron-right'} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default CollectionSettingListSingleSection;

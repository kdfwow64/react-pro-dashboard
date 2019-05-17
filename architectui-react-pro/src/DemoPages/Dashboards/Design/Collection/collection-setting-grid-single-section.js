// tslint:disable
import * as React from 'react';

class CollectionSettingGridSingleSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        className="CollectionEffectGridTopContainer"
        style={{ height: '165px', width: '100%', display: 'inline-block' }}
      >
        <div
          className="CollectionEffectGridphoto"
          style={{ border: `1px solid ${this.props.productborderColorValue}` }}
        >
          {this.props.ProdImageUrl && (
            <img
              src={this.props.ProdImageUrl}
              style={{ width: '100%', height: '100%' }}
            />
          )}
          {!this.props.ProdImageUrl && <i className="pe-7s-photo" />}
        </div>
        <div
          className="CollectionEffectGridTitle"
          style={{
            color: this.props.producttitleColorValue,
            display: this.props.gridSelectProductTitleValue,
            textAlign: this.props.gridTitleValue
          }}
        >
          {this.props.ProdTitle || 'PRODUCT'}{' '}
        </div>
        <div
          className="CollectionEffectGridPrice"
          style={{
            color: this.props.pricetitleColorValue,
            display: this.props.gridSelectPriceTitleValue,
            textAlign: this.props.gridTitleValue
          }}
        >
          ${this.props.ProdPrice}
        </div>
      </li>
    );
  }
}

export default CollectionSettingGridSingleSection;

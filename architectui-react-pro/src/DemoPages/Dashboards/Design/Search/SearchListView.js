// tslint:disable
import * as React from 'react';
import SearchRightSection from './SearchRightSection';

class SearchListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="CollectionEffectListContainer"
        style={{
          backgroundColor: this.props.CellBGColor,
          borderBottom: `1px solid ${this.props.CellSeparatorColor}`
        }}
      >
        {/* ${this.props.SearchInputBorder} */}
        <div className="CollectionEffectListContainerImage">
          <div
            className="CollectionEffectListImage"
            style={{ border: `1px solid ${this.props.ProductBorderColor}` }}
          >
            <i className="pe-7s-photo" />
          </div>
        </div>
        <div className="CollectionEffectListContainerTitleAndPrice">
          <div
            className="CollectionEffectListProductTitle"
            style={{ color: this.props.ProductTitleColor }}
          >
            PRODUCT
          </div>
          <div
            className="CollectionEffectListProductPrice"
            style={{ color: this.props.PriceColor }}
          >
            PRICE
          </div>
          <div
            className="CollectionEffectListRightActionIcon"
            style={{ color: this.props.ProductIconColor }}
          >
            <i className={this.props.searchAction} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchListView;

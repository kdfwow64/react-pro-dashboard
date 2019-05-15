// tslint:disable
import * as React from 'react';

class Orderfavorite extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuCellBGColor: this.props.menuCellBGColor,
    menuIconColor: this.props.menuIconColor,
    menuTitleColor: this.props.menuTitleColor,
    menuTabActiveColor: this.props.menuTabActiveColor,
    menuTabInactiveColor: this.props.menuTabInactiveColor,
    menuSeparatorColor: this.props.menuSeparatorColor
  };

  render() {
    return (
      <div
        id="CollectionEffectMainContainer"
        className="CollectionGridListView"
      >
        <div id="SearchNavigationStyles" className="SearchNavigationSettings">
          <div className="CollectionEffectContainer">
            <div className="create_account_main">
              <div
                className="formContainer accountformcontainer"
                style={{ backgroundColor: this.props.favouriteColor }}
              >
                <div className="setting_sec">
                  <div className="ordersFavoritesTabContainer">
                    <div
                      className="ordersFavoritesFavoritesTab ordersFavoritesInactive"
                      style={{ color: this.props.tabactiveColor }}
                    >
                      ORDERS
                    </div>
                    <div
                      className="ordersFavoritesOrdersTab ordersFavoritesActive"
                      style={{
                        borderBottom: `2px solid${this.props.tabactiveColor}`
                      }}
                    >
                      FAVORITES
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.favouritecellBgColor,
                    borderBottom: `1px solid${
                      this.props.favouritecellsepratorColor
                    }`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.favoriteimageColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="favoritesTitle"
                      style={{ color: this.props.favouritetitleColor }}
                    >
                      PRODUCT
                    </div>
                    <div
                      className="favoritesPrice"
                      style={{ color: this.props.favouritepriceColor }}
                    >
                      PRICE
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.favouritecellBgColor,
                    borderBottom: `1px solid${
                      this.props.favouritecellsepratorColor
                    }`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.favoriteimageColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="favoritesTitle"
                      style={{ color: this.props.favouritetitleColor }}
                    >
                      PRODUCT
                    </div>
                    <div
                      className="favoritesPrice"
                      style={{ color: this.props.favouritepriceColor }}
                    >
                      PRICE
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.favouritecellBgColor,
                    borderBottom: `1px solid${
                      this.props.favouritecellsepratorColor
                    }`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.favoriteimageColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="favoritesTitle"
                      style={{ color: this.props.favouritetitleColor }}
                    >
                      PRODUCT
                    </div>
                    <div
                      className="favoritesPrice"
                      style={{ color: this.props.favouritepriceColor }}
                    >
                      PRICE
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.favouritecellBgColor,
                    borderBottom: `1px solid${
                      this.props.favouritecellsepratorColor
                    }`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.favoriteimageColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="favoritesTitle"
                      style={{ color: this.props.favouritetitleColor }}
                    >
                      PRODUCT
                    </div>
                    <div
                      className="favoritesPrice"
                      style={{ color: this.props.favouritepriceColor }}
                    >
                      PRICE
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.favouritecellBgColor,
                    borderBottom: `1px solid${
                      this.props.favouritecellsepratorColor
                    }`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.favoriteimageColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="favoritesTitle"
                      style={{ color: this.props.favouritetitleColor }}
                    >
                      PRODUCT
                    </div>
                    <div
                      className="favoritesPrice"
                      style={{ color: this.props.favouritepriceColor }}
                    >
                      PRICE
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.favouritecellBgColor,
                    borderBottom: `1px solid${
                      this.props.favouritecellsepratorColor
                    }`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.favoriteimageColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="favoritesTitle"
                      style={{ color: this.props.favouritetitleColor }}
                    >
                      PRODUCT
                    </div>
                    <div
                      className="favoritesPrice"
                      style={{ color: this.props.favouritepriceColor }}
                    >
                      PRICE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orderfavorite;

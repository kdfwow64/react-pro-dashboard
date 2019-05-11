// tslint:disable
import * as React from 'react';

class ProductAddCart extends React.Component  {

    render() {

        return (
        <div id="ProductAddCart" className="HoverEffectDragDrop" style={{ backgroundColor: this.props.CartBGColor }}>
			<div id="productAddToCartButton" style={{ color: this.props.CartTitleColor, backgroundColor: this.props.CartButtonColor }}>{this.props.CartTitleText}</div>
        </div>
        );
    }
}

export default ProductAddCart;

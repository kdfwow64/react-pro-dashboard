// tslint:disable
import * as React from 'react';

class ProductDescription extends React.Component  {

    render() {

        return (
        <div id="ProductDescription" className="HoverEffectDragDrop" style={{ backgroundColor: this.props.DescBGColor }}>
			<div id="ProductDescriptionTitle" style={{ color: this.props.DescTitleColor, backgroundColor: this.props.DescHeaderBGColor }}>
				{this.props.DescTitleText}
			</div>
			<div id="ProductDescriptionText" style={{ color: this.props.DescTextColor, height: '20px' }}></div>
        </div>
        );
    }
}

export default ProductDescription;

/* tslint:disable */
import * as React from 'react';
import { Tooltip } from 'reactstrap';

export default class StatefulToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipVisible: false
    };
  }

  render() {
    const { imgSrc, text, id, imgWidth, imgHeight, ...props } = this.props;

    let imageHeight = imgHeight;
    if (!imageHeight) {
      imageHeight = 400;
    }

    let imageWidth = imgWidth;
    if (!imageWidth) {
      imageWidth = 400;
    }

    const width = imageWidth + 2 * 20; // 20 is the padding in the outer `style`
    const style = {
      style: {
        background: '#fff',
        padding: 20,
        boxShadow: '0px 0px 33px -11px rgba(0,0,0,0.32)',
        width: imgSrc === undefined ? '300px' : width,
        borderRadius: '5px'
      },
      arrowStyle: {
        color: '#fff',
        borderColor: 'rgba(0,0,0,0)'
      }
    };

    const textStyle = {
      fontSize: '15px',
      fontFamily: 'HelveticaNeue-Light'
      // .{font-family: "HelveticaNeueLight", "HelveticaNeue-Light", "Helvetica Neue Light", "HelveticaNeue", "Helvetica Neue", 'TeXGyreHerosRegular', "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif; font-weight:300; font-stretch:normal;
    };

    return (
      <span>
        <i
          id={id}
          className="fa fa-question-circle"
          onMouseEnter={() => this.setState({ tooltipVisible: true })}
          onMouseLeave={() => this.setState({ tooltipVisible: false })}
        />
        <Tooltip
          {...props}
          active={this.state.tooltipVisible}
          parent={`#${id}`}
          tooltipTimeout={500}
          style={style}
        >
          <p style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />
          <img
            hidden={imgSrc === undefined || imgSrc === null || imgSrc === ''}
            src={`img/tooltippictures/${imgSrc}`}
            style={{ width: imageWidth, height: 'auto' }}
          />
        </Tooltip>
      </span>
    );
  }
}

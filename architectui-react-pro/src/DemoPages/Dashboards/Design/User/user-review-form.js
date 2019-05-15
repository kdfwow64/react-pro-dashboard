// tslint:disable
import * as React from 'react';

class UserReview extends React.Component {
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
                style={{ backgroundColor: this.props.reviewBgColor }}
              >
                <div className="setting_sec">
                  <div id="review_createAccountContainer">
                    <div className="review_top_sec">
                      <div
                        id="contact_fullnameBox"
                        className="review_container_for_stars"
                        style={{ color: this.props.reviewRatingColor }}
                      >
                        <i className="lnr-star" />
                        <i className="lnr-star" />
                        <i className="lnr-star" />
                        <i className="lnr-star" />
                        <i className="lnr-star" />
                      </div>
                      <div
                        id="review_Message"
                        className="review_boxContainer"
                        style={{
                          backgroundColor: this.props.reviewinputBGColor
                        }}
                      >
                        <div
                          className="review_accountPlaceHolder"
                          style={{ color: this.props.reviewinputTitleColor }}
                        >
                          Tell us what you thought
                        </div>
                      </div>
                      <div
                        id="review_loginBox"
                        style={{
                          backgroundColor: this.props.reviewbuttonColor,
                          color: this.props.reviewbuttonTitleColor
                        }}
                      >
                        Submit Review
                      </div>
                    </div>

                    <div className="review_mainContainer">
                      <div
                        className="review_header"
                        style={{
                          backgroundColor: this.props.reviewgeneralTextColor
                        }}
                      >
                        Product Reviews
                      </div>
                    </div>
                    <div
                      className="review_btm"
                      style={{
                        backgroundColor: this.props.reviewtextLinkColor
                      }}
                    >
                      <div className="review_mainContainer">
                        <div className="reviewRatingAndName">
                          <div className="review_StartContainer">
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                          </div>
                          <div
                            className="review_nameOfReviewer"
                            style={{ color: this.props.reviewpostedColor }}
                          >
                            by John Doe
                          </div>
                        </div>
                        <div
                          className="review_Date"
                          style={{ color: this.props.reviewdateColor }}
                        >
                          posted on July 1st, 2018 — Verified Purchase
                        </div>
                        <div
                          className="review_mainText"
                          style={{
                            borderBottom: `1px solid${
                              this.props.reviewcellColor
                            }`,
                            color: this.props.reviewtextColor
                          }}
                        >
                          I liked this product a lot. The customer service was
                          outstanding.
                          <div
                            className="review_readMore"
                            style={{ color: this.props.reviewreadmoreColor }}
                          >
                            Read More
                          </div>
                        </div>
                      </div>

                      <div className="review_mainContainer">
                        <div className="reviewRatingAndName">
                          <div className="review_StartContainer">
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                            <i className="lnr-star" />
                          </div>
                          <div
                            className="review_nameOfReviewer"
                            style={{ color: this.props.reviewpostedColor }}
                          >
                            by Jane Doe
                          </div>
                        </div>
                        <div
                          className="review_Date"
                          style={{ color: this.props.reviewdateColor }}
                        >
                          posted on July 2nd, 2018 — Verified Purchase
                        </div>
                        <div
                          className="review_mainText"
                          style={{
                            borderBottom: `1px solid${
                              this.props.reviewcellColor
                            }`,
                            color: this.props.reviewtextColor
                          }}
                        >
                          Product was as described. Will buy again.
                          <div
                            className="review_readMore"
                            style={{ color: this.props.reviewreadmoreColor }}
                          >
                            Read More
                          </div>
                        </div>
                      </div>
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

export default UserReview;

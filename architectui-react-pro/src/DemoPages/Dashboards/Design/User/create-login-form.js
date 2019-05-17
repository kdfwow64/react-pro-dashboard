// tslint:disable
import * as React from 'react';

class CreateLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCellBGColor: this.props.menuCellBGColor,
      menuIconColor: this.props.menuIconColor,
      menuTitleColor: this.props.menuTitleColor,
      menuTabActiveColor: this.props.menuTabActiveColor,
      menuTabInactiveColor: this.props.menuTabInactiveColor,
      menuSeparatorColor: this.props.menuSeparatorColor
    };
  }

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
                style={{ backgroundColor: this.props.loginBGColor }}
              >
                <div className="form_main_cont">
                  <div
                    className="FullNameContainer"
                    style={{ backgroundColor: this.props.logininputBGColor }}
                  >
                    <div className="user_icon_cnt">
                      <i
                        style={{ color: this.props.logininputIconColor }}
                        className="lnr-envelope"
                      />
                    </div>
                    <div
                      className="userEmail user_input_cnt"
                      style={{ color: this.props.logininputTitleColor }}
                    >
                      Email Address
                    </div>
                  </div>

                  <div
                    className="FullNameContainer"
                    style={{ backgroundColor: this.props.logininputBGColor }}
                  >
                    <div className="user_icon_cnt">
                      <i
                        style={{ color: this.props.logininputIconColor }}
                        className="pe-7s-key"
                      />
                    </div>
                    <div
                      className="userEmail user_input_cnt"
                      style={{ color: this.props.logininputTitleColor }}
                    >
                      Password
                    </div>
                  </div>

                  <div
                    className="FullNameContainer"
                    style={{ backgroundColor: this.props.loginbuttonColor }}
                  >
                    <div
                      className="button_sec"
                      style={{ color: this.props.loginbuttonTitleColor }}
                    >
                      Sign In
                    </div>
                  </div>
                  <div className="FullNameContainer">
                    <div
                      className="GeneralTextContainer"
                      style={{ color: this.props.logingeneralTextColor }}
                    >
                      Trouble Logging In?
                      <span
                        className="TextLinkContainer"
                        style={{ color: this.props.logintextLinkColor }}
                      >
                        {' '}
                        Click Here
                      </span>
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

export default CreateLoginForm;

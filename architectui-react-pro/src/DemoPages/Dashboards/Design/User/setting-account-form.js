// tslint:disable
import * as React from 'react';

class CreateSettingForm extends React.Component {
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
                style={{ backgroundColor: this.props.settingBGColor }}
              >
                <div
                  className="usersettingsTitleContainer"
                  style={{
                    backgroundColor: this.props.settinginputBGColor,
                    borderBottom: `1px solid${this.props.settinginputIconColor}`
                  }}
                >
                  <div className="usersettingsTitle">
                    <div
                      className="usersettingsTitle"
                      style={{ color: this.props.settinginputTitleColor }}
                    >
                      Push Notifications
                    </div>
                    <div className="usersettingsSwitchContainer">
                      <div
                        className="userswitchBackground activeSwitch"
                        style={{
                          backgroundColor: this.props.settingbuttonColor
                        }}
                      />
                      <div
                        className="userswitchCircle"
                        style={{
                          backgroundColor: this.props.settinggeneralTextColor
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="usersettingsTitleContainer"
                  style={{
                    backgroundColor: this.props.settinginputBGColor,
                    borderBottom: `1px solid${this.props.settinginputIconColor}`
                  }}
                >
                  <div className="usersettingsTitle">
                    <div
                      className="usersettingsTitle"
                      style={{ color: this.props.settinginputTitleColor }}
                    >
                      Terms
                    </div>
                  </div>
                </div>

                <div
                  className="usersettingsTitleContainer"
                  style={{
                    backgroundColor: this.props.settinginputBGColor,
                    borderBottom: `1px solid${this.props.settinginputIconColor}`
                  }}
                >
                  <div className="usersettingsTitle">
                    <div
                      className="usersettingsTitle"
                      style={{ color: this.props.settinginputTitleColor }}
                    >
                      Privacy Policy
                    </div>
                  </div>
                </div>
                <div
                  className="usersettingsTitleContainer"
                  style={{
                    backgroundColor: this.props.settinginputBGColor,
                    borderBottom: `1px solid${this.props.settinginputIconColor}`
                  }}
                >
                  <div className="usersettingsTitle">
                    <div
                      className="usersettingsTitle"
                      style={{ color: this.props.settinginputTitleColor }}
                    >
                      Logout
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

export default CreateSettingForm;

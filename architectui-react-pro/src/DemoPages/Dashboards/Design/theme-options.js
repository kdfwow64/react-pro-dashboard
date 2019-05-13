// tslint:disable
// @ts-nocheck
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCog, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";
import { Tooltip } from "reactstrap";
import SweetAlert from "sweetalert-react";
import { API_ROOT } from "../../../utilities/api-config";
import { themeColorFromName } from "./mobile-theme-utils";

library.add(fab, faCog, faSpinner);

class ThemeOptions extends React.Component {
  //homeTopTabsShowEditAlert: React.RefObject<{}>;
  constructor(props) {
    super(props);
    this.onThemeOptionSelection = this.onThemeOptionSelection.bind(this);
    this.CloseThemeBar = this.CloseThemeBar.bind(this);
    this.OpenThemeBar = this.OpenThemeBar.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
    this.saveTheme = this.saveTheme.bind(this);
    this.homeTopTabsShowEditAlert = React.createRef();
  }
  state = {
    tooltip: false,
    tooltipRefresh: false,
    tooltipSaved: false,
    tooltipSettings: false,
    DisplayThemeBar: false,
    isEdited: this.props.isEdited,
    editedTheme: this.props.editedTheme,
    selectedTheme: "",
    clicked: false,
    saved: false,
    collection: "",
    toCollections: false,
    openFirstModal: false,
    item: ""
  };
  _onThemeOptionSelection = themName => {
    this.props.selectTheme(themName);
  };
  get onThemeOptionSelection() {
    return this._onThemeOptionSelection;
  }
  set onThemeOptionSelection(value) {
    this._onThemeOptionSelection = value;
  }
  _CloseThemeBar = () => {
    this.setState({ DisplayThemeBar: false });
  };
  get CloseThemeBar() {
    return this._CloseThemeBar;
  }
  set CloseThemeBar(value) {
    this._CloseThemeBar = value;
  }
  _OpenThemeBar = () => {
    this.setState({ DisplayThemeBar: true });
  };
  get OpenThemeBar() {
    return this._OpenThemeBar;
  }
  set OpenThemeBar(value) {
    this._OpenThemeBar = value;
  }

  showSavedButton = () => {
    this.setState({ isEdited: false });
    this.setState({ clicked: false });
    this.setState({ saved: true });
  };
  showSaveButton = () => {
    this.setState({ isEdited: true });
    this.setState({ clicked: false });
    this.setState({ saved: false });
  };
  saveClicked = () => {
    this.props.onSaveEditedItems();
    this.setState({ isEdited: false });
    this.setState({ clicked: true });
    this.setState({ saved: false });
  };

  saveTheme = () => {
    Axios.post(`${API_ROOT}/api/v2/app-theme`, {
      themeColor: themeColorFromName(this.state.selectedTheme)
    });
  };
  toggle() {
    this.setState({
      tooltip: !this.state.tooltip
    });
  }
  toggleOne() {
    this.setState({
      tooltipSaved: !this.state.tooltipSaved
    });
  }
  toggleTwo() {
    this.setState({
      tooltipRefresh: !this.state.tooltipRefresh
    });
  }
  toggleThree() {
    this.setState({
      tooltipSettings: !this.state.tooltipSettings
    });
  }
  savedHoverTooltip = () => {
    // toast["success"]("Your changes are already Saved!"); 
  };

  render() {
    return (
      <div
        // className="themeOptionContainer"
        // style={{ position: "absolute", right: 100, bottom: 0 }}
      >
          {this.state.isEdited && !this.state.clicked && !this.state.saved && (
            <div>
              <div
                className="Savebutton"
                id="Tooltip-save"
                style={{ backgroundColor: "#0e7c95", cursor: "pointer" }}
                onClick={this.saveClicked}
              >
                <i className="pe-7s-diskette" />
              </div>
              <Tooltip
                placement="auto"
                isOpen={this.state.tooltip}
                target="Tooltip-save"
                toggle={this.toggle.bind(this)}
              >
                Click to Save!
              </Tooltip>
              {
                //toast['warn']('Click on Save to save your changes!')
              }
            </div>
          )}
          {this.state.clicked && !this.state.isEdited && !this.state.saved && (
            <div>
              <div
                className="Savebutton"
                id="Tooltip-saving"
                style={{ backgroundColor: "#0A941B", cursor: "progress" }}
              >
                <FontAwesomeIcon
                  icon={["fas", "spinner"]}
                  pulse
                  fixedWidth
                  size="1x"
                />
              </div>
            </div>
          )}
          {this.state.saved && !this.state.isEdited && !this.state.clicked && (
            <div>
              <div
                className="Savebutton"
                id="Tooltip-saved"
                style={{ backgroundColor: "#ccc", cursor: "default" }}
                onMouseEnter={this.savedHoverTooltip.bind(this)}
              >
                <i className="pe-7s-diskette" />
              </div>
              <Tooltip
                placement="auto"
                isOpen={this.state.tooltipSaved}
                target="Tooltip-saved"
                toggle={this.toggleOne.bind(this)}
              >
                Changes are Saved!
              </Tooltip>
            </div>
          )}

          <div
            id="Tooltip-refresh"
            className="UndoThemebutton"
            onClick={() => this.setState({ reloadConfirmation: true })}
          >
            <i className="pe-7s-refresh" />
          </div>
          <Tooltip
            placement="auto"
            isOpen={this.state.tooltipRefresh}
            target="Tooltip-refresh"
            toggle={this.toggleTwo.bind(this)}
          >
            Click to refresh page!
          </Tooltip>

          <SweetAlert
            title="Are you sure?"
            confirmButtonColor=""
            show={this.state.reloadConfirmation}
            text="Are you sure, You want to reload the page. That means your all changes are removed."
            showCancelButton
            onConfirm={() => window.location.reload()}
            onCancel={() => this.setState({ reloadConfirmation: false })}
          />
          <div
            className="Fixedthemebutton"
            style={{
              display: this.state.DisplayThemeBar === false ? "block" : "none"
            }}
            onClick={this.OpenThemeBar}
            id="Tooltip-settings"
          >
            <FontAwesomeIcon
              icon={["fas", "cog"]}
              fixedWidth={false}
              size="1x"
            />
          </div>
          <Tooltip
            placement="auto"
            isOpen={this.state.tooltipSettings}
            target="Tooltip-settings"
            toggle={this.toggleThree.bind(this)}
          >
            Open Theming Configuration!
          </Tooltip>

          <div
            className="themeContainer"
            style={{
              display: this.state.DisplayThemeBar === true ? "block" : "none"
            }}
          >
            <ul className="ThemeHideSection">
              <li
                onClick={() => {
                  this.onThemeOptionSelection("default");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#0ebed0" }}
                />
                <div className="themeTitle">DEFAULT</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("ice");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#7ee0db" }}
                />
                <div className="themeTitle">ICE</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("moonlight");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#CCCCCC" }}
                />
                <div className="themeTitle">MOONLIGHT</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("bee");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#fff700" }}
                />
                <div className="themeTitle">BEE</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("lavender");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#9B59B6" }}
                />
                <div className="themeTitle">LAVENDER</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("fire");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#f3234a" }}
                />
                <div className="themeTitle">FIRE</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("emerald");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#2ecc71" }}
                />
                <div className="themeTitle">EMERALD</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("night");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#000000" }}
                />
                <div className="themeTitle">NIGHT</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection("flamingo");
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: "#EF4836" }}
                />
                <div className="themeTitle">FLAMINGO</div>
              </li>
            </ul>

            <div id="closeThemeIcon" onClick={this.CloseThemeBar}>
              <i className="pe-7s-close-circle" />
            </div>
          </div>
        </div>
    );
  }
}

export default ThemeOptions;

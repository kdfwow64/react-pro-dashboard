// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';
import Ionicon from 'react-ionicons'

const iconData = [
    "ios-add",
    "ios-alert",
    "ios-american-football-outline",
    "ios-analytics-outline",
    "ios-analytics",
    "ios-apps-outline",
    "ios-arrow-forward",
    "ios-arrow-round-back",
    "ios-arrow-round-down",
    "ios-arrow-round-forward",
    "ios-arrow-up",
    "ios-backspace",
    "ios-basket-outline",
    "ios-basket",
    "ios-battery-dead",
    "ios-battery-full",
    "ios-beaker-outline",
    "ios-beaker",
    "ios-beer",
    "ios-bonfire-outline",
    "ios-bookmark",
    "ios-bowtie-outline",
    "ios-brush",
    "ios-bug-outline",
    "ios-bulb-outline",
    "ios-bulb",
    "ios-bus",
    "ios-cafe-outline",
    "ios-calendar-outline",
    "ios-car-outline",
    "ios-car",
    "ios-card-outline",
    "ios-card",
    "ios-cash",
    "ios-chatbubbles-outline",
    "ios-clipboard-outline",
    "ios-clock-outline",
    "ios-closed-captioning-outline",
    "ios-cloud-done",
    "ios-cloud-outline",
    "ios-cloud",
    "ios-code-download",
    "ios-code",
    "ios-cog-outline",
    "ios-color-fill-outline",
    "ios-color-fill",
    "ios-color-palette-outline",
    "ios-color-palette",
    "ios-construct-outline",
    "ios-construct",
    "ios-contact",
    "ios-contacts-outline",
    "ios-contrast",
    "ios-create-outline",
    "ios-create",
    "ios-crop-outline",
    "ios-cube",
    "ios-cut-outline",
    "ios-done-all",
    "ios-easel-outline",
    "ios-easel",
    "ios-exit",
    "ios-expand",
    "ios-off-outline",
    "ios-eye-off",
    "ios-filing",
    "ios-finger-print",
    "ios-flash",
    "ios-flask-outline",
    "ios-flask",
    "ios-flower-outline",
    "ios-flower", "ios-folder-open-outline",
    "ios-funnel",
    "ios-git-branch",
    "ios-git-commit",
    "ios-git-network",
    "ios-git-pull-request",
    "ios-grid",
    "ios-hammer",
    "ios-headset",
    "ios-help-buoy",
    "ios-help-circle-outline",
    "ios-help",
    "ios-ice-cream-outline",
    "ios-ice-cream",
    "ios-image",
    "ios-images-outline",
    "ios-images",
    "ios-information",
    "ios-ionic",
    "ios-ionitron-outline",
    "ios-ionitron",
    "ios-jet",
    "ios-laptop",
    "ios-leaf",
    "ios-link",
    "ios-list-box",
    "ios-list",
    "ios-locate-outline",
    "ios-locate",
    "ios-lock-outline",
    "ios-lock",
    "ios-log-in",
    "ios-log-out",
    "ios-male",
    "ios-map-outline",
    "ios-map",
    "ios-medal-outline",
    "ios-megaphone-outline",
    "ios-mic-off-outline",
    "ios-mic-off",
    "ios-mic-outline",
    "ios-mic",
    "ios-microphone-outline",
    "ios-microphone",
    "ios-move",
    "ios-musical-note",
    "ios-no-smoking-outline",
    "ios-notifications-off-outline",
    "ios-notifications-off",
    "ios-notifications",
    "ios-nuclear-outline",
    "ios-open",
    "ios-options-outline",
    "ios-options",
    "ios-outlet",
    "ios-paper",
    "ios-partly-sunny-outline",
    "ios-paw-outline",
    "ios-person-add-outline",
    "ios-person-add",
    "ios-phone-landscape",
    "ios-phone-portrait",
    "ios-pin",
    "ios-pint",
    "ios-podium",
    "ios-power-outline",
    "ios-print-outline",
    "ios-print",
    "ios-pulse-outline",
    "ios-pulse",
    "ios-qr-scanner",
    "ios-quote-outline",
    "ios-radio-button-on",
    "ios-radio-outline",
    "ios-rainy",
    "ios-reorder",
    "ios-resize",
    "ios-return-right",
    "ios-rose",
    "ios-send",
    "ios-settings-outline",
    "ios-share",
    "ios-shirt",
    "ios-skip-forward",
    "ios-square",
    "ios-stats-outline",
    "ios-stats",
    "ios-tablet-portrait",
    "ios-thermometer-outline",
    "ios-thermometer",
    "ios-thumbs-down-outline",
    "ios-thumbs-down",
    "ios-thumbs-up-outline",
    "ios-thumbs-up",
    "ios-thunderstorm-outline",
    "ios-time",
    "ios-trophy-outline",
    "ios-trophy",
    "ios-umbrella-outline",
    "ios-umbrella",
    "ios-unlock-outline",
    "ios-volume-mute",
    "ios-volume-off",
    "ios-volume-up",
    "ios-warning",
    "ios-watch",
    "ios-water",
    "ios-wifi-outline",
    "ios-wifi",
    "ios-wine",
    "ios-woman",
    "logo-bitcoin",
    "logo-chrome",
    "logo-css3",
    "logo-designernews",
    "logo-dribbble",
    "logo-dropbox",
    "logo-facebook",
    "logo-github",
    "logo-google",
    "logo-html5",
    "logo-instagram",
    "logo-javascript",
    "logo-linkedin",
    "logo-markdown",
    "logo-nodejs",
    "logo-octocat",
    "logo-pinterest",
    "logo-playstation",
    "logo-rss",
    "logo-sass",
    "logo-snapchat",
    "logo-tumblr",
    "logo-twitch",
    "logo-twitter",
    "logo-usd",
    "logo-vimeo",
    "md-alert",
    "md-american-football",
    "md-analytics",
    "md-backspace",
    "md-barcode",
    "md-basket",
    "md-beer",
    "md-body",
    "md-bookmarks",
    "md-build",
    "md-bulb",
    "md-calendar",
    "md-camera",
    "md-card",
    "md-cash",
    "md-clipboard",
    "md-cloud-download",
    "md-cloud",
    "md-cloudy-night",
    "md-code",
    "md-color-palette",
    "md-contact",
    "md-cube",
    "md-download",
    "md-exit",
    "md-expand",
    "md-film",
    "md-flag",
    "md-flask",
    "md-folder",
    "md-funnel",
    "md-game-controller-a",
    "md-game-controller-b",
    "md-git-commit",
    "md-git-compare",
    "md-git-merge",
    "md-git-network",
    "md-glasses",
    "md-globe",
    "md-grid",
    "md-hammer",
    "md-heart",
    "md-home",
    "md-image",
    "md-images",
    "md-information",
    "md-ionic",
    "md-key",
    "md-keypad",
    "md-list-box",
    "md-list",
    "md-lock",
    "md-log-in",
    "md-log-out",
    "md-man",
    "md-map",
    "md-medkit",
    "md-menu",
    "md-navigate",
    "md-no-smoking",
    "md-notifications-off",
    "md-open",
    "md-paper-plane",
    "md-phone-portrait",
    "md-pint",
    "md-plane",
    "md-pricetag",
    "md-print",
    "md-pulse",
    "md-radio",
    "md-rainy",
    "md-remove",
    "md-resize",
    "md-rewind",
    "md-ribbon",
    "md-rose",
    "md-school",
    "md-send",
    "md-skip-forward",
    "md-snow",
    "md-star",
    "md-stats",
    "md-stopwatch",
    "md-subway",
    "md-swap",
    "md-tablet-portrait",
    "md-thumbs-up",
    "md-thunderstorm",
    "md-train",
    "md-trending-up",
    "md-trophy",
    "md-volume-mute",
    "md-water",
    "md-woman",
    "ios-arrow-back",
    "ios-barcode",
    "ios-baseball-outline",
    "ios-baseball",
    "ios-basketball-outline",
    "ios-body-outline",
    "ios-body",
    "ios-book-outline",
    "ios-book",
    "ios-bookmarks-outline",
    "ios-briefcase-outline",
    "ios-browsers",
    "ios-calculator",
    "ios-calendar",
    "ios-color-filter-outline",
    "ios-download",
    "ios-eye-outline",
    "ios-film",
    "ios-flag",
    "ios-folder",
    "ios-football",
    "ios-game-controller-a-outline",
    "ios-game-controller-b-outline",
    "e-controller-b",
    "ios-glasses-outline",
    "ios-glasses",
    "ios-keypad-outline",
    "ios-medkit",
    "ios-more",
    "ios-navigate",
    "ios-nutrition-outline",
    "ios-people-outline",
    "ios-people",
    "ios-photos",
    "ios-play",
    "ios-pricetags-outline",
    "ios-pricetags",
    "ios-redo",
    "ios-rewind",
    "ios-speedometer-outline",
    "ios-star",
    "ios-stopwatch-outline",
    "ios-stopwatch",
    "ios-tennisball",
    "ios-timer-outline",
    "ios-timer",
    "ios-videocam"
];

class IconList extends React.Component  {
  constructor(props) {
    super(props);
    this.DropDownGetIcon = this.DropDownGetIcon.bind(this);

    this.state = {
      IconClassName: this.props.IconClassName,
      /* IconColor: this.props.IconColor,
           IconBGColor: this.props.IconBGColor,
           IconBorderColor: this.props.IconBorderColor,*/
      IconColor: '#9ea6a9', // #fff
      IconBGColor: 'unset', // '#e274d3'
      IconBorderColor: '#f2f2f2', // '#e274d3'
      showIconsList: 'none'
    };
  }

  DropDownGetIcon = e => {
    this.setState({ IconClassName: e.target.getAttribute('data-key') });
    this.setState({ showIconsList: 'none' });
    if (this.props.DropDownGetIconCellectionHederCallback) {
      this.props.DropDownGetIconCellectionHederCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetCollectionActionCallback) {
      this.props.DropDownGetCollectionActionCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconCellection2HederCallback) {
      this.props.DropDownGetIconCellection2HederCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetCollection2ActionCallback) {
      this.props.DropDownGetCollection2ActionCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconLandingNavCallback) {
      this.props.DropDownGetIconLandingNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconCellectionNavCallback) {
      this.props.DropDownGetIconCellectionNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconCellectionListActionCallback) {
      this.props.DropDownGetIconCellectionListActionCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconProductExternalCallback) {
      this.props.DropDownGetIconProductExternalCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconProductNavCallback) {
      this.props.DropDownGetIconProductNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconUserNavCallback) {
      this.props.DropDownGetIconUserNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetCartUserNavCallback) {
      this.props.DropDownGetCartUserNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconSearchNavCallback) {
      this.props.DropDownGetIconSearchNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconSearchActionNavCallback) {
      this.props.DropDownGetIconSearchActionNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconBrowseIconCallback) {
      this.props.DropDownGetIconBrowseIconCallback(
        e.target.getAttribute('data-key')
      );
    }
  }

  getIconLists = () => {
    const IconArry = [
      { name: 'lnr-cart' },
      { name: 'pe-7s-shopbag' },
      { name: 'lnr-tag' },
      { name: 'pe-7s-cup' },
      { name: 'lnr-heart' },
      { name: 'pe-7s-user-female' },
      { name: 'pe-7s-user' },
      { name: 'lnr-star' },
      { name: 'lnr-users' },
      { name: 'lnr-file-empty' },
      { name: 'lnr-inbox' },
      { name: 'lnr-film-play' },
      { name: 'lnr-arrow-right' },
      { name: 'lnr-arrow-left' },
      { name: 'lnr-arrow-right-circle' },
      { name: 'lnr-arrow-left-circle' },
      { name: 'lnr-chevron-left' },
      { name: 'lnr-chevron-right' },
      { name: 'pe-7s-home' },
      { name: 'pe-7s-search' },
      { name: 'lnr-menu' },
      { name: 'pe-7s-link' },
      { name: 'lnr-thumbs-up' },
      { name: 'pe-7s-pin' }
    ];
    const activeIcon = this.props.IconClassName;
    const iconLists = IconArry.map((d, index) => {
      const activeClassName = activeIcon === d.name ? 'Iconactive' : '';

      const allClasses = `${activeClassName}`;

      return (
        <li
          key={d.name}
          data-key={d.name}
          className={allClasses}
          onClick={this.DropDownGetIcon}
          style={{
            color: this.state.IconColor,
            backgroundColor: this.state.IconBGColor,
            borderColor: this.state.IconBorderColor
          }}
        >
          <i className={d.name} data-key={d.name} />
        </li>
      );
    });
    return iconLists;
  }

  showIconsListValue = () => {
    if (this.state.showIconsList === 'none') {
      this.setState({ showIconsList: 'block' });
    } else {
      this.setState({ showIconsList: 'none' });
    }
  }

  render() {
    return (
      <div>
        <div className="IconPicker" onClick={this.showIconsListValue}>
          <span className="icon-selected">
            <i
              style={{
                color: '#ffffff',
                fontSize: '15px',
                position: 'relative',
                left: '8px',
                top: '9px'
              }}
              className={this.props.IconClassName}
            />
          </span>
          <span className="icon-selected">
            <i
              style={{
                color: '#ffffff',
                fontSize: '15px',
                position: 'absolute',
                right: '10px',
                top: '9px'
              }}
              className="lnr-chevron-down"
            />
          </span>
        </div>
        <div
          className="ShowIconLink"
          style={{ display: this.state.showIconsList }}
        >
          <ul id="IconList">{this.getIconLists()}</ul>
        </div>
      </div>
    );
  }
}

export default IconList;

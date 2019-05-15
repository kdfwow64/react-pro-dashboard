/* tslint:disable */
let backendHost;
let statsHost;
let searchClientId;
let mobileClientId;
let notifyClientId;
let isLocalhost;

const hostname = window && window.location && window.location.hostname;
if (hostname === 'localhost') {
  backendHost = 'http://localhost:8080';
  statsHost =
    'https://ntc3l0mzug.execute-api.us-west-1.amazonaws.com/prod/stats';
  searchClientId = '5cde9fd51ecfa75fabe6234aecede613';
  mobileClientId = 'df94a32319144174b46b49e00416225a';
  notifyClientId = '7856c25fc802fc4adfa5c7d56370276d';
  isLocalhost = true;
} else if (hostname === 'saasclient.s3-website-us-west-1.amazonaws.com') {
  backendHost = 'https://thesearchit.com';
  statsHost =
    'https://f0pcpw0738.execute-api.us-west-1.amazonaws.com/prod/stats';
  searchClientId = '602ab284d6b0ed6da2af9716595096d0';
  mobileClientId = 'e9b21f8a8bb4b81428d13e1ccc0a6a31';
  notifyClientId = '4af73217bbd0757bd3cb751dec6cef9b';
  isLocalhost = false;
} else if (hostname === 'd2kmm0jpigycxg.cloudfront.net') {
  backendHost = `https://thesearchit.com`;
  statsHost =
    'https://f0pcpw0738.execute-api.us-west-1.amazonaws.com/prod/stats';
  searchClientId = '602ab284d6b0ed6da2af9716595096d0';
  mobileClientId = 'e9b21f8a8bb4b81428d13e1ccc0a6a31';
  notifyClientId = '4af73217bbd0757bd3cb751dec6cef9b';
  isLocalhost = false;
} else {
  backendHost = 'https://thesearchit.com';
  statsHost =
    'https://f0pcpw0738.execute-api.us-west-1.amazonaws.com/prod/stats';
  searchClientId = '602ab284d6b0ed6da2af9716595096d0';
  mobileClientId = 'e9b21f8a8bb4b81428d13e1ccc0a6a31';
  notifyClientId = '4af73217bbd0757bd3cb751dec6cef9b';
  isLocalhost = false;
}

backendHost = 'https://thesearchit.com';
// backendHost = 'http://localhost:8080';
statsHost = 'https://f0pcpw0738.execute-api.us-west-1.amazonaws.com/prod/stats';

export const API_ROOT = `${backendHost}`;
export const STATS_ROOT = `${statsHost}`;
export const SEARCH_CLIENT_ID = `${searchClientId}`;
export const MOBILE_CLIENT_ID = `${mobileClientId}`;
export const NOTIFY_CLIENT_ID = `${notifyClientId}`;
export const IS_LOCALHOST = `${isLocalhost}`;

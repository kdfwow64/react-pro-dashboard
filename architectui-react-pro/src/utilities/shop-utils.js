import Storage from './storage-util';

export default function getShop() {
  return (
    Storage.local.get('jhi-shop') ||
    Storage.session.get('jhi-shop') ||
    'Unknown'
  );
}

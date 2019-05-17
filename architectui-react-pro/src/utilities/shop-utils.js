import Storage from './storage-util';

export function getShop() {
  return (
    Storage.local.get('jhi-shop') ||
    Storage.session.get('jhi-shop') ||
    'Anonymous'
  );
}

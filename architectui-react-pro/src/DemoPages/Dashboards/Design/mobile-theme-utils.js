export const themeColorFromName = themeName => {
  let themeColor = '';
  if (themeName === 'default') {
    themeColor = '#0ebed0';
  }
  if (themeName === 'ice') {
    themeColor = '#7ee0db';
  }
  if (themeName === 'moonlight') {
    themeColor = '#CCCCCC';
  }
  if (themeName === 'bee') {
    themeColor = '#fff700';
  }
  if (themeName === 'lavender') {
    themeColor = '#9B59B6';
  }
  if (themeName === 'fire') {
    themeColor = '#f3234a';
  }
  if (themeName === 'emerald') {
    themeColor = '#2ecc71';
  }
  if (themeName === 'night') {
    themeColor = '#000000';
  }
  if (themeName === 'flamingo') {
    themeColor = '#EF4836';
  }
  return themeColor;
};

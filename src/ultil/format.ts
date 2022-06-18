export const changeAlias = (str = '') => {
  if (!str || !str.length) return '';

  str = str.trim().toLowerCase();

  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(
    // eslint-disable-next-line no-useless-escape
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  str = str.replace(/ + /g, ' ');

  return str;
};

export const formatCurrency = (_number) => {
  if (null === _number || 'undefined' === typeof _number || true === isNaN(_number)) {
    return '0 đ';
  }

  return `${formatNumber(_number)} đ`;
};

export const formatNumber = (_number: number | any) => {
  /**
   * Validate value
   * - NULL
   * - UNDEFINED
   * NOT A NUMBER
   */
  if (null === _number || 'undefined' === typeof _number || true === isNaN(_number)) {
    return '0';
  }

  const signValue = _number < 0 ? '-' : '';
  const absValue = Math.abs(_number);

  return signValue + absValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const getUrlParameter = (url, key) => {
  key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
  let results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

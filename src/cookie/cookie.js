const isProduct = process.env.NODE_ENV === 'production';
export function setCookie(cname, cvalue, exdays, path, domain) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; ' + expires + ';path=' + path + ';domain=' + domain;
}
// 获取cookie
export default function getCookie(key) {
  console.log(document.cookie);
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(key + '=');
    if (start !== -1) {
      start = start + key.length + 1;
      let end = document.cookie.indexOf(';', start);
      if (end === -1) end = document.cookie.length;
      return unescape(document.cookie.substring(start, end));
    }
  }
  return '';
}

//删除cookie
export function deleteCookie(name) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null)
    document.cookie =
      name +
      '=' +
      cval +
      ';expires=' +
      exp.toGMTString() +
      `;path='/';domain=${isProduct ? '.7x-networks.net' : ''}`;
}
// 系统初始化时cookie的相关操作
export function initActionCookie() {
  // sessionStorage.clear();
  const userName = decodeURIComponent(location.hash.slice(location.hash.indexOf('user=') + 5));
  // console.log('userName----', userName);
  const token = getCookie(userName + '_token');
  // console.log('token----', token);
  const productList = getCookie(userName + '_productList');
  const returnUrl = getCookie(userName + '_returnUrl');
  // console.log('init-----', token);
  token && sessionStorage.setItem('oauth', token);
  productList && sessionStorage.setItem('productList', productList);
  returnUrl && sessionStorage.setItem('returnUrl', returnUrl);
  userName && sessionStorage.setItem('username', userName);
  deleteCookie(userName + '_token');
  deleteCookie(userName + '_productList');
  deleteCookie(userName + '_returnUrl');
}
// 系统跳转cookie的相关操作
export function jumpActionWIthCookie() {
  const userName = sessionStorage.getItem('username');
  const token = sessionStorage.getItem('oauth');
  const productList = sessionStorage.getItem('productList');
  const returnUrl = sessionStorage.getItem('returnUrl');

  document.cookie = `${userName}_productList=${productList};path='/';domain=${
    isProduct ? '.7x-networks.net' : ''
  }`;

  document.cookie = `${userName}_token=${token};path='/';domain=${
    isProduct ? '.7x-networks.net' : ''
  }`;

  document.cookie = `${userName}_returnUrl=${returnUrl};path='/';domain=${
    isProduct ? '.7x-networks.net' : ''
  }`;
}

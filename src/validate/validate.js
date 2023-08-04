export const isFloat = (value) => {
  var regex = '/^[-+]?([0-9]+(.[0-9]*)?|.[0-9]+)$/';

  if (eval(regex).test(value)) {
    return true;
  } else {
    return false;
  }
};
export const passwordValidate = (value) => {
  // console.log("value"+value)

  let regex = '/^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\\da-zA-Z~!@#$%^&*]{8,}$/';

  if (eval(regex).test(value)) {
    return true;
  } else {
    return false;
  }
};

export const isInt = (value) => {
  var regex = '/^[1-9]+[0-9]*$/';

  if (eval(regex).test(value)) {
    return true;
  } else {
    return false;
  }
};

export const iopsDisplay = (data) => {
  if (data === undefined || data === null) {
    return 0;
  }
  if (data < 1200) {
    return data.toFixed(2);
  } else if (data < 1200 * 1024) {
    let a = data / 1000;
    return a.toFixed(2) + ' K';
  } else if (data < 1200 * 1024 * 1024) {
    let a = data / 1000 / 1000;
    return a.toFixed(2) + ' M';
  } else if (data < 1200 * 1024 * 1024 * 1024) {
    let a = data / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' G';
  } else {
    let a = data / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' T';
  }
};
// 转成流量单位
export const percentageDisplay = (data) => {
  return data + '%';
};

export const temperatureDisplay = (data) => {
  return data.toString() + '℃';
};

export function bandwidthToSize(bytes) {
  if (bytes < 1) return '0 bps';
  let k = 1000, // or 1024 or 1000
    sizes = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'],
    i = Math.floor(Math.log(bytes) / Math.log(k)); //Math.floor返回小于等于x的最大整数:,Math.log返回k的自然对数:
  return (bytes / Math.pow(k, i)).toPrecision(4) + ' ' + sizes[i]; //Math.pow(k, i),返回 k 的 i 次幂 (k*k*k):,toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法，把数字格式化为指定的长度:。
}

export const bandwidthDisplay = (originData) => {
  let data = originData;
  if (typeof data === 'string') {
    data = Number(data.replace(/\s*/g, ''));
  }
  data = data | 0;
  if (data < 1100) {
    return data.toFixed(2) + ' bps';
  } else if (data < 1100000) {
    let a = data / 1000;
    return a.toFixed(2) + ' Kbps';
  } else if (data < 1100000000) {
    let a = data / 1000 / 1000;
    return a.toFixed(2) + ' Mbps';
  } else if (data < 1100000000000) {
    let a = data / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' Gbps';
  } else if (data < 1100000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' Tbps';
  } else if (data < 1100000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' Pbps';
  } else if (data < 1100000000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' Ebps';
  } else if (data < 1100000000000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' Zbps';
  } else if (data < 1100000000000000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + ' Ybps';
  }
};
export const bandwidthDisplayXLabel = (originData) => {
  let data = originData;
  if (typeof data === 'string') {
    data = data.indexOf(' ') === -1 ? Number(data.trim()) : Number(data);
  }
  data = Number(data);
  if (data < 1100) {
    return data.toFixed(1) + ' bps';
  } else if (data < 1100000) {
    let a = data / 1000;
    return a.toFixed(1) + ' Kbps';
  } else if (data < 1100000000) {
    let a = data / 1000 / 1000;
    return a.toFixed(1) + ' Mbps';
  } else if (data < 1100000000000) {
    let a = data / 1000 / 1000 / 1000;
    return a.toFixed(1) + ' Gbps';
  } else if (data < 1100000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(1) + ' Tbps';
  } else if (data < 1100000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(1) + ' Pbps';
  } else if (data < 1100000000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(1) + ' Ebps';
  } else if (data < 1100000000000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(1) + ' Zbps';
  } else if (data < 1100000000000000000000000000) {
    let a = data / 1000 / 1000 / 1000 / 1000 / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(1) + ' Ybps';
  }
};

export const byteToSizeDisplayXLabel = (originData) => {
  let data = originData;
  if (typeof data === 'string') {
    data = data.indexOf(' ') == -1 ? Number(data.trim()) : Number(data);
  }
  data = Number(data);
  if (data < 1100) {
    return data.toFixed(1) + ' B';
  } else if (data < 1100000) {
    let a = data / 1024;
    return a.toFixed(1) + ' KB';
  } else if (data < 1100000000) {
    let a = data / 1024 / 1024;
    return a.toFixed(1) + ' MB';
  } else if (data < 1100000000000) {
    let a = data / 1024 / 1024 / 1024;
    return a.toFixed(1) + ' GB';
  } else if (data < 1100000000000000) {
    let a = data / 1024 / 1024 / 1024 / 1024;
    return a.toFixed(1) + ' TB';
  } else if (data < 1100000000000000000) {
    let a = data / 1024 / 1024 / 1024 / 1024 / 1024;
    return a.toFixed(1) + ' PB';
  } else if (data < 1100000000000000000000) {
    let a = data / 1024 / 1024 / 1024 / 1024 / 1024 / 1024;
    return a.toFixed(1) + ' EB';
  } else if (data < 1100000000000000000000000) {
    let a = data / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024;
    return a.toFixed(1) + ' ZB';
  } else if (data < 1100000000000000000000000000) {
    let a = data / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024;
    return a.toFixed(1) + ' YB';
  }
};

export const isIP = (str) => {
  var pr = /^\/([1-9]|1[0-9]|2[0-9]|3[0-2])$/;
  var ip = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])((\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3})$/;
  if (str.indexOf('/') != -1) {
    var p1 = str.substr(str.indexOf('/'));
    var p0 = str.substr(0, str.indexOf('/'));
    return ip.test(p0) && pr.test(p1);
  } else {
    return ip.test(str);
  }
};

export const isNetMask = (value) => {
  var regex =
    '/(254|252|248|240|224|192|128|0)\\.0\\.0\\.0|255\\.(254|252|248|240|224|192|128|0)\\.0\\.0|255\\.255\\.(254|252|248|240|224|192|128|0)\\.0|255\\.255\\.255\\.(255|254|252|248|240|224|192|128|0)/';
  if (eval(regex).test(value)) {
    return true;
  } else {
    return false;
  }
};

export const isDest = (value) => {
  var regex = '/^(?:[0-9]{1,3}.){3}[0-9]{1,3}$/';
  if (eval(regex).test(value)) {
    return true;
  } else {
    return false;
  }
};

export const isIPLst = (value) => {
  var regex =
    '/^([1-9]|[1-9]\\d|1\\d{2}|2[0-1]\\d|22[0-3])((\\.(\\d|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])){3})(([//](\\d|[1-2]\\d|[3][0-2]))?)$/';
  if (eval(regex).test(value)) {
    return true;
  } else {
    if ('0.0.0.0/0' == value) {
      return true;
    }
    return false;
  }
};

export const isHostname = (value) => {
  var regex = '/^[a-zA-Z0-9]+(([.]?[a-zA-Z0-9]+)*([-]*[a-zA-Z0-9]+)*)*$/';
  if (eval(regex).test(value)) {
    return true;
  } else {
    if ('0.0.0.0/0' == value) {
      return true;
    }
    return false;
  }
};

export const isPort = (value) => {
  var regex = '/^[1-9]+[0-9]*$/';

  if (eval(regex).test(value)) {
    return value >= 0 && value < 65536;
  }
  return false;
};

export const isPhone = (value) => {
  var regex = '/^(\\+?0?86\\-?)?((13\\d|14[57]|15[^4,\\D]|17[678]|18\\d)\\d{8}|170[059]\\d{7})$/';

  if (eval(regex).test(value)) {
    return true;
  }
  return false;
};

export const isEmail = (value) => {
  var regex =
    "/^[\\w!#$%&'*+/=?'{|}~^-]+(?:\\.[\\w!#$%&'*+/=?'{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$/";

  if (eval(regex).test(value)) {
    return true;
  }
  return false;
};

export const isMac = (mac) => {
  var temp =
    /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
  if (!temp.test(mac)) {
    return false;
  }
  return true;
};

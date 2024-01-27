import { dns, dnsImage } from "./constant";
import * as SecureStore from 'expo-secure-store';
import { ToastAndroid } from 'react-native';
  
  export const url = (path:any=null) => {
    if (is_null(path)) {
      return null;
    } else {
      return dns + "/" + path;
    }
  };
  
  export const imageUrl = (path:any=null) => {
    if (is_null(path)) {
      return null;
    } else {
      return dnsImage + "/" + path;
    }
  };
  
  export const getUrl = () => {
    return dns + "/";
  };
  
  export const removeDomainFromUrl = (url:any) => {
    let editedUrl=url;
    for(let i=0;i<5;i++){
      editedUrl=editedUrl.replace(getUrl(), "")
    }
    return editedUrl;
  };

  export const addMillisecondToUrl = () => {
    const date = new Date();
    return (
      date.getMilliseconds() + "" + date.getSeconds() + "" + date.getMinutes()
    );
  };
  
  export const rnd = (path:any) => {
    return Math.floor(Math.random() * 10);
  };
  
  
  export const storeStars = (rate:any) => {
    const array = [];
    for (let i = 1; i <= rate; i++) {
      array.push(i);
    }
    return array;
  };
  
  export const number_format = (number:any=null, decimals:any=undefined, decPoint:any=undefined, thousandsSep:any=undefined) => {
    let num = (number + "").replace(/[^0-9+\-Ee.]/g, "");
    const n = !isFinite(+num) ? 0 : +num;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSep === "undefined" ? "," : thousandsSep;
    const dec = typeof decPoint === "undefined" ? "." : decPoint;
    let s:any = "";
  
    const toFixedFix = function (n:any, prec:any) {
      if (("" + n).indexOf("e") === -1) {
        let toBeRound:any=n + "e+" + prec
        return +(Math.round(toBeRound) + "e-" + prec);
      } else {
        const arr = ("" + n).split("e");
        let sig = "";
        if (+arr[1] + prec > 0) {
          sig = "+";
        }
        let tbr:any=+arr[0] + "e" + sig + (+arr[1] + prec)
        return (+(
          Math.round(tbr) +
          "e-" +
          prec
        )).toFixed(prec);
      }
    };
  
    // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec).toString() : "" + Math.round(n)).split(".");
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
  
    return s.join(dec);
  };
  
  export const number_unformat = (number:any) => {
    return parseInt(number.toString().replace(/\D/g, ""));
  };
  
  export const avatarFirstLetters = (name:any) => {
    if (typeof name == "undefined") {
      return name;
    }
    const nameArray = name.split(" ");
    let firstLetters = "";
    nameArray.forEach((name:any, index:any) => {
      if (index <= 1) {
        firstLetters += name.charAt(0) + " ";
      }
    });
    return firstLetters.trimEnd();
  };
  
  export const is_null = (variable:any) => {
    if (
      variable == null ||
      variable == "" ||
      variable == undefined ||
      variable == "null" ||
      variable == "NaN" ||
      variable == "undefined" ||
      variable.length == 0 ||
      typeof variable == "undefined"
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  export const storeData = async (key:any, value:any) => {
    try {
      await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (e) {
    }
  };
  
  export const getData = async (key:any) => {
    try {
      const data:any = await SecureStore.getItemAsync(key);
      if (is_null(data)) {
        return null;
      }
      return JSON.parse(data);
    } catch (e) {}
  };
  
  export const diffDays = (dates:any) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = Date.parse(dates[0]);
    const secondDate = Date.parse(dates[1]);
  
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  
    return diffDays;
  };
  
  export const minutesToTime = (min:any) => {
    return {
      minutes: min,
      day: Math.floor(min / 24 / 60),
      hour: Math.floor((min / 60) % 24),
      min: Math.floor(min % 60),
    };
  };
  
  export const secondsToTime = (secs:any) => {
    const sec_num = parseInt(secs); // don't forget the second param
    let hours:any = Math.floor(sec_num / 3600);
    let minutes:any = Math.floor((sec_num - hours * 3600) / 60);
    let seconds:any = sec_num - hours * 3600 - minutes * 60;
  
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };
  
  export const array = (length:any) => {
    return Array.from({ length }, (v, i) => i);
  };
  
  export const percentageOf = (A:any, B:any) => {
    return ((A - B) / B) * 100;
  };
  
  export const calcImageHeight = (imageW:any, imageH:any, width:any) => {
    return imageH * (width / imageW);
  };
  
  export const setNewTimeStamp = (data:any) => {
    data.passedDay = 0;
    data.passedMinute = 0;
    data.passedSecond = 0;
    return data;
  };
  
  export const getCreatedAt = (passedDay:any, passedMinute:any, passedSecond:any) => {
    if (passedSecond == 0) {
      return "لحظاتی پیش";
    }
  
    if (passedSecond < 60) {
      return `${passedSecond} seconds ago`;
    }
  
    if (passedMinute < 60) {
      return `${passedMinute} minutes ago`;
    }
  
    if (passedDay == 0) {
      let n:any=passedMinute / 60
      return `${number_format(n)} hours ago`;
    }
  
    if (passedDay > 0 && passedDay < 7) {
      return `${number_format(passedDay)} روز days ago`;
    }
  
    if (passedDay > 6 && passedDay < 365) {
      let n:any=passedDay / 7
      return `${number_format(n)} weeks ago`;
    }
  
    if (passedDay >= 365) {
      let n:any=passedDay / 365
      return `${number_format(n)} years ago`;
    }
  };
  
  export const ErrorsToString = (errors:any) => {
    let errs = "";
    {
      Object.keys(errors).map(
        (message, index) => (errs += `- ${errors[message][0]} \n`),
      );
    }
    return errs;
  };
  
  export const randomInteger = (max:any) => {
    return Math.floor(Math.random() * (max + 1));
  };
  
  export const randomHexColor = () => {
    const [r, g, b] = randomRgbColor();
  
    const hr = r.toString(16).padStart(2, "0");
    const hg = g.toString(16).padStart(2, "0");
    const hb = b.toString(16).padStart(2, "0");
  
    return "#" + hr + hg + hb;
  };
  
  export const randomRgbColor = () => {
    const r = randomInteger(255);
    const g = randomInteger(255);
    const b = randomInteger(255);
    return [r, g, b];
  };
  
  export const currentDate2Seconds = () => {
    let d:any=Math.floor(Date.now() / 1000)
    return parseInt(d);
  };
  
  export const remainingSeconds = (sec:any) => {
    const remaining = sec - currentDate2Seconds();
    return remaining;
  };

  export const paginate = (items:any, page = 1, perPage = 3) => {
    page = page * perPage - 1;
    return items.filter((item:any, key:any) => {
      if (key <= page) {
        return item;
      }
    });
  };

  export const toast = (message, duration = null) => {
    switch (duration) {
      case true:
        duration = ToastAndroid.LONG;
        break;
      case "null":
        duration = ToastAndroid.LONG;
        break;
      case "LONG":
      case "long":
        duration = ToastAndroid.LONG;
        break;
      case "SHORT":
      case "short":
        duration = ToastAndroid.SHORT;
        break;
      default:
        duration = ToastAndroid.SHORT;
        break;
    }
  
    ToastAndroid.show(message, duration);
  };
  
  export const digitToArray = (digit:any) => {
    const digitArray = [];
    for (let i = 1; i <= digit; i++) {
      digitArray.push(i);
    }
    return digitArray;
  };
  
  export const sortBy = (items:any, type:any) => {
    switch (type) {
      case "Asc":
        return items.sort((a:any, b:any) => (a.amount > b.amount ? 1 : -1));
      case "Desc":
        return items.sort((a:any, b:any) => (a.amount < b.amount ? 1 : -1));
    }
  };
  
  export const odd = (number:any) => {
    if (number % 2 != 0) {
      return true;
    }
    return false;
  };
  
  export const even = (number:any) => {
    if (number % 2 == 0) {
      return true;
    }
    return false;
  };
  
  export const getItemImage = (image:any) => {
    if (!is_null(image)) {
      return image.url["tiny_2x"];
    }
  };
  
  export const calcHeight = (originalHeight:any, originalWidth:any, newWidth:any) => {
    return (originalHeight / originalWidth) * newWidth;
  };
  
  export const ReachedEnd = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }:any) => {
    const paddingToBottom = 0;
    return (
      layoutMeasurement.height + contentOffset.y + 1 >=
      contentSize.height - paddingToBottom
    );
  };
  
  export const instagramUserName = (name = "") => {
    if (is_null(name)) {
      return "";
    }
    if (
      name.includes("instagram.com") ||
      name.includes("https://instagram.com/") ||
      name.includes("http://instagram.com/") ||
      name.includes("https://www.instagram.com/")
    ) {
      let str = name.replace("https://www.instagram.com/", "");
      str = str.replace("https://instagram.com/", "");
      str = str.replace("http://instagram.com/", "");
      str = str.replace("instagram.com", "");
      str = str.replace("/", "");
      return str;
    }
    return name.replace("@", "");
  };
  
  export const telegramUserName = (name = "") => {
    if (is_null(name)) {
      return "";
    }
    let str = name.replace("https://www.telegram.me/", "");
    str = str.replace("https://www.t.me/", "");
    str = str.replace("https://t.me/", "");
    str = str.replace("https://telegram.me/", "");
    str = str.replace("http://telegram.me/", "");
    str = str.replace("telegram.me", "");
    str = str.replace("/", "");
    return str;
  };
  
  export const removeTags = (string:any) => {
    const regex = /(<([^>]+)>)/gi;
    return string.replace(regex, "");
  };
  
  export const productLink = (id:any) => {
    return `${dns}/p_${id}.aspx`;
  };
  
  export const ProductScreenParams = (item:any) => {
    return {
      product: { name: item.name },
      product_id: item.id,
      images: [{ url: item.image }],
    };
  };
  
  export const ProductScreenParams1 = (item:any) => {
    return {
      product: { name: item.name },
      product_id: item.id,
      images: [{ url: getItemImage(item.image) }],
    };
  };
  
  export const checkIsTimeBetween = (startTime = "08:00", endTime = "23:30") => {
    const currentDate:any = new Date();
  
    const startDate:any = new Date(currentDate.getTime());
    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);
    //startDate.setSeconds(startTime.split(":")[2]);
  
    const endDate:any = new Date(currentDate.getTime());
    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);
    //endDate.setSeconds(endTime.split(":")[2]);
  
    return startDate <= currentDate && endDate >= currentDate;
  };
  
  export const getStoresCount = (
    loaded = false,
    offline_prices=[],
    online_prices=[],
  ) => {
    if (!loaded) {
      return 0;
    }
    const offlineprices = offline_prices.length;
    const onlineprices = online_prices.length;
    return {
      total: offlineprices + onlineprices,
      online_prices: onlineprices,
      offline_prices: offlineprices,
    };
  };
  
  export const dataURItoBlob=(dataURI:any)=> {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
  
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
  
    // create a view into the buffer
    var ia = new Uint8Array(ab);
  
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
  
    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], {type: mimeString});
    return blob;
  
  }
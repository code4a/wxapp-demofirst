var md5 = require('md5.js');

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatVideoTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  time = parseInt(time)
  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatAudioTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  time = parseInt(time)
  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}


//获取Token
 function getToken(time) {
  var token = time + getPswId();
  console.log(token);
   return md5.hex_md5(token);
 }

function getKo(){
  return '0000';
}

function getTime(){
  return getNowFormatDate();
}

function getPswId(){
  return '0010000app';
}


function tokenAndKo(map){
  let time = getTime();
  map.set('ko',getKo());
  map.set('time',time);
  map.set('token',getToken(time));
  return map;
}

/**
 * 转换地址数据
 * */ 
function replacePhone(arr,isreplace){
  var newAddr =[]
  for(let i = 0 ; i < arr.length; i++){
    if(isreplace){
      let phone = arr[i].phone
      arr[i].phone = phone.replace(phone.substring(3,7),'****')
    }
    newAddr[i] = arr[i].name + ' ' + arr[i].phone + '\n' + arr[i].province + arr[i].city + arr[i].addr
  }
  
  return newAddr
}

function formatSimpleTime(time) {
  let date = new Date(time);
  return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

module.exports = {
  formatSimpleTime: formatSimpleTime,
  formatTime: formatTime,
  formatVideoTime: formatVideoTime,
  formatAudioTime: formatAudioTime,
  getToken:getToken,
  getKo:getKo,
  getTime:getTime,
  getPswId,getPswId,
  tokenAndKo,tokenAndKo,
  replacePhone : replacePhone
}

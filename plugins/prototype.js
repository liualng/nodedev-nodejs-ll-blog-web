import Vue from 'vue'
/**
 * @param phone 手机号码
 * @returns {boolean}
 */
Vue.prototype.phoneValidate = function(phone) {
  phone = phone || "";
  let phoneReg = /^1\d{2}(\d|\*){4}\d{4}$/;
  return phoneReg.test(phone);
};
/**
 * @param email 邮箱
 * @returns {boolean}
 */
Vue.prototype.emailValidate = function(email) {
  email = email || "";
  let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  return emailReg.test(email);
};
/**
 * @param idcard 身份证
 * @returns {boolean}
 */
Vue.prototype.idcardValidate = function(idcard) {
  idcard = idcard || "";
  let idcardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return idcardReg.test(idcard);
};
/**
 * @param number 数字
 * @returns {boolean}
 */
Vue.prototype.numberValidate = function(number) {
  number = number || "";
  let numberReg = /^[0-9]+.?[0-9]*$/;
  return numberReg.test(number);
};
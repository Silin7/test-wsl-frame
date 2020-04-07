/**
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {};
  // api接口请求地址
  // window.SITE_CONFIG['baseUrl'] = 'http://10.2.2.157:8089/srmApi';
  // window.SITE_CONFIG['baseUrl'] = 'http://10.2.2.162:8089/srmApi';
  // window.SITE_CONFIG['baseUrl'] = 'http://10.2.2.34:8089/srmApi';
  window.SITE_CONFIG['baseUrl'] = 'http://192.168.5.198:8686/srmApi'; // 测试机
  window.SITE_CONFIG['showTest'] = false
  // let hrefUrl = window.location.origin
  // window.SITE_CONFIG['baseUrl'] = hrefUrl + '/srmApi';
  // api接口请求地址
  // window.SITE_CONFIG['baseUrl'] = 'http://10.1.5.130:8089';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();

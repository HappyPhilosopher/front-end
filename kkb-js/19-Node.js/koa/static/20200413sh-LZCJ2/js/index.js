var Utils = {
  /**
   * 获取查询字符中目标参数的值
   * @param {String} name 目标参数
   * @return {String} 目标参数的值
   */
  getQuerystring(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)($|&)');
    var result = window.location.search.substring(1).match(reg);
    if (result && result[2]) {
      return decodeURIComponent(result[2]);
    } else {
      return null;
    }
  },
};

var innerHeight = window.innerHeight;
var scale = innerHeight / 677;

$('body').css({
  paddingTop: `${scale * 0.88}rem`,
});

$('.title').css({
  width: `${scale * 2.3}rem`,
  height: `${scale * 0.58}rem`,
});

$('.sub-title').css({
  width: `${scale * 3.28}rem`,
  height: `${scale * 0.48}rem`,
  margin: `${scale * 0.2}rem auto 0`,
});

$('.content-wrapper').css({
  width: `${scale * 5.78}rem`,
  height: `${scale * 10.77}rem`,
  paddingTop: `${scale * 1.32}rem`,
});

$('.content').css({
  width: `${scale * 5.1}rem`,
  height: `${scale * 9}rem`,
});

$('.btn').css({
  width: `${scale * 4}rem`,
  height: `${scale * 0.8}rem`,
  borderRadius: `${scale * 0.4}rem`,
  boxShadow: `0 ${scale * 0.1}rem ${scale * 0.1}rem rgba(0, 0, 0, 0.2)`,
});

$('.copyright').css({
  padding: `0 ${scale * 0.38}rem`,
});

var aid = Utils.getQuerystring('aid');
var downloadLink = `http://download.qh5800.com/download/com.ykkg.lz/current/app-LZCJ-${aid}-release.apk`;
$('.btn').attr('href', aid ? downloadLink : 'javascript:;');

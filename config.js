window.API_BASE = "https://api.ethg1018trht.cyou";
window.JS_VER = "11";
window.loadJs = function (file) {
  document.write('<script src="' + file + "?v=" + encodeURIComponent(window.JS_VER || "") + '"><\/script>');
};

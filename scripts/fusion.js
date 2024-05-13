const scriptName = "获取丰声token";
$.notification.post(scriptName, "", "test");
async function getToken() {
  try {
    let currentToken = $.request.headers.token || $.request.headers.Token;
    $.notification.post(scriptName, "", currentToken);
  } catch (err) {
    $.logger.error(`获取token异常，${err}`);
  }
}

(async () => {
  await getToken();
  $.done();
})();

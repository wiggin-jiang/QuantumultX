const scriptName = "获取丰声token";

async function getWebOrAppCookie() {
  try {
    let currentToken = $.request.headers.token || $.request.headers.Token;
    $.notification.post(scriptName, "", currentToken);
  } catch (err) {
    $.logger.error(`获取token异常，${err}`);
  }
}

(async () => {
  await getWebOrAppCookie();
  $.done();
})();

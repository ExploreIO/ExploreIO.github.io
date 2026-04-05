document.addEventListener("DOMContentLoaded", function () {
  // 直接创建时间显示区域
  var timeBox = document.createElement("div");
  timeBox.id = "blog-runtime";
  timeBox.style.textAlign = "center";
  timeBox.style.margin = "8px 0";
  timeBox.innerHTML = '<span id="time"></span>';

  // 直接插入页面底部最显眼位置（无视主题结构）
  document.body.appendChild(timeBox);

  // 加载计时核心
  var script = document.createElement("script");
  script.src = "/js/time.js";
  document.body.appendChild(script);
});
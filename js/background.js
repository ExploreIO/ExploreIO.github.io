console.log("✅ background.js 加载成功！");

function setFullScreenBackground() {
  const webBg = document.getElementById('web_bg');
  if (!webBg) {
    console.warn("❌ 未找到 #web_bg 元素");
    return;
  }

  const banner = document.querySelector('#banner') || document.querySelector('.banner');
  if (!banner) {
    console.warn("❌ 未找到 #banner / .banner");
    return;
  }

  // 读取 banner 背景图
  const bg = window.getComputedStyle(banner).backgroundImage;
  if (!bg || bg === 'none') {
    console.warn("❌ banner 无背景图");
    return;
  }

  // 设置全屏背景
  webBg.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -9999;
    background-image: ${bg};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  // 清除原 banner 背景 + 透明遮罩
  banner.style.backgroundImage = 'none';
  const mask = banner.querySelector('.mask');
  if (mask) mask.style.backgroundColor = 'rgba(0,0,0,0)';

  console.log("✅ 全屏背景设置完成！");
}

// 页面加载完执行
if (document.readyState === 'complete') {
  setFullScreenBackground();
} else {
  window.addEventListener('load', setFullScreenBackground);
}
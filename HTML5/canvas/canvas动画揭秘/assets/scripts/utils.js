// canvas的基本工具函数
let C = {};

/**
 * 获取鼠标相对于元素的位置
 * @param {Object} ele DOM元素
 * @return {Object} 鼠标相对于元素的位置对象
 */
C.getOffset = function(ele) {
  let mouse = { x: 0, y: 0 };
  ele.addEventListener('mousemove', function(e) {
    let { x, y } = C.eventWrapper(e);
    mouse.x = x;
    mouse.y = y;
  });
  return mouse;
};

/**
 * 转换坐标系到目标元素
 */
C.eventWrapper = function(e) {
  const { pageX, pageY, target } = e;
  const { top, left } = target.getBoundingClientRect();
  return { x: pageX - left, y: pageY - top };
};

/**
 * 角度转弧度
 * @param {Number} deg 角度
 */
C.toRad = function(deg) {
  return (deg * Math.PI) / 180;
};

/**
 * 角度转弧度
 * @param {Number} rad 弧度
 */
C.toDeg = function(rad) {
  return (180 * rad) / Math.PI;
};

/**
 * 生成规定范围内的随机数
 * @param {Array} arr 随机数的范围
 * @param {Boolean} isInt 返回值是否为整数
 */
C.generateRandomNum = function(arr, isInt) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const num = Math.random() * (max - min) + min;
  return isInt ? Math.round(num) : num;
};

C.generateRandomColor = function() {
  return `rgb(${C.generateRandomNum([55, 255], true)}, 
    ${C.generateRandomNum([55, 255], true)}, 
    ${C.generateRandomNum([55, 255], true)})`;
};

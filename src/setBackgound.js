/**
 * 设置图片背景 
 * 
 * @config: {
 *   containerId: string, 容器ID
 *   containerSize?: {w,h}, 非必填, 容器尽寸, 默认值{w: 1392, h: 784}
 *   backgroundImg: string, 图片地址
 *   position: {x,y}, 起始坐标，相对于左上角
 * }
 */ 

function setBackground (config) {
    var containerId = config.containerId;
    var backgroundImg = config.backgroundImg;
    var position = config.position;
    var containerSize = config.containerSize || {w: 1392, h: 784};
    var $container = document.getElementById(containerId);
    
    // 设置背景图
    $container.style.backgroundImage = 'url('+backgroundImg+')';
    // 设置不填充
    $container.style.backgroundRepeat = ' no-repeat';
    // 设置背景坐标
    $container.style.backgroundPosition = position.x+'px '+position.y+'px';

    // 设置容器尺寸
    $container.style.width = containerSize.w + 'px';
    $container.style.height = containerSize.h + 'px';
}
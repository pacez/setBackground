# setBackground

教学 demo， 纯JS实现无需编译。
功能描述：为容器设置背景图， 可设置容器尺寸，设置背影图右上角起始点。

```javascript
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

setBackground({
    containerId: 'demo',
    backgroundImg: './bg.jpeg',
    position: {
        x: 100,
        y: 100
    }
});
```
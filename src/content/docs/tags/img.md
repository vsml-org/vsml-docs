---
title: img
---

# img

`img` タグは VSML の要素で、`content`系のタグです。 子要素は持ちません。

デフォルトのオブジェクトの時間長は無限です。

## 属性

| 属性名 | 属性の値                   | 属性の値の例                                                                                       | 備考                                                         |
| ------ | -------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| src    | 画像ファイルのファイルパス | `./image.jpg`, `/home/user/resources/image.jpg`, `https://vsml.pigeons.house/resources/image1.png` | ファイルパスは相対パス、絶対パスどちらでも良い。URL でも可。 |

## 使用例

```xml
<cont resolution="1920x1080" fps="30">
  <img style="duration: 1s" src="./resources/image1.png" />
</cont>
```

[img.mp4](/videos/img.mp4)

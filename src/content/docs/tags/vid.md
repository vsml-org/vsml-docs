---
title: vid
---

# vid

`vid` タグは VSML の要素で、`content`系のタグです。 子要素は持ちません。

デフォルトのオブジェクトの時間長は映像ファイルの再生時間になります。

## 属性

| 属性名 | 属性の値                   | 属性の値の例                                                                                       | 備考                                                         |
| ------ | -------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| src    | 映像ファイルのファイルパス | `./video.mp4`, `/home/user/resources/video.mp4`, `https://vsml.pigeons.house/resources/video1.mp4` | ファイルパスは相対パス、絶対パスどちらでも良い。URL でも可。 |
| style  | VSS のスタイルの記述       | `duration: 12s;width: 100rw`                                                                       | 複数のスタイルを記述する場合は `;` で分割する。              |
| class  | VSS のセレクタの class 名  | `video-wrapper`, `main-serif green-serif`,                                                         | 複数の class 名を付与する場合はスペースで区切る              |
| id     | VSS のセレクタの id 名     | `main-frame`                                                                                       |                                                              |

## 使用例

```xml
<cont resolution="1920x1080" fps="30">
  <img style="duration: 1s" src="./resources/image1.png" />
</cont>
```

[vid.mp4](/videos/vid.mp4)

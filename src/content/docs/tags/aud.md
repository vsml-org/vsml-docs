---
title: aud
---

# aud

`aud` タグは VSML の要素で、`content`系のタグです。 子要素は持ちません。

デフォルトのオブジェクトの時間長は音声ファイルの再生時間になります。

## 属性

| 属性名 | 属性の値                   | 属性の値の例                                                                                       | 備考                                                         |
| ------ | -------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| src    | 音声ファイルのファイルパス | `./sound.mp3`, `/home/user/resources/sound.mp3`, `https://vsml.pigeons.house/resources/sound1.wav` | ファイルパスは相対パス、絶対パスどちらでも良い。URL でも可。 |
| style  | VSS のスタイルの記述       | `duration: 12s;width: 100rw`                                                                       | 複数のスタイルを記述する場合は `;` で分割する。              |
| class  | VSS のセレクタの class 名  | `video-wrapper`, `main-serif green-serif`,                                                         | 複数の class 名を付与する場合はスペースで区切る              |
| id     | VSS のセレクタの id 名     | `main-frame`                                                                                       |                                                              |

## 使用例

```xml
<cont resolution="1920x1080" fps="30">
  <aud src="./resources/sound1.wav" />
</cont>
```

[aud.mp4](/videos/aud.mp4)

---
title: プロパティドキュメント
---

# VSS のプロパティ

## VSS を記述する場所

VSML ファイルは、以下のように記述します。

```xml:example.vsml
<vsml>
  <meta>
    <style src="hoge.vss" />
  </meta>
  <cont resolution="1920x1080" fps="30">
    <prl>
      <img src="yellow.jpg" />
      <layer>
        <txt class="styled">これは文章です</txt>
        <txt class="styled">これもまた文章です</txt>
      </layer>
    </prl>
  </cont>
</vsml>
```

`vsml` タグで全体を囲み、その子要素に `meta` タグと `cont` タグを 1 つずつ持ちます。

`meta` タグは、`style` タグを 1 つ以上持つことができます。`style` タグは、`src` アトリビュートで指定した VSS ファイル内のスタイルの記述か、`style` タグ内のスタイルの記述を VSML ファイルに適用します。以下は `style` タグ内に VSS の記述をした例になります。

```xml
<style>
prl {
  height: 100vh;
}
</style>
```

## VSS の記法

VSS では、CSS のような記法で VSML の要素に指定する style を記述できます。

まず、タグ名、クラス名（ `.` から始まるもの）、ID 名（ `#` から始まるもの）などで、style を適用する要素を指定するセレクタを記述します。そのセレクタの後ろの `{}` に style を記述していきます。style は、プロパティとその値のペアを列挙して指定していきます。そのペアは複数指定することも可能です。

以下に VSS の記法の一例を示します。

```css
seq {
  duration: 1s;
}
.subtitles-container txt {
  font-size: 20px;
  font-border-color: red;
}
#main-frame {
  width: 100vh;
}
```

このプロパティドキュメントでは、要素に指定するプロパティとそれに指定できる値について説明していきます。

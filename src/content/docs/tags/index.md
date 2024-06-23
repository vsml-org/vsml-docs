---
title: タグドキュメント
---

# VSML のタグ

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

このタグドキュメントでは `cont` 以下に記述するタグについて説明していきます。

---
---

# VSML コンバータの導入

## Python 版(旧版)の導入

VSML コンバータは[こちら](https://github.com/PigeonsHouse/VSML/releases/latest)からダウンロードしてください。

このコンバータは VSML ファイルを読み取り、FFmpeg のコマンドを生成して、OS 上の FFmpeg を呼び出すラッパーライブラリとなっていますので、FFmpeg のインストールが必要となります。

[FFmpeg 公式サイト](https://ffmpeg.org/download.html)から FFmpeg v4 をダウンロードし、ヘッダーの `Latest Download` から使用する OS に合った実行ファイルをダウンロードしてください。

## VSML エンコーダの使用方法

エンコーダのコマンドライン引数に VSML ファイルのパスを渡すと、VSML ファイルからエンコードを行います。

```sh
$ ./main video.vsml
```

`-o` オプションで出力する動画ファイルのパスを指定できます。

```sh
$ ./main video.vsml -o video.mp4
```

`-f` オプションでフレーム数を指定するとプレビュー画像を出力します。

```sh
$ ./main video.vsml -f 20 -o preview.png
```

`--overwrite` オプションで確認せず上書きをします。

```sh
$ ./main video.vsml --overwrite
```

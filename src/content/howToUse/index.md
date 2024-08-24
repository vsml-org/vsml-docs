---
---

# VSML コンバータの導入

## Python 版(旧版)

### コンバータのインストール

VSML コンバータは[こちら](https://github.com/vsml-org/vsml_converter_old/releases/latest)からダウンロードしてください。

このコンバータは VSML ファイルを読み取り、FFmpeg のコマンドを生成して、OS 上の FFmpeg を呼び出すラッパーライブラリとなっていますので、FFmpeg のインストールが必要となります。

[FFmpeg 公式サイト](https://ffmpeg.org/download.html)から FFmpeg の v4(v4.3 以上)をダウンロードしてください。

以下のコマンドを実行し、 `configuration` 内に `--enable-libx264` のオプションが有効になっている表示が確認できれば、VSML コンバータを利用できます。

```sh
$ ffmpeg -version
```

### VSML コンバータの使用方法

コンバータのコマンドライン引数に VSML ファイルのパスを渡すと、VSML ファイルから動画へ変換を行います。

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

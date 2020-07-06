# 📝 Demandaro

Practice for self-checking web applications that are completed only by the web front end.  
Web フロントエンドのみで完結する、セルフチェック系 Web アプリの制作練習。

## Requirements / 必須環境

- (Maybe) OS independent  
  OS に依存しません。(たぶん)
- Modern web browser  
  モダンな Web ブラウザ

## Usage / 使い方

[https://kurone-kito.github.io/demandaro/karte/q1.yml](https://kurone-kito.github.io/demandaro/karte/q1.yml)  
**This will be ...**  
**これが……**

[https://kurone-kito.github.io/demandaro/?q1](https://kurone-kito.github.io/demandaro/?q1)  
**... like this.**  
**こうなります。**

The YAML file can be edited later because it is dynamically loaded.  
YAML ファイルは動的に読み込んでいるため、後から編集可能です。

## LICENSE / ライセンス情報

[Apache License 2.0](https://github.com/kurone-kito/demandaro/blob/master/LICENSE)
([日本語訳](https://osdn.net/projects/opensource/wiki/licenses%2FApache_License_2.0))

## Information for Develop / 開発者向け情報

### Additional requirements / 追加のシステム環境

- Node.js >= v14.4.0
  - for only development  
    開発時のみ必要
- Of course, knowledge of handling your OS terminal app is also essential.  
  もちろん、あなたの OS のターミナルを扱える知識も必須です。

### Setup / 初期セットアップ

```sh
git clone https://github.com/kurone-kito/demandaro.git
cd demandaro
npm ci
```

### Develop &amp; Debugging / 開発とデバッグ

```sh
npm start
```

Wait a moment and then open the web page below:  
少し待ってから、下記の Web ページを開いてください:  
[http://localhost:8000/?q1](http://localhost:8000/?q1)

While the server is running, it will do an incremental build in sync with the save, and reflect the latest code in the your browser. In some rare cases, a reload may be necessary, such as when making a significant change.  
サーバーが起動中は、保存に連動して増分ビルドを行い、ブラウザに最新のコードを反映します。大きい変更をした場合など、稀にリロードが必要になる場合もあります。

### Testing / テスト

```sh
npm test # NOT IMPLEMENTED YET. (まだ未実装)
```

### Code formatting / コード フォーマット

```sh
npm run lint
```

### Build for production / 本番用ビルドの生成

```sh
npm run build
```

### View the production build via HTTP / 本番用ビルドを http 経由で確認する

```sh
npm run serve
```

Then open the web page below:  
そして、下記の Web ページを開いてください:  
[http://localhost:9000/?q1](http://localhost:9000/?q1)

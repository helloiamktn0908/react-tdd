# 起動方法
```
// 初回立ち上げ時
$ docker-compose up --build -d

// 以降
$ docker-compose up -d
```

# 依存ファイルインストール方法
```
$ docker-compose exec app bash

// appコンテナ内
$ yarn add foo
```
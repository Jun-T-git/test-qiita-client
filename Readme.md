# アーキテクチャについて

CleanArchitectureをベースに実装。

## CleanArchitecture

### driver

APIレスポンスをJSONで受け取りrepository層へ渡す。Axios等のHTTPクライアントはこの層で使用する。必ずインターフェースを定義する。

### repository

外部データをentityに保存する時のデータの変換処理をやエラーハンドリングを行う層。必ずインターフェースを定義する。

### entity

ビジネスロジックにおけるデータの定義を記載する層でありシステムのメイン。

### useCase

ユーザーシナリオ（例えばデータ一覧を取得する, レビューするなど）のビジネスロジックにおける手順を記述する。必ずインターフェースを定義する。

### presenter

Viewにデータを渡す際にViewに合わせてデータを変換処理する層。必ずインターフェースを定義する。

### View

#### pages

Nextを使用するため、pages配下にページを定義する。なお、Nextの機能により自動でルーティングされる。

#### components

コンポーネントを定義する。

### interface

driver, repository, useCase, presenterのインターフェースを定義する層。

#### driver

インターフェースに加えて、APIレスポンスのJSONの型を定義する。

#### Presenter

インターフェースに加えて、viewModelのクラスを定義する。



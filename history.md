<!-- omit in toc -->
# 開発履歴

※上の方が新しいものです。

- Homeページを実装
  - src/views/Home.vueを編集
  - 画像ファイル
    - src/assets/logo.[png,svg]を削除
    - src/assets/yaso28.pngを追加

- タイトルおよびSEOデータを修正
  - 共通データ
    - src/consts/index.jsを編集
  - タイトル
    - src/App.vueを編集
    - public/index.htmlを編集
  - meta-description
    - src/views/[Home,Skills,Works].vueを編集
  - favicon
    - public/favicon.icoを差し替え

- Worksページを実装
  - src/views/Works.vueを編集

- Skillsページを実装
  - src/views/Skills.vueを編集

- フッターを作成
  - src/App.vueを編集

- ヘッダーおよび各ページの雛形を作成
  - vue-metaをインストール
    - npm install vue-meta
    - src/main.jsを編集
  - サイト名を定数定義に追加
    - src/consts/index.jsを追加
  - 各ページの雛形を作成
    - src/views/[Home,About].vueを編集
    - src/views/[Skills,Works].vueを追加
    - src/router/index.jsを編集
    - public/index.htmlを編集
  - ヘッダーを作成
    - src/App.vueを編集
  - 不要なファイルを削除
    - src/components/HelloWorld.vueを削除
    - src/components/.gitkeepを追加

- lint設定
  - .eslintrc.jsを編集
    - 'plugin:vue/recommended'ルールを設定
    - 動作に影響しないルールはwarningに留める
  - CSSのlintライブラリをインストール＆設定
    - npm install -D stylelint stylelint-config-standard stylelint-order stylelint-scss
    - .stylelintrc.jsを手動で追加
    - package.jsonを編集
      - lint:cssコマンドを追加

- Vuetifyをインストール
  - vue add vuetify
    - preset: Default(recommenede)

- Vue 2 をインストール
  - vue create portfolio
    - Choose Vue version
      - 2.x
    - Babel
    - Router
      - history mode: Yes
    - CSS Pre-processors
      - Sass/SCSS (with dard-sass)
    - Linter / Formatter
      - ESLint + Standard config
      - Lint on save
    - placing config
      - In dedicated config files
  - mv portfolio src

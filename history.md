<!-- omit in toc -->
# 開発履歴

※上の方が新しいものです。

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

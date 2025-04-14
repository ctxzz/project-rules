# Project Rules

AIコーディングエージェント（Cursor, Cline等）向けのルールとガイドラインを生成・管理するためのリポジトリです。プログラミング言語やプロジェクトタイプ別のルールを提供し、AIアシスタントがより適切なコード生成・レビューを行えるようにサポートします。

## 特徴

- 複数のプログラミング言語（Python, TypeScript/NodeJS, SwiftUI, Golang）に対応
- プロジェクトタイプ別（Web, Mobile, AI, Data Analysis）のルールを提供
- 共通ルールと特定のルールを組み合わせて使用可能
- Markdown形式でルールを管理し、生成時に.mdc形式に変換

## ディレクトリ構造

```
.
├── src/                    # ソースコード
│   └── generate-rules.ts   # ルール生成スクリプト
├── rules/                  # ルールファイル
│   ├── common/            # 共通ルール
│   │   ├── 000_introduction.md
│   │   ├── 001_coding.md
│   │   ├── 002_memory.md
│   │   ├── 003_git.md
│   │   └── 004_debugging.md
│   ├── language-specific/ # 言語固有のルール
│   │   ├── golang.md
│   │   ├── python.md
│   │   ├── swiftui.md
│   │   └── typescript.md
│   └── project-specific/  # プロジェクト固有のルール
│       ├── data_analysis.md
│       ├── mobile_development.md
│       ├── web_development.md
│       └── ai_development.md
├── .ai/                   # ルール生成先フォルダ
│   ├── .cursor/          # Cursor IDE用の設定
│   │   └── rules/       # Cursor向けに生成されたルールファイル（.mdc形式）
│   └── .clinerules      # cline向けに統合されたルールファイル
├── package.json         # プロジェクト設定
├── tsconfig.json        # TypeScript設定
└── README.md           # このファイル
```

## クイックスタート

1. リポジトリをクローン
```bash
git clone https://github.com/ctxzz/project-rules.git
cd project-rules
```

2. 依存関係をインストール
```bash
npm install
```

3. ルールを生成
```bash
# すべてのルールを生成
npm run generate-rules -- --all

# 特定の言語のルールを生成
npm run generate-rules -- --lang=typescript

# 特定のプロジェクトのルールを生成
npm run generate-rules -- --project=web

# 言語とプロジェクトのルールを組み合わせて生成
npm run generate-rules -- --lang=typescript --project=web
```

注意: 言語とプロジェクトの指定はそれぞれ1つまでです。複数指定した場合はエラーとなります。

## 開発ガイド

### 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# テストの実行
npm test
# または
npm run test:watch  # テストを監視モードで実行
```

### ルールファイルの作成

1. ルールファイルの配置場所
   - 共通ルール: `rules/common/`
   - 言語固有ルール: `rules/language-specific/`
   - プロジェクト固有ルール: `rules/project-specific/`

2. ファイル命名規則
   - 共通ルール: `{3桁の数字}_{名前}.md`（例: `000_introduction.md`）
   - 言語固有ルール: `{言語名}.md`（例: `typescript.md`）
   - プロジェクト固有ルール: `{プロジェクト名}.md`（例: `web_development.md`）

3. ファイル形式
   - Markdown形式で記述
   - 生成後は`.ai/.clinerules`, `.ai/.cursor/rules/`に.mdc形式で配置

4. ルールファイルの基本構造
```markdown
# タイトル

## 基本方針
- 内容1
- 内容2

## 具体的な指示
- 内容1
- 内容2

## 注意事項
- 内容1
- 内容2

## トラブルシューティング
- 内容1
- 内容2
```

### カスタマイズ

1. 新しい言語の追加
   - `rules/language-specific/`ディレクトリに新しい言語のルールファイルを作成
   - ファイル名は言語名（例: `rust.md`）

2. 新しいプロジェクトの追加
   - `rules/project-specific/`ディレクトリに新しいプロジェクトのルールファイルを作成
   - ファイル名はプロジェクト名（例: `game_development.md`）

3. 共通ルールの拡張
   - `rules/common/`ディレクトリに新しい共通ルールファイルを作成
   - ファイル名は`{3桁の数字}_{名前}.md`（例: `005_security.md`）

### トラブルシューティング

1. **ルールファイルが生成されない**
   - ファイル名の形式を確認
   - マークダウンの形式を確認
   - 生成コマンドの引数を確認

2. **生成されたファイルが正しく適用されない**
   - 生成されたファイルの内容を確認
   - AIツールの設定を確認

## 参考プロジェクト

このプロジェクトは以下の素晴らしいプロジェクトを参考にしています：

- [YuheiNakasaka/project-rules](https://github.com/YuheiNakasaka/project-rules)
- [mizchi/ailab](https://github.com/mizchi/ailab)
- [eastlondoner/cursor-tools](https://github.com/eastlondoner/cursor-tools)
- [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)

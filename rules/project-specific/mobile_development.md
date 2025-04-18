# モバイル開発指示書

## 基本方針

1. **プラットフォーム対応**
   - iOSとAndroidの両方に対応してください
   - プラットフォーム固有の機能を適切に実装してください
   - クロスプラットフォーム開発を検討してください

2. **ユーザー体験**
   - 直感的なUIを設計してください
   - パフォーマンスを最適化してください
   - アクセシビリティを考慮してください

3. **セキュリティ**
   - データの暗号化を実装してください
   - セキュアな通信を確保してください
   - プライバシー保護を徹底してください

## 具体的な指示

### 1. アプリケーション設計

1. **アーキテクチャ**
   - 適切なアーキテクチャパターンを選択してください
   - コンポーネントの責務を明確にしてください
   - 状態管理を適切に設計してください

2. **UI/UX設計**
   - プラットフォームのデザインガイドラインに従ってください
   - レスポンシブなレイアウトを実装してください
   - ユーザーフィードバックを考慮してください

3. **データ管理**
   - ローカルストレージを適切に使用してください
   - キャッシュ戦略を設計してください
   - データ同期を考慮してください

### 2. 開発プロセス

1. **開発環境**
   - 適切な開発ツールを選択してください
   - バージョン管理を徹底してください
   - CI/CDパイプラインを構築してください

2. **テスト**
   - ユニットテストを実装してください
   - UIテストを実施してください
   - パフォーマンステストを実行してください

3. **デプロイメント**
   - アプリストアのガイドラインに従ってください
   - バージョン管理を適切に行ってください
   - ロールバック計画を準備してください

### 3. パフォーマンス最適化

1. **メモリ管理**
   - メモリリークを防止してください
   - リソースの効率的な使用を心がけてください
   - キャッシュ戦略を最適化してください

2. **ネットワーク**
   - 通信の最適化を行ってください
   - オフライン対応を実装してください
   - エラーハンドリングを適切に行ってください

3. **バッテリー**
   - バッテリー消費を最適化してください
   - バックグラウンド処理を適切に管理してください
   - 位置情報の使用を最適化してください

## 注意事項

1. **セキュリティ**
   - データの暗号化を徹底してください
   - セキュアな通信を確保してください
   - プライバシー保護を徹底してください

2. **パフォーマンス**
   - アプリの起動時間を最適化してください
   - メモリ使用量を監視してください
   - ネットワーク通信を最適化してください

3. **ユーザー体験**
   - エラーメッセージを明確に表示してください
   - ローディング状態を適切に表示してください
   - ユーザーフィードバックを収集してください

## トラブルシューティング

1. **パフォーマンス問題**
   - メモリリークを調査してください
   - ネットワーク通信を最適化してください
   - バッテリー消費を分析してください

2. **互換性問題**
   - プラットフォームバージョンを確認してください
   - デバイス固有の問題を調査してください
   - 画面サイズの対応を確認してください

3. **セキュリティ問題**
   - データ漏洩のリスクを評価してください
   - 通信の安全性を確認してください
   - プライバシー保護を再確認してください 
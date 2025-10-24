# NestJS Skill Check

不動産取引価格検索API - NestJSを使用した実装

## 概要

関東地方の不動産取引価格データを検索するREST APIです。

## クイックスタート

### 1. リポジトリのクローン

```bash
git clone https://github.com/totutote/nestjs-skill-check.git
cd nestjs-skill-check
```

### 2. Dockerで起動

```bash
cd .devcontainer
docker compose up -d
```

起動すると自動的に `npm run start:dev` が実行され、ホットリロード付きの開発サーバーが起動します。

### 3. APIにアクセス

ブラウザまたはcurlでアクセス:

```bash
curl "http://localhost:3000/api/v1/townPlanning/estateTransaction/bar?year=2015&prefectureCode=13&type=1"
```

**エンドポイント**: `GET /api/v1/townPlanning/estateTransaction/bar`

**クエリパラメータ**:
- `year`: 年度 (2015-2018)
- `prefectureCode`: 都道府県コード (関東地方のみ)
- `type`: 取引種別 (1: 住宅地, 2: 商業地)

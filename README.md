# dcf-cng-token-issuer

<img width="200" alt="ロゴ" src="/logo.png">

- Cunningトークン(CNG)を発行するためのリポジトリです

## 環境構築

- 事前に [MetaMask](https://metamask.io/) をインストールしておいてください
- 事前に [GOERLI FAUCET](https://goerlifaucet.com/) からGoerilETHを受け取っておいてください
- 事前に [Alchemy](https://www.alchemy.com/) に登録し、アプリケーションを作成しておいてください
- これらの詳細な手順は参考のリンク先を参照してください

```bash
# コピー後、AlchemyのAPIキーとMetaMaskの秘密鍵を設定してください
$ cp .env.example .env
$ npm install
$ npx hardhat compile
# デプロイ後、コントラクトアドレスをMetaMaskに登録してください
$ npx hardhat run scripts/deploy.js
```

## トークンコントラクトアドレス

- `0x581E6B9fCD556afd15e8f3d31920946Ba2c0bf21`
- このアドレスはMetaMask等のウォレットにおいて、カスタムトークンをインポートする際や、トークンを送金する際に使用します

## 参考

- https://zenn.dev/yuki2020/articles/5fc934ea3682d5
- https://zenn.dev/tatsuyasusukida/articles/how-to-create-your-own-erc20-token

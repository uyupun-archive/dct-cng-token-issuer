# dcf-cng-token-issuer

- 事前に[MetaMask](https://metamask.io/)をインストールしておいてください
- 事前に[GOERLI FAUCET](https://goerlifaucet.com/)でGoerilETHを受け取っておいてください
- 事前に[Alchemy](https://www.alchemy.com/)に登録し、アプリケーションを作成しておいてください
- これらの詳細な手順は参考の項目を参照してください

```bash
# コピー後、AlchemyのAPIキーとMetaMaskの秘密鍵を設定してください
$ cp .env.example .env
$ npm install
$ npx hardhat compile
# デプロイ後、コントラクトアドレスをMetaMaskに登録してください
$ npx hardhat run scripts/deploy.js
```

## 参考

- https://zenn.dev/yuki2020/articles/5fc934ea3682d5
- https://zenn.dev/tatsuyasusukida/articles/how-to-create-your-own-erc20-token

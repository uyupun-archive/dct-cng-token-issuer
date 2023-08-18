// require('@nomiclabs/hardhat-ethers')

main()

async function main () {
  try {
    const CunningToken = await ethers.getContractFactory("CunningToken")
    const cunningToken = await CunningToken.deploy()

    console.info(`Token address: ${cunningToken.address}`)
  } catch (err) {
    console.error(err)
  }
}

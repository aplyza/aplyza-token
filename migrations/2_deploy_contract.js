var AplyzaToken = artifacts.require('AplyzaToken')
module.exports = async function (deployer) {
    let aplyza=await deployer.deploy(AplyzaToken)
    // console.log(accounts)
}
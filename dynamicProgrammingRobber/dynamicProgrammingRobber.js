/**
 * Given array with houses and money in each house, return the maximum amount of money you can rob without robbing two adjacent houses.
 */

function dynamicProgrammingRobber(houses) {
    let maxMoney = 0;
    let prevMaxMoney = 0;

    for (let i = 0; i < houses.length; i++) {
        let currentMaxMoney = Math.max(maxMoney, prevMaxMoney + houses[i]);
        prevMaxMoney = maxMoney;
        maxMoney = currentMaxMoney;
    }

    return maxMoney;
}


module.exports = { dynamicProgrammingRobber }
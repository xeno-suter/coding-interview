/**
 * You are climbing a staircase. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */

function climbingStairs(stairs) {
    let firstStep = 1;
    let secondStep = 2;
    let currentStep = 0;

    if (stairs === 1) {
        return firstStep;
    }
    if (stairs === 2) {
        return secondStep;
    }

    for (let i = 3; i <= stairs; i++) {
        currentStep = firstStep + secondStep;
        firstStep = secondStep;
        secondStep = currentStep;
    }

    return currentStep;
}


module.exports = { climbingStairs };
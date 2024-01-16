function solution(bandage, health, attacks) {
  let max = attacks[attacks.length - 1][0];

  let continuous = bandage[0];
  let currentContinuous = 0;
  let currentHealth = health;
  let recovery = bandage[1];
  let extraRecovery = bandage[2];
  let i = 0;
  function doHealing() {
    currentHealth += recovery;
    if (currentContinuous == continuous) {
      currentHealth += extraRecovery;
      currentContinuous = 0;
    }
    if (currentHealth > health) {
      currentHealth = health;
    }
  }

  for (let stage = 0; stage <= max; stage++) {
    if (attacks[i][0] == stage) {
      currentHealth -= attacks[i][1];
      i++;
      currentContinuous = 0;
      if (currentHealth <= 0) {
        console.log(-1);
        return -1;
      }
    } else {
      doHealing();
    }
    // console.log(stage, currentHealth);
    currentContinuous++;
  }
  console.log(currentHealth);
  return currentHealth;
}

// const bandage = [5, 1, 5];
// const health = 30;
// const attacks = [
//   [2, 10],
//   [9, 15],
//   [10, 5],
//   [11, 5],
// ];

// const bandage = [3, 2, 7];
// const health = 20;
// const attacks = [
//   [1, 15],
//   [5, 16],
//   [8, 6],
// ];
const bandage = [1, 1, 1];
const health = 5;
const attacks = [
  [1, 2],
  [3, 2],
];
// const bandage = [4, 2, 7];
// const health = 20;
// const attacks = [
//   [1, 15],
//   [5, 16],
//   [8, 6],
// ];
// const bandage = [3, 2, 7];
// const health = 20;
// const attacks = [
//   [1, 15],
//   [5, 16],
//   [8, 6],
// ];
// bandage = [2, 1, 10];
// health = 30;
// attacks = [
//   [1, 15],
//   [3, 1],
//   [5, 5],
//   [9, 10],
// ];
solution(bandage, health, attacks);

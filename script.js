'use strict';

// seclet elements hover
const hover1 = document.querySelector('.hover_target1');
const hover2 = document.querySelector('.hover_target2');
const hover3 = document.querySelector('.hover_target3');
const hover4 = document.querySelector('.hover_target4');
const hover5 = document.querySelector('.hover_target5');
const hover6 = document.querySelector('.hover_target6');
const hover7 = document.querySelector('.hover_target7');

// seclet elements hidden
const hidden1 = document.querySelector('.hidden1');
const hidden2 = document.querySelector('.hidden2');
const hidden3 = document.querySelector('.hidden3');
const hidden4 = document.querySelector('.hidden4');
const hidden5 = document.querySelector('.hidden5');
const hidden6 = document.querySelector('.hidden6');
const hidden7 = document.querySelector('.hidden7');

// hover1
hover1.addEventListener('mouseover', () => {
  hidden1.classList.remove('hidden1');
});

hover1.addEventListener('mouseout', () => {
  hidden1.classList.add('hidden1');
});

// hover2
hover2.addEventListener('mouseover', () => {
  hidden2.classList.remove('hidden2');
});

hover2.addEventListener('mouseout', () => {
  hidden2.classList.add('hidden2');
});

// hover2.addEventListener("mouseover", () => {
//   hidden2.classList.toggle("hidden2");
// });

// hover3 NOTE 0804 add
// hover3.addEventListener("mouseover", () => {
//   hidden3.classList.remove("hidden3");
// });

// hover3.addEventListener("mouseout", () => {
//   hidden3.classList.add("hidden3");
// });

// hover4
hover4.addEventListener('mouseover', () => {
  hidden4.classList.remove('hidden4');
});

hover4.addEventListener('mouseout', () => {
  hidden4.classList.add('hidden4');
});
// hover5
hover5.addEventListener('mouseover', () => {
  hidden5.classList.remove('hidden5');
});

hover5.addEventListener('mouseout', () => {
  hidden5.classList.add('hidden5');
});
// hover6
hover6.addEventListener('mouseover', () => {
  hidden6.classList.remove('hidden6');
});

hover6.addEventListener('mouseout', () => {
  hidden6.classList.add('hidden6');
});
// hover7
hover7.addEventListener('mouseover', () => {
  hidden7.classList.remove('hidden7');
});

hover7.addEventListener('mouseout', () => {
  hidden7.classList.add('hidden7');
});

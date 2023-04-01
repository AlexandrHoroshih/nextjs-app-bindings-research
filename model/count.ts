import { createStore, createEvent, createEffect, sample } from 'effector';

const sleepFx = createEffect(sleep);
export const up = createEvent();
export const $count = createStore(0).on([up, sleepFx.done], (s) => s + 1);
const $isClient = createStore(typeof window !== 'undefined', {
  serialize: 'ignore',
});

export const $serverCount = createStore(0);

export const serverUp = createEvent();

const serverUpFx = createEffect(async () => {
  await sleep(10);

  return Math.ceil(Math.random() * 10);
});

sample({
  clock: $count,
  filter: $isClient,
  fn: () => 1500,
  target: sleepFx,
});

sample({
  clock: serverUp,
  target: serverUpFx,
});

sample({
  clock: serverUpFx.doneData,
  target: $serverCount,
});

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

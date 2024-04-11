import type {TransitionConfig} from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';

type TypeWriterParams = {
  speed?: number,
  delay?: number,
}

type TypeWriter = (
  node: Element,
  params?: TypeWriterParams
) => TransitionConfig

export const typeWriter: TypeWriter = (
  node,
  { speed = 1, delay = 0} = {}
) => {

  const text = node.textContent ?? '';
  const duration = text.length / (speed * 0.01);
  return {
    duration,
    delay,
    easing: cubicInOut,
    css: (t) => {
      return `
        opacity: ${t}
      `
    },
    tick: (t) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    }
  }
}

type ScrambleWriterParam = {
  speed?: number,
  delay?: number,
}


type ScrambleWriter = (
  node: Element,
  params?: ScrambleWriterParam
) => TransitionConfig

const randTextSlice = (length: number)  => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = "";
  for (let i = 0; i< length; i++){
    res += chars.charAt(
      Math.trunc(Math.random() * chars.length)
    );
  }
  return res;

}

export const scramble: ScrambleWriter = (
  node,
  {speed = 1, delay = 0} = {}
) => {
  const text = node.textContent ?? '';
  node.textContent = '';
  const duration = text.length / (speed * 0.01);
  return {
    duration,
    delay,
    easing: cubicInOut,
    css: (t) => {
      return `
        opacity: ${t < 0.2 ? 0 :0.5 + 0.5*t}
      `
    },
    tick: (t) => {
      node.textContent = text.split(' ')
        .map((word) => {
          const i = Math.trunc(word.length * t);
          return word.slice(0, i) + randTextSlice(word.length - i);
        }).join(' ')
    }
  }
}


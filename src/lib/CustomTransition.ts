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

export const debounce = (cb: (...args: unknown[]) => void, delay: number) => {
  let timer: number | null = null;
  return function (...args: unknown[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(() => cb(...args), delay);
  };
};


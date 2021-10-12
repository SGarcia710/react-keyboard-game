// https://keycode.info/

export const r1 = [
  { code: '`' },
  { code: '1' },
  { code: '2' },
  { code: '3' },
  { code: '4' },
  { code: '5' },
  { code: '6' },
  { code: '7' },
  { code: '8' },
  { code: '9' },
  { code: '0' },
  { code: 'Minus' },
  { code: '=' },
  { code: 'Backspace' },
];

export const r2 = [
  { code: 'Tab' },
  { code: 'q' },
  { code: 'w' },
  { code: 'e' },
  { code: 'r' },
  { code: 't' },
  { code: 'y' },
  { code: 'u' },
  { code: 'i' },
  { code: 'o' },
  { code: 'p' },
  { code: '[' },
  { code: ']' },
  { code: '\\' },
];
export const r3 = [
  { code: 'CapsLock' },
  { code: 'a' },
  { code: 's' },
  { code: 'd' },
  { code: 'f' },
  { code: 'g' },
  { code: 'h' },
  { code: 'j' },
  { code: 'k' },
  { code: 'l' },
  { code: 'Semicolon' },
  { code: 'Quote' },
  { code: 'Enter' },
];
export const r4 = [
  { code: 'ShiftLeft' },
  { code: 'z' },
  { code: 'x' },
  { code: 'c' },
  { code: 'v' },
  { code: 'b' },
  { code: 'n' },
  { code: 'm' },
  { code: 'Comma' },
  { code: 'Period' },
  { code: 'Slash' },
  { code: 'ShiftRight' },
];
export const r5 = [
  { code: 'ControlLeft' },
  { code: 'AltLeft' },
  { code: 'MetaLeft' },
  { code: 'Space' },
  { code: 'MetaRight' },
  { code: 'ControlRight' },
];

const keyCodesReducer = (keys) => {
  return keys.reduce((prev, current) => {
    return { ...prev, [current.code]: current.code };
  }, {});
};

export const generateKeyCodes = () => {
  return {
    ...keyCodesReducer(r1),
    ...keyCodesReducer(r2),
    ...keyCodesReducer(r3),
    ...keyCodesReducer(r4),
    ...keyCodesReducer(r5),
  };
};

import { css } from "styled-components";

type MQSize = 0 | 576 | 768 | 992 | 1200;
interface MQ {
  [key: string]: MQSize;
}

interface Options {
  bp: MQSize;
  styles: string;
}

/* eslint-disable sort-keys -- The mq object is exempt from `sort-keys` because it is a scale that should be kept in order. */
export const mq: MQ = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
/* eslint-enable sort-keys */

export const mediaQuery = ({ bp, styles }: Options) => css`
  @media screen and (min-width: ${bp}px) {
    ${styles}
  }
`;

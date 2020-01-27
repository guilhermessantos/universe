import { css } from 'styled-components'
const prefix = require('../prefix')

const breakpoint = {
  'sm': 577,
  'md': 769,
  'lg': 993,
  'xlg': 1201
}

const breakpointCSS = {
  'prefix': prefix.config.breakpoint,
  'size': breakpoint
}

export const respondMin = Object.keys(breakpoint).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoint[label]}px) {
			${css(...args)};
		}
  `;
  
	return accumulator;
}, {});

export const respondMax = Object.keys(breakpoint).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${breakpoint[label] - 1}px) {
			${css(...args)};
		}
  `;
  
	return accumulator;
}, {});

module.exports = {
  breakpoint,
  breakpointCSS,
  respondMin,
  respondMax
}


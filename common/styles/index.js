import { css } from 'styled-components'
import { rgba } from 'polished'

const sizes = {
  xl: 1170,
  lg: 960,
  md: 640,
  sm: 400
}

// iterate through the sizes and create a media template
export const below = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
// iterate through the sizes and create a media template
export const above = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

const wrapperStyles = () => (props) =>
  props &&
  props.wrap &&
  css`
    width: 100%;
    max-width: 1130px;
    margin-right: auto;
    margin-left: auto;
    z-index: 10;
    position: relative;
    padding-left: 40px;
    padding-right: 40px;
    ${below.md`
      padding-left: 20px;
      padding-right: 20px;  
  `};
  `

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ],
  colors: {
    blue: Object.assign('#142144', {
      light: '#324476',
      accent: '#0CCABA'
    }),
    grey: Object.assign('#5B647C', {
      light: '#E6E9EE',
      mid: '#7588A2',
      dark: '#142144'
    }),
    border: Object.assign(rgba('#7588A2', 0.2), {
      dark: '#7588A2'
    })
  }
}

export { wrapperStyles, theme }

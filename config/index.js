import borderPosition from './border-position'
import borderSize from './border-size'
import marginPosition from './margin-position'
import marginSize from './margin-size'
import paddingPosition from './padding-position'
import paddingSize from './padding-size'
import breakpoints from './breakpoints'
import colors from './colors'
import grid from './grid'
import headings from './headings'
import rounded from './rounded'
import textSize from './text-size'
import themes from './themes'
import typographies from './typographies'

export default {
  border: {
    position: borderPosition,
    size: borderSize,
  },
  breakpoints,
  colors,
  grid,
  headings,
  margin: {
    position: marginPosition,
    size: marginSize,
  },
  padding: {
    position: paddingPosition,
    size: paddingSize,
  },
  rounded,
  textSize,
  themes,
  typographies,
}

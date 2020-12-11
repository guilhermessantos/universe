export const isString = value => typeof value === 'string'

export const isColor = color => {
  const regex = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i
  return color && regex.test(color)
}

export const configurationIsValid = config =>
  config && !Array.isArray(config) && typeof config !== 'string' && isString(Object.values(config)[0])

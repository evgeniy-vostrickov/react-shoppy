const getValueForTheme = <T>(theme: 'light' | 'dark', valueForLightTheme: T, valueForBlackTheme: T) => {
  if (theme === 'light') {
    return valueForLightTheme
  } else {
    return valueForBlackTheme
  }
}

export default getValueForTheme
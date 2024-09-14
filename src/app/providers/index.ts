import compose from 'compose-function'
import { withTheme } from './with-theme'

export const withProviders = compose(withTheme)
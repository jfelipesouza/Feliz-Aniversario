import 'styled-components'

import { ligthTheme } from '@/styles/themes'

export type Theme = typeof ligthTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

import { useContext } from 'react'

import { ThemeContext } from 'shared/lib/providers/theme/ThemeContext'

export const useTheme = () => useContext(ThemeContext)

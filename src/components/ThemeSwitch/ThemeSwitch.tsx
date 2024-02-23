import { useEffect, useState } from 'react'

import { useLocalStorage } from 'usehooks-ts'


function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState<boolean>(false)

  const handleThemeChange = () => {
    setTheme(enabled ? 'light' : 'dark')
    setEnabled(!enabled)
  }
  console.log('thememememe', enabled, theme)

  return (
    <button
      onClick={handleThemeChange}
    >
        <h1 className='text-slate-800 dark:text-slate-200'>{enabled ? 'світло' : 'темно'}</h1>
    </button>
  )
}

export default ThemeSwitch

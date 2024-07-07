import { useState } from 'react'
import Main from './containers/Main'
import { StyleContext } from './contexts/StyleContext'; 

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const handleSwitch = (setisDark: boolean) => {
    setIsDark(setisDark);
  }
  return (
    <StyleContext.Provider value={{ isDark, handleSwitch }}>
    <>
      <Main />
    </>
    </StyleContext.Provider>
  )
}

export default App

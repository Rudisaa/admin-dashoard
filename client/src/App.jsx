import { CssBaseline, CSSBaseLine, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from './theme';





function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]))

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={ theme }> 
        <CSSBaseLine />
        <Route element={<Layout />}>
          
        </Route>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

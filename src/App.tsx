import React from 'react'
import './App.css'

import { LicenseInfo } from '@mui/x-license-pro'
import LoginPage from './pages/LoginPage'

LicenseInfo.setLicenseKey('test')

function App() {
  return (
    <>
      <LoginPage />
    </>
  )
}
export default App

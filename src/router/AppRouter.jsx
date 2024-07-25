import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { LoginPage } from '../pages/LoginPage'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}

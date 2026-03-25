import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import ServicosPage from './pages/ServicosPage'
import ContatoPage from './pages/ContatoPage'
import PerfilPage from './pages/PerfilPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </Layout>
  )
}
import '../styles/globals.css'
import { SupabaseAuthProvider } from '../contexts/SupabaseAuthContext'

export default function App({ Component, pageProps }) {
  return (
    <SupabaseAuthProvider>
      <Component {...pageProps} />
    </SupabaseAuthProvider>
  )
}

// Importacion de componentes
import { Navigation } from "./components/Navigation";

// Importacion de estilos
import '../styles/globals.css'
export default function RootLayout({ children }) {

  return (
    <html>
      <head />
      
      <body>
        <Navigation />
        {children}
        
      </body>
    </html>
  )
}

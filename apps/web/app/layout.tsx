import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RolePlay Social - Conecte pessoas. Crie experiencias.',
  description: 'Encontre pessoas disponiveis para sair agora. Bar, corrida, restaurante, balada e muito mais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0a0a0f] text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}

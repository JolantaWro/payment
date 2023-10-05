
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header></header>
      {children}
    </div>
  )
}

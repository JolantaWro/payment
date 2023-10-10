
export default function AplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <aside className="flex h-screen w-screen items-center justify-center">Side nav</aside>
      <main>{children}</main>
    </div>
  )
}
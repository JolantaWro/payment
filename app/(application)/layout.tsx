
export default function AplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <aside>Side nav</aside>
      <main>{children}</main>
    </div>
  )
}
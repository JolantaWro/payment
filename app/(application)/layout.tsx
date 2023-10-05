
export default function AplicationLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <aside></aside>
        <main>{children}</main>
      </div>
    )
  }
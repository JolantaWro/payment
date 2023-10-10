export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="flex h-screen w-screen items-center justify-center bg-gray-50">
        {children}
      </main>
    );
  }
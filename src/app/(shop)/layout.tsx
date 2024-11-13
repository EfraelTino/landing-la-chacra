export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
      <main className="min-h-screen">
        <div>
          <h2>Texto sin contenido</h2>
        </div>
        <div>{children}</div>
      </main>
    );
  }
  

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>
        Admin page
      </h1>
      <div>
        {children}
      </div>
    </div>
  );
}

import Nav from "@/components/Nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="w-[calc(100%-3rem)] h-full absolute right-0 bg-base-100 overflow-y-auto">
        {children}
      </main>
    </>
  );
}

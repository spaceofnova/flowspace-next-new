import Nav from "@/components/Nav";
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Nav />
      <main className="w-full h-[calc(100%-3rem)] lg:w-[calc(100%-3rem)] lg:h-full absolute right-0 bg-base-100 overflow-y-auto">
        {" "}
        {/* rounded-tl-xl - For desktop only. */}
        {children}
      </main>
    </>
  );
}

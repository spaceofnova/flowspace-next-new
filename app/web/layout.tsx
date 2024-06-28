import Nav from "@/components/Nav";
import ProtectedRoute from "@/components/ProtectedRoute";
import NextTopLoader from "nextjs-toploader";
import RunOnce from "@/components/runOnce";
import Loader from "@/components/Loader";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <Loader />
      <RunOnce />
      <Nav />
      <NextTopLoader
        showSpinner={true}
        shadow={false}
        color="#00cdb8"
        zIndex={30}
      />
      <main className="w-[calc(100%-3.5rem)] h-full absolute right-0 bg-base-100 overflow-y-auto">
        {children}
      </main>
    </ProtectedRoute>
  );
}

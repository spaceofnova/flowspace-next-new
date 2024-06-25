import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-md">
        Looks like you&apos;re lost. Try going back to the home page.
      </p>
      <Link to="/" className="border border-white/10 rounded-md p-2 hover:bg-white/10 transition-colors">
        Go back home
      </Link>
    </div>
  );
}
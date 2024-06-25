import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [authButtons, setAuthButtons] = React.useState<JSX.Element | null>(null);
useEffect(() => {
  const importComponent = async () => {
    const module = await import('../auth/authButtons');
    const AuthButtons = module.default;
    setAuthButtons(<AuthButtons />);
  };

  importComponent();
}, []);

  return (
    <div className="h-16 w-full flex justify-between items-center bg-background/80 sticky top-0 z-10 border-b border-white/25 p-4">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            src="/icon.png"
            className="h-8 w-8"
            alt="Flowspace Logo"
            width={48}
            height={48}
          />
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/">
            <p className="text-xl font-bold">Flowspace - Dev</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {authButtons}
      </div>
    </div>
  );
}

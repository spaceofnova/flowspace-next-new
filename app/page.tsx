import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Image
                src="/icon.png"
                className="h-48px aspect-square"
                alt="Flowspace Logo"
                width={48}
                height={48}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link href="/updates">Updates</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-xl hidden md:inline-flex"
          >
            Flowspace
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link href="/updates">Updates</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link href="/auth/login" className="btn btn-outline">
            Login
          </Link>
          <Link
            href="https://forms.gle/vzQMoAxsUbFiTkNd7"
            className="btn btn-primary"
          >
            Join Beta
          </Link>
        </div>
      </div>
      <header className="w-full text-center flex flex-col mt-12 mb-16 lg:mb-24">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Your School Break Upgrade.
        </h1>
        <p className="w-11/12 m-auto mb-12 lg:mb-16">
          Games and tools to make your break count. Built by students who get
          the grind.
        </p>
        <div className="flex flex-col w-fit m-auto">
          <button className="btn disabled hover:cursor-not-allowed">
            Not released yet, but you can join the beta!
          </button>
          <small>Not convinced yet? Scroll down!</small>
        </div>
      </header>
      <div className="flex flex-col lg:flex-row gap-12 w-11/12 m-auto lg:h-96 h-fit items-center justify-center">
        <div className="card bg-base-300/50 p-4 shadow-md border-2 w-full lg:w-1/2 border-white/25 h-full">
          <h1 className="text-2xl font-bold">What is Flowspace?</h1>
          <p className="desc">
            Think of Flowspace as your chill-out zone after you finish your
            school stuff. It's NOT about skipping work or cheating the system.
            It's like that sweet reward for actually getting things done. <br />
            <br />I built Flowspace because I get it – school can suck.
            Sometimes you just need to play some games, de-stress, and reset
            your brain. Flowspace is that place. Think of it like a mental
            cooldown before you get back into the grind – after you handle your
            school stuff, of course.
          </p>
        </div>
        <div className="card bg-base-300/50 p-4 shadow-md border-2 w-full lg:w-1/2 border-white/25 h-full">
          <h1 className="text-2xl font-bold">Why should I use Flowspace?</h1>
          <p className="">
            Let’s say you've finished your work and now you're just... bored.
            Sure, you could scroll through social media, but wouldn't a game be
            more satisfying? That's where Flowspace comes in. It's your go-to
            spot for some well-deserved fun after you've handled your school
            stuff.
            <br />
            <br />I get that school can be a lot. Sometimes you need a real
            mental break, a way to unwind without ending up even more
            distracted. Flowspace is that place. I curate games and tools
            specifically designed to help you chill out productively, so you can
            bounce back to work with a refreshed mind.
          </p>
        </div>
      </div>
      <div className="callToAction mt-36 m-auto w-fit text-center">
        <h2 className="text-xl font-bold lg:text-3xl">
          School grind got you down?
        </h2>
        <button className="btn disabled hover:cursor-not-allowed mt-2 mb-24">
          Not released yet, but you can join the beta!
        </button>
      </div>
      <footer className="footer items-center p-4 text-neutral-content">
        <aside className="items-center grid-flow-col">
          <Image
            src="/icon.png"
            className="h-48px aspect-square"
            alt="Flowspace Logo"
            width={48}
            height={48}
          />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link
            href="https://twitter.com/flowspaceupdate"
            aria-label="X (Formerly Twitter) Page (Flowspace Updates)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link
            href="https://patreon.com/FlowspaceApp?utm_medium=online&utm_source=flowspacesite&utm_campaign=landingpage"
            aria-label="Patreon Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482c-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46c3.765.047 4.326-4.804 6.068-7.141c1.24-1.662 2.836-2.132 4.801-2.618c3.376-.836 5.678-3.501 5.673-7.031"
              />
            </svg>
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="grid">
      <div className="flex w-full gap-4 p-4">
        <h1 className="text-4xl font-bold w-48 hidden lg:block">All Apps</h1>
        <input
          type="search"
          name="apps_search"
          placeholder="Search Apps.."
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 flex-wrap p-4 lg:mx-auto lg:w-11/12 w-full lg:mt-4">
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
        <div className="skeleton w-full h-24 lg:h-32 lg:w-32"></div>
      </div>
    </div>
  );
}

export default function DevPanelSettings() {
  return (
    <div className="lg:w-1/2 w-full h-full flex flex-col justify-center items-center gap-4 border-2 border-white/20 shadow-lg bg-base-200 card prose">
      <h1 className="card-title">Dev Panel</h1>
      <div className="h-96 w-full p-4">
        <div className="h-96 w-full flex flex-col gap-2 rounded-box overflow-hidden">
          <div className="w-full h-full bg-primary rounded-md"></div>
          <div className="w-full h-full bg-secondary rounded-md"></div>
          <div className="w-full h-full bg-accent rounded-md"></div>
          <div className="w-full h-full bg-success rounded-md"></div>
          <div className="w-full h-full bg-error rounded-md"></div>
          <div className="w-full h-full bg-info rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

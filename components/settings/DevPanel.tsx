export default function DevPanelSettings() {
  return (
    <div className="lg:w-1/2 w-full h-full flex justify-center items-center gap-4 border-2 border-white/20 shadow-lg bg-base-200 card prose">
      <h1 className="card-title">Dev Panel</h1>
      <div className="h-96 w-full p-4 flex flex-row">
        <div className="h-96 w-1/2 flex flex-col gap-2 rounded-box overflow-hidden">
          <div className="w-full h-full bg-primary rounded-md"></div>
          <div className="w-full h-full bg-secondary rounded-md"></div>
          <div className="w-full h-full bg-accent rounded-md"></div>
          <div className="w-full h-full bg-success rounded-md"></div>
          <div className="w-full h-full bg-error rounded-md"></div>
          <div className="w-full h-full bg-info rounded-md"></div>
        </div>
        <div className="w-1/2">
        <textarea name="" id="" className="w-full h-full bg-base-100 rounded-box pl-4">
          Enter code here to be executed: 
        </textarea>
        <button className="w-full btn btn-primary" onClick={() => eval(document.querySelector("textarea")?.value?.trim()!)}>Execute</button>
      </div>
      </div>
      
    </div>
  );
}

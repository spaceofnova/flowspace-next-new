"use client";

export default function Page() {
  let greeting;
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl font-bold">{greeting + "!"}</h1>
      </div>
    </>
  );
}

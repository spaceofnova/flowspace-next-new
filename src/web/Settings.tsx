import React from "react";
import Apperance from "../components/settings/Apperance";
import Profile from "../components/settings/Profile";
import Div from "../components/ui/elements/Div";

export default function Settings() {
  const [page, setPage] = React.useState(0);
  const pages = [
    {
      id: 0,
      name: "Profile",
      content: <Profile />,
    },
    {
      id: 1,
      name: "Apperance",
      content: <Apperance />,
    },
  ];
  return (
    <div className="flex flex-col h-full w-full gap-4 p-4">
      <h1 className="text-4xl font-bold [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)]">
        Settings
      </h1>
      <Div className="md:w-fit w-full overflox-x-scroll flex gap-4 p-2 rounded-md ">
        {pages.map((item) => (
          <button
            key={item.id}
            className={"tab " + (item.id == pages[page].id ? "tab-active" : "")}
            onClick={() => {
              setPage(item.id);
            }}
          >
            {item.name}
          </button>
        ))}
      </Div>
      <div className="w-full h-full">
        {pages[page] ? pages[page].content : "Page Not Found"}
      </div>
    </div>
  );
}

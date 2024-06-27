import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../utils/supabase";

interface App {
  id: string;
  name: string;
  img: string;
  url: string;
}

interface event {
  target: {
    value: string;
  };
}


function addToRecents(item: App) {
  if (typeof window !== "undefined") {
    const recentItems = JSON.parse(localStorage.getItem("recentItems") || "[]");
    if (!recentItems.includes(item)) {
      recentItems.push(item);
      if (recentItems.length > 5) {
        recentItems.splice(0, recentItems.length - 5);
      }
      localStorage.setItem("recentItems", JSON.stringify(recentItems));
    }
  }
}

export default function Apps() {
  const [items, setItems] = useState<App[]>([]);
  const [filteredItems, setFilteredItems] = useState<App[]>([]);

  const filterItems = async (event: event) => {
    const searchTerm = event.target.value.toLowerCase();
    setFilteredItems(
      searchTerm
        ? items?.filter((item: App) =>
            item.name.toLowerCase().includes(searchTerm)
          )
        : items
    );
  };

  useEffect(() => {
    const loadItems = async () => {
      const { data: items, error } = await supabase()
        .from("games")
        .select("id, name, img, url")
        .limit(100)
        .order("name", { ascending: true });
      if (error) console.error("Error loading items:", error);
      else {
        setItems(items);
        setFilteredItems(items);
      }
    };

    loadItems();
  }, []);
  return (
    <div className="grid">
      <div className="flex w-full gap-4 p-4">
        <input
          type="search"
          name="items_search"
          placeholder="Search Items.."
          className="bg-background/75 p-2 rounded-md h-8 w-full"
          autoComplete="off"
          onChange={filterItems}
        />
      </div>
      <div className="flex gap-4 flex-wrap p-4 h-full w-[calc(100%-3rem)] mx-auto">
        {filteredItems?.map((item: App) => (
          <Link
            className="h-28 w-36 bg-base-300 flex flex-col relative cursor-pointer overflow-hidden rounded-md p-0 animate-in hover:bg-base-300/90"
            to={`/web/apps/${item.id}`}
            key={item.id}
            onClick={() => addToRecents(item)}
          >
            <img
              src={item.img}
              alt="Item"
              className="w-full rounded-lg object-cover aspect-square"
            />
            <div className="text-center w-full items-center absolute bottom-0 z-10 bg-background/75 text-xl font-medium">
              <p className="text-sm">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

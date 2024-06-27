import { User } from "@supabase/supabase-js";
import { useState } from "react";
import supabase from "../../utils/supabase";
import { useAlert } from "../ui/useAlert";
import { Alert } from "../ui/Alert";
import { useOutletContext } from "react-router-dom";
import Div from "../ui/elements/Div";

export default function Profile() {
  const user = useOutletContext<User>();
  const [isEditing, setIsEditing] = useState(false);

  const { showAlert, alertConfig } = useAlert();

  const handleSave = async () => {
    const display_name = (
      document.querySelector('input[name="display_name"]') as HTMLInputElement
    ).value;

    const bio = (
      document.querySelector('textarea[name="bioText"]') as HTMLInputElement
    ).value;

    const { error } = await supabase().auth.updateUser({
      data: {
        display_name: display_name.toString(),
        bio: bio.toString(),
      },
    });
    if (error) {
      console.log(error);
      showAlert("Could not update profile", "error");
    }
    // Process the data here
    setIsEditing(false);
    showAlert("Profile Updated!", "primary");
  };

  return (
    <>
      <div className="flex flex-row">
        {!isEditing ? (
          <Div className="rounded-md w-96 p-2 flex flex-col">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">
                {!user?.user_metadata?.display_name
                  ? "Anonymous"
                  : user?.user_metadata?.display_name}
              </h1>
              <p className="opacity-50">@{user?.user_metadata?.username}</p>
              <div className="form-control">
                <label className="label">Bio</label>
                <div id="bioText" className="bg-white/10 p-2 rounded-md w-full">
                  {user?.user_metadata?.bio}
                </div>
              </div>
              <div className="card-actions w-full justify-end">
                <button
                  className="bg-primary p-2 w-full rounded-md hover:bg-secondary transition-all duration-400 ease-out"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              </div>
            </div>
          </Div>
        ) : (
          <Div className="rounded-md w-96 p-2 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label className="label">Display Name</label>
                <input
                  type="text"
                  className="bg-white/10 p-2 rounded-md w-full"
                  name="display_name"
                  defaultValue={user?.user_metadata?.display_name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Bio</label>
                <textarea
                  name="bioText"
                  className="bg-white/10 p-2 rounded-md w-full"
                  defaultValue={user?.user_metadata?.bio}
                ></textarea>
              </div>
              <div className="card-actions w-full justify-end flex flex-col gap-2">
                <button className="bg-primary p-2 w-full rounded-md hover:bg-secondary transition-all duration-400 ease-out" onClick={handleSave}>
                  Save Changes
                </button>
                <button
                  className="bg-primary p-2 w-full rounded-md hover:bg-secondary transition-all duration-400 ease-out"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Div>
        )}
      </div>
      <Alert {...alertConfig} />
    </>
  );
}

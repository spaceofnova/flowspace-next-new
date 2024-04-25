"use client";
import { useEffect, useState } from "react";
import { Alert } from "./Alert";
import { useAlert } from "./useAlert";

import { createClient } from "@/utils/supabase/client";
export default function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<any>();

  const { showAlert, alertConfig } = useAlert();

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data: user } = await supabase.auth.getUser();
      if (user) {
        setUser(user.user);
        setIsLoading(false);
      }
    };
    const supabase = createClient();
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      if (event === "USER_UPDATED") {
        fetchUser();
      }
    });
    fetchUser();
  }, []);

  const handleSave = async () => {
    const supabase = createClient();
    const firstName = (
      document.querySelector('input[name="firstName"]') as HTMLInputElement
    ).value;
    const lastName = (
      document.querySelector('input[name="lastName"]') as HTMLInputElement
    ).value;

    const bio = (
      document.querySelector('textarea[name="bioText"]') as HTMLInputElement
    ).value;

    const { error } = await supabase.auth.updateUser({
      data: {
        first_name: firstName.toString(),
        last_name: lastName.toString(),
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
          <div className="card w-96 bg-base-300 h-72">
            {isLoading && (
              <div className="w-full h-full grid place-items-center">
                <span className="loading loading-ring loading-lg"></span>
              </div>
            )}
            {!isLoading && (
              <div className="card-body">
                <h1 className="card-title text-2xl">
                  {user?.user_metadata?.first_name +
                    " " +
                    user?.user_metadata?.last_name}
                </h1>
                <p className="opacity-50">@{user?.user_metadata?.username}</p>
                <div className="form-control">
                  <label className="label">Bio</label>
                  <div id="bioText" className="textarea">
                    {user?.user_metadata?.bio}
                  </div>
                </div>
                <div className="card-actions w-full justify-end">
                  <button
                    className="btn btn-outline hover:btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="card w-96 bg-base-300 h-[90%]">
            <div className="card-body">
              <div className="form-control">
                <label className="label">First Name</label>
                <input
                  type="text"
                  className="input"
                  name="firstName"
                  defaultValue={user?.user_metadata?.first_name}
                />
              </div>
              <div className="form-control">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  className="input"
                  name="lastName"
                  defaultValue={user?.user_metadata?.last_name}
                />
              </div>
              <div className="form-control">
                <label className="label">Bio</label>
                <textarea
                  name="bioText"
                  className="textarea"
                  defaultValue={user?.user_metadata?.bio}
                ></textarea>
              </div>
              <div className="card-actions w-full justify-end">
                <button className="btn hover:btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button
                  className="btn btn-outline hover:btn-primary"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Alert {...alertConfig} />
    </>
  );
}

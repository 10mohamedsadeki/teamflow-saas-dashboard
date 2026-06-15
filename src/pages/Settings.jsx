import { useUser, UserButton, SignOutButton } from "@clerk/react";

const Settings = () => {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mt-2 text-zinc-900">Settings</h1>

        <p className="mt-1 text-zinc-500">Manage your account settings.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[340px_1fr]">
        <div className="h-fit rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <img
              src={user?.imageUrl}
              alt={user?.fullName}
              className="h-28 w-28 rounded-full object-cover"
            />

            <h2 className="mt-4 text-xl font-bold text-zinc-900">
              {user?.fullName}
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {user?.primaryEmailAddress?.emailAddress}
            </p>

            <span className="mt-4 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
              Admin
            </span>
          </div>

          <div className="mt-6 border-t border-zinc-200 pt-5">
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">User ID</span>

                <span className="max-w-[120px] truncate font-medium text-zinc-900">
                  {user?.id}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Joined</span>

                <span className="font-medium text-zinc-900">
                  {new Date(user?.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Account</h2>

            <p className="mt-1 text-sm text-zinc-500">
              Manage your Clerk account details.
            </p>

            <div className="mt-5 flex items-center justify-between rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
              <div>
                <h3 className="font-medium text-zinc-900">
                  Profile & Security
                </h3>

                <p className="text-sm text-zinc-500">
                  Update email, password and account info.
                </p>
              </div>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-12 w-12",
                  },
                }}
              />
            </div>
          </section>

          <section className="rounded-[2rem] border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>

            <p className="mt-2 text-sm text-red-500">
              Logout from your current account.
            </p>

            
              <SignOutButton>
                <button className="mt-5 rounded-2xl bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600">Sign out</button>
              </SignOutButton>
           
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;

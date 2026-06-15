import { SignIn } from "@clerk/react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden ">
      <SignIn />
    </div>
  );
}

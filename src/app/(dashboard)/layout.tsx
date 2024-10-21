import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (!session?.user) return redirect("/login");

  return <div>{children}</div>;
};

export default layout;

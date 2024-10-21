import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

const page = async () => {

    const session = await auth();

  return (
    <div>
      {" "}
      <Image src={session?.user?.image || ''} alt="User Avatar" width={30} height={30} />
    </div>
  );
};

export default page;

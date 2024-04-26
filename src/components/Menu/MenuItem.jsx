import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl lg:hidden" />
      <p className="uppercase hidden lg:inline text-lg">{title}</p>
    </Link>
  );
}

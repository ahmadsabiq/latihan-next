import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white font-medium px-10 py-5">
      <ul className="flex gap-5">
        <li>
          <Link href="/">Client Side Data Fetching</Link>
        </li>
        <li>
          <Link href="/server-side">Server Side Data Fetching</Link>
        </li>
      </ul>
    </nav>
  );
}

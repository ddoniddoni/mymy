"use client";

import dynamic from "next/dynamic";

const CustomUserButton = dynamic(() => import("./custom-user-button"), {
  ssr: false,
});

export default function ClientAuthArea() {
  return <CustomUserButton />;
}

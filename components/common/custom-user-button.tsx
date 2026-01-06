"use client";

import Link from "next/link";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Building2Icon, BuildingIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CustomUserButton() {
  return (
    <UserButton>
      <UserButton.UserProfilePage
        label="조직"
        labelIcon={<BuildingIcon className="size-4" />}
        url="/organizations"
      >
        <div className="p-4">
          <h2 className="text-sm font-semibold mb-2">조직 관리</h2>
          <OrganizationSwitcher
            hidePersonal={true}
            afterCreateOrganizationUrl={"/submit"}
            afterSelectPersonalUrl={"/submit"}
            appearance={{
              elements: {
                rootBox: "w-full",
              },
            }}
          />
        </div>
      </UserButton.UserProfilePage>

      <UserButton.UserProfilePage
        label="관리자"
        labelIcon={<Building2Icon className="size-4" />}
        url="/admin"
      >
        <div className="p-4">
          <h2 className="text-sm font-semibold mb-2">관리자 패널</h2>
          <Link href="/admin" className="w-full justify-start">
            <Button size="default" className="w-full justify-start">
              관리자 페이지로 이동
            </Button>
          </Link>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}

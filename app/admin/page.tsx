import AdminProductCard from "@/components/admin/admin-product-card";
import StatsCard from "@/components/admin/stats-card";
import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { InboxIcon, ShieldIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const response = await clerkClient();
  const user = await response.users.getUser(userId!);

  const metadata = user.publicMetadata;
  const isAdmin = metadata?.isAdmin ?? false;

  if (!isAdmin) {
    redirect("/");
  }
  const allProducts = await getAllProducts();
  const approvedProducts = allProducts.filter(
    (product) => product.status === "approved"
  );
  const pendingProducts = allProducts.filter(
    (product) => product.status === "pending"
  );
  const rejectedProducts = allProducts.filter(
    (product) => product.status === "rejected"
  );
  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="프로젝트 관리자"
            icon={ShieldIcon}
            description="등록된 프로젝트를 검토하고 관리합니다."
          />
        </div>
        <StatsCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold">
              검토중인 프로젝트 ({pendingProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {pendingProducts.length === 0 && (
              <EmptyState
                message="검토중인 프로젝트가 없습니다."
                icon={InboxIcon}
              />
            )}
            {pendingProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold">모든 프로젝트</h2>
          </div>
          <div className="space-y-4">
            {allProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

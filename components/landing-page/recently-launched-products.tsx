import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="최근 출시된 프로젝트"
          icon={RocketIcon}
          description="커뮤니티에서 새롭게 공개된 최신 프로젝트들을 만나보세요"
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="최근 일주일 내에 출시된 프로젝트가 없습니다. 곧 새로운 프로젝트를 만나보세요."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}

"use cache";

import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllProducts } from "@/lib/products/product-select";
import { CompassIcon } from "lucide-react";

export default async function ExplorePage() {
  const products = await getAllProducts();
  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="프로젝트 둘러보기"
            icon={CompassIcon}
            description="커뮤니티의 다양한 프로젝트를 탐색해보세요"
          />
        </div>
        <ProductExplorer products={products} />
      </div>
    </div>
  );
}

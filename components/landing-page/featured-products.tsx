import { ArrowUpRightIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Product 1",
    description: "Description 1",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Product 1",
    description: "Description 1",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="오늘의 추천"
            icon={StarIcon}
            description="이번 주 우리 커뮤니티에서 선정한 최고의 프로젝트"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

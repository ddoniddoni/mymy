import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import FeaturedProducts from "./featured-products";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = [
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

  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}

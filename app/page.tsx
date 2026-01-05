import { Suspense } from "react";

import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import { LoaderIcon } from "lucide-react";
import ProductSkeleton from "@/components/products/product-skeleton";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />
      <Suspense fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}

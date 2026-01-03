import { RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";

export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="최근 출시된 제품"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
      </div>
    </section>
  );
}

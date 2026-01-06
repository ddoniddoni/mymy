import { SparklesIcon } from "lucide-react";

import SectionHeader from "@/components/common/section-header";
import ProductSubmitForm from "@/components/products/product-submit-form";

export default function SubmitPage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="프로젝트 제출하기"
            icon={SparklesIcon}
            description="커뮤니티와 당신의 창작물을 공유하세요. 제출된 프로젝트는 라이브되기 전에 검토됩니다."
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}

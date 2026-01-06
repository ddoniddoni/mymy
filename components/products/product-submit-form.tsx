"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";

const initialState: FormState = {
  success: false,
  errors: undefined,
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );

  const { errors, message, success } = state;

  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive"
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <FormField
        label="프로젝트명"
        name="name"
        id="name"
        placeholder="나의 멋진 프로젝트"
        required
        onChange={() => {}}
        error={getFieldErrors("name")}
      />

      <FormField
        label="슬러그"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        helperText="프로젝트를 기반으로 한 URL용 식별자입니다"
        error={getFieldErrors("slug")}
      />

      <FormField
        label="한 줄 소개"
        name="tagline"
        id="tagline"
        placeholder="간단하고 인상적인 설명"
        required
        onChange={() => {}}
        error={getFieldErrors("tagline")}
      />

      <FormField
        label="상세 설명"
        name="description"
        id="description"
        placeholder="프로젝트에 대해 자세히 설명해주세요..."
        required
        onChange={() => {}}
        error={getFieldErrors("description")}
        textarea
      />

      <FormField
        label="웹사이트 URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://yourproduct.com"
        required
        onChange={() => {}}
        error={getFieldErrors("websiteUrl")}
        helperText="프로젝트의 공식 웹사이트 또는 랜딩 페이지 주소를 입력하세요"
      />

      <FormField
        label="태그"
        name="tags"
        id="tags"
        placeholder="AI, 생산성, SaaS"
        required
        onChange={() => {}}
        error={getFieldErrors("tags")}
        helperText="쉼표(,)로 구분하여 입력하세요 (예: AI, SaaS, 생산성)"
      />

      <Button type="submit" size="lg" className="w-full">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            프로젝트 등록하기
          </>
        )}
      </Button>
    </form>
  );
}

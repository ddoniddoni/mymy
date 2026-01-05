import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex min-h-50 w-full items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-primary" />
              <span className="text-sm">프로젝트 불러오는 중...</span>
            </div>
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}

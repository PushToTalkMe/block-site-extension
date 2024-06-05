import { useSessionQuery } from "@/entities/session";
import { HomePage } from "@/pages/home.page";
import { NotAuthPage } from "@/pages/not-auth.page";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";

export function AppRouter() {
  const { isLoading, isSuccess } = useSessionQuery();
  if (isLoading) {
    return <UIPageSpinner />;
  }

  if (isSuccess) {
    return <HomePage />;
  }

  return <NotAuthPage />;
}

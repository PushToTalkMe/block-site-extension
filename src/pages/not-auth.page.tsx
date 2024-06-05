import { ADMIN_SIGN_IN_URL } from "@/shared/constants";
import { createTab } from "@/shared/lib/browser";
import { UIButton } from "@/shared/ui/ui-button";
import { UILogo } from "@/shared/ui/ui-logo";

export function NotAuthPage() {
  return (
    <div className="p-8">
      <UILogo />
      <h2 className="text-2xl">You not authorized!</h2>
      <UIButton variant="primary" onClick={() => createTab(ADMIN_SIGN_IN_URL)}>
        Sign In
      </UIButton>
    </div>
  );
}

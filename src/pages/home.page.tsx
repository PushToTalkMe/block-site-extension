import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { ADMIN_URL } from "@/shared/constants";
import { createTab } from "@/shared/lib/browser";
import { UIButton } from "@/shared/ui/ui-button";
import { UILogo } from "@/shared/ui/ui-logo";

export function HomePage() {
  return (
    <div className="p-8 flex flex-col gap-3">
      <UILogo />
      <ToggleBlockingButton />
      <UIButton variant="outlined" onClick={() => createTab(ADMIN_URL)}>
        Manage extension
      </UIButton>
    </div>
  );
}

import { startUpdateBlockRules } from "@/features/add-block-rules";
import { addInstallListener } from "@/shared/lib/browser";

addInstallListener(() => startUpdateBlockRules());

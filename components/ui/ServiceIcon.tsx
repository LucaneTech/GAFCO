import { serviceIcons, type ServiceKey } from "@/data/site";
import { Icon, type IconName } from "./Icon";

export function ServiceIcon({
  service,
  compact = false,
}: {
  service: ServiceKey;
  compact?: boolean;
}) {
  return (
    <span className={compact ? "service-icon compact" : "service-icon"}>
      <Icon name={serviceIcons[service] as IconName} />
    </span>
  );
}

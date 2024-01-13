import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
}

const Icon = ({ name }: IconProps) => {
  const SidebarIcon = icons[name];
  return <SidebarIcon size={20} />;
};

export default Icon;

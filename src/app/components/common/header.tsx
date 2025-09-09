import { PanelLeft } from "lucide-react";

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <div className="flex flex-row py-8 px-8 gap-6 font-primary text-zinc-700">
      <button onClick={onToggleSidebar}>
        <PanelLeft className="text-zinc-700 cursor-pointer" />
      </button>
      <div className="border-l-2 pl-6 border-zinc-400">Dashboard</div>
    </div>
  );
}

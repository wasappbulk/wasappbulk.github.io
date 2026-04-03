import { Link, useLocation } from "react-router-dom";

const guideLinks = [
  { path: "/guide/getting-started", label: "📚 Getting Started" },
  { path: "/guide/upload-excel", label: "📊 Upload Excel" },
  { path: "/guide/using-variables", label: "✨ Using Variables" },
  { path: "/guide/send-messages", label: "📱 Send Messages" },
  { path: "/guide/media", label: "📎 Attach Media" },
];

export default function GuideSidebar() {
  const location = useLocation();

  return (
    <aside className="w-56 shrink-0 hidden md:block">
      <div className="sticky top-24">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Guide</p>
        <nav className="flex flex-col gap-1">
          {guideLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-green-500/10 text-green-400 font-medium"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

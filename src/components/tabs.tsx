"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="w-full">
      <div className="flex gap-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-8">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

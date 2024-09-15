import React, { useState } from 'react';

const CustomTabs = ({ tabs }: { tabs: { title: string; content: JSX.Element }[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveTab(Number(event.target.value));
  };

  return (
    <div>
      <select
        id="tab-select"
        className="sm:hidden h-8 pr-5 pl-5 py-auto text-base font-extralight font-sans shadow-xs rounded-none text-gray-900 bg-white/90 placeholder-gray-400 focus:outline-none w-full"
        aria-label="Tabs"
        onChange={handleSelectChange}
        value={activeTab}
      >
        {tabs.map((tab, index) => (
          <option key={index} value={index}>
            {tab.title}
          </option>
        ))}
      </select>
      <div className="hidden sm:block border-gray-200">
        <nav
          className="flex gap-x-2"
          aria-label="Tabs"
          role="tablist"
          data-hs-tab-select="#tab-select"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              className={`-mb-px px-1 inline-flex items-center gap-x-1 text-sm font-normal text-center ${
                activeTab === index
                  ? "hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 hs-tab-active text-white font-cocoUltralight"
                  : "text-gray-300 hover:text-white focus:outline-none focus:text-gray-700"
              }`}
              id={`hs-tab-to-select-item-${index + 1}`}
              aria-selected={activeTab === index}
              data-hs-tab={`#hs-tab-to-select-${index + 1}`}
              aria-controls={`hs-tab-to-select-${index + 1}`}
              role="tab"
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={`hs-tab-to-select-${index + 1}`}
            role="tabpanel"
            aria-labelledby={`hs-tab-to-select-item-${index + 1}`}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;
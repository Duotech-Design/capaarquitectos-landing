import { Dispatch, SetStateAction } from "react";

const CustomTabs = ({ tabs, activeTab, setActiveTab }: { tabs: { title: string; content: JSX.Element }[], activeTab: number,
    setActiveTab: Dispatch<SetStateAction<number>>}) => {
  return (
    <div>
      <select
        id="tab-select"
        className="sm:hidden py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
        aria-label="Tabs"
      >
        <option value="#hs-tab-to-select-1">Tab 1</option>
        <option value="#hs-tab-to-select-2">Tab 2</option>
        <option value="#hs-tab-to-select-3">Tab 3</option>
      </select>
      <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700">
        <nav
          className="flex gap-x-2"
          aria-label="Tabs"
          role="tablist"
          data-hs-tab-select="#tab-select"
        >
            {tabs.map((tab: { title: string, content: JSX.Element}, index: number) => (
                <button
                    key={index}
                    type="button"
                    className={`-mb-px px-1 inline-flex items-center gap-x-1 text-sm font-normal text-center  ${
                    activeTab === index ? "hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 hs-tab-active bg-white/85 text-black hover:text-gray-700" : "text-white  focus:outline-none focus:text-gray-700 bg-transparent hover:text-gray-300"
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
        {tabs.map((tab: { title: string, content: JSX.Element}, index: number) => (
            <div
                key={index}
                id={`hs-tab-to-select-${index + 1}`}
                role="tabpanel"
                aria-labelledby={`hs-tab-to-select-item-${index + 1}`}
                className={`${
                activeTab === index ? "block" : "hidden"
                }`}
            >
                {tab.content}
            </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;

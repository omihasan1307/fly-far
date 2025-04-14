import { TabConfig } from "../data/tabData";

interface TabContentProps {
  activeTab: number;
  tab: TabConfig;
}

export const TabContent = ({ activeTab, tab }: TabContentProps) => {
  return (
    <div>
      {activeTab === tab.index && <div>Content for {tab.label} tab</div>}
    </div>
  );
};

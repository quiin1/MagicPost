import { useState } from "react";
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import { CardSearch } from "../searchcards/CardSearch";
import EstimateFee from "../searchcards/EstimateFee";
import FindAdd from "../searchcards/FindAdd";
import { FaSearchLocation } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";


const SearchPath = () => {
  const data = [
    {
      label: "Tra cứu vận đơn",
      value: "search",
      desc: <CardSearch />,
      icon: <FaSearchLocation/>,
    },
    {
      label: "Ước tính cước phí",
      value: "calc",
      desc: <EstimateFee />,
      icon: <GrMoney/>,
    },
    {
      label: "Tìm kiếm bưu cục",
      value: "find",
      desc: <FindAdd />,
      icon: <HiOutlineViewfinderCircle/>,
    },
  ];

  const [activeTab, setActiveTab] = useState("search");

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="block">
      <div className="pt-5 flex justify-center items-center">
        <button className="m-5 py-3 px-8 border-primary border font-semibold text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">
          Tra cứu
        </button>
        <button className="m-5 py-3 px-8 border-primary border font-semibold text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">
          Dịch vụ
        </button>
      </div>
      <div className=" mx-[17%] mt-5 shadow-xl rounded-xl">
        <Tabs value={activeTab}>
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => handleTabClick(value)}
                className={`tab ${activeTab === value ? "active" : ""}`}
              >
                <div className="flex items-center gap-2">
                  {icon}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="h-1/2">
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchPath;

import Iphone from "D:/TaiLieuUet/web/BTL/magicpost_ver2/my-project/src/assets/img/landpage.png";


const LandingPage = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative">
          <div className="absolute ml-[55%] mt-[8%]">
            <div className="ml-[6%] mt-[10%] w-[400px] h-[400px] bg-[#9ED1FF] rounded-full filter blur-[100px]"></div>
            <div className="ml-[100%] mt-[6%] w-[400px] h-[400px] bg-[#FFA8E1] rounded-full filter blur-[100px]"></div>
          </div>

          <div className="absolute mt-[50%]">
            <div className="mt-[10%] w-[400px] h-[400px] bg-[#9ED1FF] rounded-full filter blur-[80px]"></div>
          </div>

          <div className="absolute ml-[5%] mt-[5%]">
            <div className="flex justify-center">
              <div>
                <h1 className="font-bold text-[80px]">
                  Dịch vụ vận chuyển <br /> uy tín, tin cậy
                </h1>
                <h2 className="text-[20px]">
                  Chào mừng quý khách hàng đến với dịch vụ vận chuyển <br />
                  hỏa tốc đến từ Magic Post !!!
                </h2>
                <button
                  type="button"
                  className="w-[240px] h-[63px] mt-24 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 shadow"
                >
                  Bắt đầu
                </button>
              </div>
              <img
                className="h-[700px] max-w-full mr-[96px] ml-32"
                src={Iphone}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="block">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="w-[240px] h-[63px] mt-[50%] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 shadow"
            >
              Tra cứu
            </button>
            <button
              type="button"
              className="w-[240px] h-[63px] mt-[50%] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 shadow"
            >
              Dịch vụ
            </button>
          </div>
        </div>
        <div className="block mt-16">
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import { HiArrowSmRight } from "react-icons/hi";
const EstimateFee = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className=" mt-5">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <h4 className="pt-5">Gửi từ *</h4>
            <div className="w-[600px] pl-20">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Chọn thành phố</option>
                <option value="HN">Hà Nội</option>
                <option value="HCM">Tp.Hồ Chí Minh</option>
                <option value="DN">Tp.Đà Nẵng</option>
                <option value="TB">Thái Bình</option>
              </select>
            </div>
          </div>

          <div className="flex items-center lg:justify-between flex-col lg:flex-row" >
            <h4 className="pt-5">Quận/Huyện *</h4>
            <div className="w-[600px] pl-20">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Chọn thành phố</option>
                <option value="HN">Hà Nội</option>
                <option value="HCM">Tp.Hồ Chí Minh</option>
                <option value="DN">Tp.Đà Nẵng</option>
                <option value="TB">Thái Bình</option>
              </select>
            </div>
          </div>

          <div className="flex items-center lg:justify-between flex-col lg:flex-row">
            <h4 className="pt-5">Gửi đến *</h4>
            <div className="w-[600px] pl-20">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Chọn thành phố</option>
                <option value="HN">Hà Nội</option>
                <option value="HCM">Tp.Hồ Chí Minh</option>
                <option value="DN">Tp.Đà Nẵng</option>
                <option value="TB">Thái Bình</option>
              </select>
            </div>
          </div>

          <div className="flex items-center lg:justify-between flex-col lg:flex-row">
            <h4 className="pt-5">Quận/Huyện *</h4>
            <div className="w-[600px] pl-20">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Chọn thành phố</option>
                <option value="HN">Hà Nội</option>
                <option value="HCM">Tp.Hồ Chí Minh</option>
                <option value="DN">Tp.Đà Nẵng</option>
                <option value="TB">Thái Bình</option>
              </select>
            </div>
          </div>

          <div className="flex items-center lg:justify-between flex-col lg:flex-row">
            <h4 className="pt-5">Trọng lượng (gram) *</h4>
            <div className="w-[600px] pl-20">
            <form className="">
                <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
                <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required />
            </form>
            </div>
          </div>

          <div className="flex items-center lg:justify-between flex-col lg:flex-row">
            <h4 className="pt-5">Số tiền thu hộ (VNĐ) *</h4>
            <div className="w-[600px] pl-20">
            <form className="">
                <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
                <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required />
            </form>
            </div>
          </div>
          <div>
            <button className="flex items-center mt-20 py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-white hover:text-primary hover:border hover:border-primary transition-all duration-300">
              <span className="mr-3">Tra cứu </span>
              <HiArrowSmRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateFee;

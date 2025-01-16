const Header = () => {
  return (
    <div className="flex justify-between w-[1400px] mx-[auto] h-[99px] items-center">
      <div className="text-[#4e8ffc] font-extralight text-[40px] cursor-pointer">
        T U L G A A
      </div>
      <div className="flex items-center">
        <button className="bg-transparent hover:text-[#1d64db] font-semibold text-[#919499]">
          Skills
        </button>
        <button className="bg-transparent mx-9 hover:text-[#1d64db] font-semibold text-[#919499]">
          Contact
        </button>
        <button className="bg-[#2868ff] hover:bg-[#06add6] font-semibold text-white rounded-md w-[150px] h-[40px] hover:text-white">
          Resume татах
        </button>
      </div>
    </div>
  );
};
export default Header;

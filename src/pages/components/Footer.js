const Footer = () => {
  return (
    <div className="flex justify-center w-[1400px] mx-[auto] h-[99px] items-center">
      <div className="flex-col justify-center items-center">
        <div className="flex items-center ">
          <img
            className="w-[85px] h-[85px] hover:border-4 cursor-pointer hover:border-transparent"
            src="/MyPinecone.png"
          />
          <img
            className="w-[70px] h-[70px] mx-3 hover:border-4 cursor-pointer hover:border-transparent"
            src="/Myinstagram.png"
          />
          <img
            className="w-[60px] h-[60px] ml-[20px] hover:border-4 cursor-pointer hover:border-transparent"
            src="/MyTwitter.png"
          />
          <img
            className="w-[60px] h-[60px] ml-[30px] hover:border-4 cursor-pointer hover:border-transparent"
            src="/MyGithub.png"
          />
        </div>
        <div className="font-semibold flex justify-center mt-4">
          Powered by: TULGAA
        </div>
      </div>
    </div>
  );
};
export default Footer;

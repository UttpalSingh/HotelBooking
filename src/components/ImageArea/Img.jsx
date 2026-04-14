

const Img = () => {

  return (
    <div className="absolute h-full w-full">
      <div className="h-[10%] w-full bg-[#14213d]"></div>
      <div className="h-[80%] w-full">
        <img
          className="h-full w-full object-cover"
          src="/images/img1.jpg"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default Img;

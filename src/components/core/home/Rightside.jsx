import HeroImage from "/hero.jpg";

const Rightside = () => {
  return (
    <div className="sm:w-1/2 w-full   ">
      <div className=" py-10 w-11/12 sm:w-full mx-auto">
        <img
          src={HeroImage}
          alt="Background"
          className="w-full h-full object-cover rounded-lg shadow-lg pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Rightside;

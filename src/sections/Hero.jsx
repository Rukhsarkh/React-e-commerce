const Hero = () => {
  return (
    <section className="h-[80vh] relative flex flex-col md:flex-row max-sm:mt-20 sm:mt-10">
      <div className="w-full md:w-1/2"></div>
      <div className="bg-yellow-200 w-full md:w-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-6 text-center px-4">
        <div className="text-4xl md:text-6xl font-semibold flex flex-col">
          <p>
            Welcome to <span className="underline">My Store</span>
          </p>
          <p>Your Shopping</p>
          <p>Destination</p>
        </div>

        <div className="flex flex-col text-gray-500 font-medium text-base md:text-lg">
          <p>
            Discover a wide range of products tailored just for you. Shop with
            ease
          </p>
          <p>and find exactly what you need</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

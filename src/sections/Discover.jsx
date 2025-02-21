const Discover = () => {
  return (
    <section className="bg-black py-10 md:py-16">
      <div className="px-6 md:px-16 flex flex-col text-white justify-evenly leading-8 max-container text-center md:text-left">
        <div className="font-extrabold text-3xl md:text-4xl leading-tight">
          Discover Your Next Favourite Item
        </div>
        <div className="my-2 font-thin text-base md:text-lg">
          Browse our exclusive collection and find the perfect product tailored
          just for you
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-4 items-center md:items-start">
          <button className="bg-white text-black px-6 py-2 rounded-2xl text-lg md:text-base">
            Shop
          </button>
          <button className="border-white border-2 px-6 py-2 rounded-2xl text-lg md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;

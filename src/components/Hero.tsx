

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left side */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Build Your Ideal
              <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-8 flex gap-3">
              <button className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white">
                Explore Technologies
              </button>

              <button className="rounded-md border border-slate-200 px-8 py-3 text-sm font-medium text-slate-600 hover:border-pink-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side*/}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/src/assets/banner-stack.png"
              alt=""
              className="w-[320px] lg:w-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

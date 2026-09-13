import { FaArrowRight, FaTrophy } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <section className="container mx-auto my-20 px-4">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#F8FAFC] p-6 shadow-lg md:p-10 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
            ABOUT US
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Cricket is more than a
            <span className="text-purple-600"> game.</span>
            <br />
            It's a passion.
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            We created this platform for cricket lovers who want to build
            their ultimate dream team. Pick your favorite players, manage
            your credits, and create a squad that represents your passion
            for the game.
          </p>

          <p className="mt-4 leading-7 text-gray-500">
            Whether you're a cricket enthusiast or a strategic team builder,
            our goal is to make every player selection exciting, simple, and
            rewarding.
          </p>

          <button
            className="
              mt-7
              flex
              items-center
              gap-2
              rounded-lg
              bg-gray-900
              px-6
              py-3
              font-semibold
              text-white
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-purple-700
            "
          >
            Learn More
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Main Card */}
          <div
            className="
              relative
              mx-auto
              max-w-md
              overflow-hidden
              rounded-3xl
              bg-linear-to-br
              from-sky-600
              via-[#29234F]
              to-purple-700
              p-8
              text-white
              shadow-2xl
            "
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10"></div>

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E7FE29]">
                <FaTrophy className="text-2xl text-gray-900" />
              </div>

              <h3 className="text-2xl font-bold md:text-3xl">
                Build. Choose. Win.
              </h3>

              <p className="mt-3 leading-7 text-gray-200">
                Your dream XI is only a few smart choices away. Select the
                players you believe can take your team beyond the boundaries.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/20 pt-6">
                <div>
                  <h4 className="text-2xl font-bold text-[#E7FE29]">100+</h4>
                  <p className="mt-1 text-xs text-gray-300">
                    Players
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-[#E7FE29]">11</h4>
                  <p className="mt-1 text-xs text-gray-300">
                    Dream XI
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-[#E7FE29]">∞</h4>
                  <p className="mt-1 text-xs text-gray-300">
                    Possibilities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Floating Card */}
          <div
            className="
              absolute
              -bottom-5
              -left-2
              rounded-xl
              bg-white
              px-5
              py-3
              shadow-xl
              sm:-left-5
            "
          >
            <p className="text-xs text-gray-500">Your team</p>
            <p className="font-bold text-gray-900">
              Your rules. Your XI. 🏏
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
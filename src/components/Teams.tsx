import { FaArrowRight, FaTrophy } from "react-icons/fa6";

export default function TeamCTA() {
  return (
    <section className="container mx-auto my-20 px-4">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-linear-to-r
          from-sky-700
          via-[#17152F]
          to-purple-700
          px-6
          py-14
          text-center
          text-white
          shadow-2xl
          md:px-12
          md:py-16
        "
      >
        {/* Decorative circles */}
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10"></div>

        <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-purple-400/20"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E7FE29] shadow-lg">
            <FaTrophy className="text-2xl text-gray-900" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Build Your
            <span className="text-[#E7FE29]"> Dream Team?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-200 md:text-base">
            Pick your favorite players, manage your credits wisely, and
            create the ultimate cricket squad. Your winning team starts here.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-[#E7FE29]
                px-6
                py-3
                font-bold
                text-gray-900
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Build My Team
              <FaArrowRight />
            </button>

            <button
              className="
                rounded-lg
                border
                border-white/40
                px-6
                py-3
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
              "
            >
              Explore Players
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
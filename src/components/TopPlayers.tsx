import { FaArrowRight, FaStar } from "react-icons/fa6";

const topPlayers = [
  {
    name: "Virat Kohli",
    role: "Batsman",
    rating: "9.8",
    image:
      "https://img.cricketworld.com/images/e-148508/india's-virat-kohli-celebrates-after-hitting-four-runs-to-reach-his-century-and-win-the-match.jpg",
  },
  {
    name: "Rohit Sharma",
    role: "Batsman",
    rating: "9.6",
    image:
      "https://www.babushahi.com/upload/image/Rohit-Sharma-176139342826.jpg",
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    rating: "9.7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Gswk2vJfY4JcONqYpcFhv-dIF2AEEyIkxy8h5gIalWhTyWYFvA7eqPQ&s=10",
  },
];

export default function TopPlayers() {
  return (
    <section className="container mx-auto my-16 px-4">
      {/* Heading */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-2 rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
          TOP PERFORMERS
        </span>

        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Meet the <span className="text-purple-600">Game Changers</span>
        </h2>

        <p className="mt-3 max-w-2xl text-gray-500">
          Build your dream team with some of the most exciting cricket
          players. Choose wisely and create a team made for victory.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topPlayers.map((player) => (
          <div
            key={player.name}
            className="group overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={player.image}
                alt={player.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow">
                <FaStar className="text-yellow-400" />
                {player.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {player.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">{player.role}</p>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7FE29] transition duration-300 hover:translate-x-1">
                  <FaArrowRight className="text-gray-900" />
                </button>
              </div>

              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-sky-600 to-purple-600"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 flex justify-center">
        <button className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-700">
          View All Players
        </button>
      </div>
    </section>
  );
}
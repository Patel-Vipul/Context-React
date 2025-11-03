import naruto from "../assests/naruto2.jpg";

export default function Card() {
  return (
    <div className="animate-chakra w-full max-w-sm mx-auto bg-gradient-to-b from-orange-50 to-orange-100 border-2 border-orange-400 rounded-2xl shadow-xl overflow-hidden dark:from-gray-900 dark:to-gray-800 dark:border-orange-600 transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={naruto}
          alt="Naruto Uzumaki"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-3">
          <h3 className="text-2xl font-bold text-orange-400 drop-shadow-lg dark:text-orange-300">
            Naruto Uzumaki
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 text-center">
        <p className="text-gray-700 dark:text-gray-300 italic">
          “I’m not gonna run away, I never go back on my word! That’s my nindō.”
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-3 mt-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-100">
            Leaf Village
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
            Genin
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-100">
            Wind Style
          </span>
        </div>

        {/* Power & Button */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            Power: 9,000🔥
          </span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
            Summon
          </button>
        </div>
      </div>
    </div>
  );
}

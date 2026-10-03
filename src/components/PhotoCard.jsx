export default function PhotoCard({ photo, onView }) {
    return (
      <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 flex flex-col h-full transform hover:-translate-y-2">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <button
              onClick={onView}
              className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg"
            >
              View Details
            </button>
          </div>
          <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/10 shadow-sm">
            ID: {photo.id}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow bg-white dark:bg-slate-800 z-10">
          <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full w-max mb-3 border border-indigo-100 dark:border-indigo-800/50">
            Album ID: {photo.albumId}
          </div>
          <h3 className="text-slate-800 dark:text-slate-100 font-semibold text-sm line-clamp-2 leading-relaxed capitalize group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
            {photo.title}
          </h3>
        </div>
      </div>
    );
  }
export default function Modal({ photo, onClose }) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full flex flex-col md:flex-row transform transition-all border border-slate-200 dark:border-slate-700/50 animate-in fade-in zoom-in-95 duration-300">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-slate-900/40 hover:bg-slate-900/80 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:rotate-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-800 h-64 md:h-auto overflow-hidden">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-lg border border-indigo-200 dark:border-indigo-800/50">
                Photo #{photo.id}
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-lg border border-purple-200 dark:border-purple-800/50">
                Album #{photo.albumId}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 capitalize leading-tight">
              {photo.title}
            </h2>
            <div className="mt-auto">
              <a
                href={photo.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-500/30 transition-all active:scale-[0.98]"
              >
                <span>Open Original Image</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default function Footer() {
    return (
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-10 mt-12 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-3">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 tracking-wide">
            LuminaGallery
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    );
  }
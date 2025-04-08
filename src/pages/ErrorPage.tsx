import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/file.svg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-slate-50 dark:bg-slate-950 selection:bg-indigo-100 selection:text-indigo-700">
      {/* Left/Top Section: Image (50% on Desktop, Min 50% on Mobile) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-screen flex items-center justify-center p-8 md:p-12 bg-indigo-50/30 dark:bg-indigo-950/10">
        <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square flex items-center justify-center">
          <div className="absolute  inset-0 bg-indigo-500/5 rounded-full blur-3xl" />
          <img
            src={NotFoundImage}
            alt="404 Illustration"
            className="relative w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 animate-in fade-in zoom-in"
          />
        </div>
      </div>

      {/* Right/Bottom Section: Content (50% on Desktop, Min 50% on Mobile) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-24 text-center lg:text-left lg:items-start">
        <div className="max-w-md w-full animate-in slide-in-from-right-10 duration-1000 py-10 lg:py-0">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full">
            Error 404
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-slate-50 mb-6 leading-tight">
            Lost in Space?
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            The page you're looking for has vanished into the void. Don't worry,
            even the best travelers lose their way sometimes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 active:scale-[0.98] text-lg whitespace-nowrap"
            >
              Back to Safety
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-slate-700 dark:text-slate-200 transition-all bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] text-lg whitespace-nowrap"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Decorative footer element */}
        <div className="absolute bottom-8 lg:bottom-12 items-center text-slate-400 dark:text-slate-600 text-xs font-medium uppercase tracking-[0.2em] hidden lg:flex">
          <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-800 mr-4" />
          Quantum Navigator
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

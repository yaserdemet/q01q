import { WifiOff } from "lucide-react";

const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-tr from-rose-500 via-pink-500 to-orange-400 p-1 shadow-lg animate-pulse">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-zinc-900">
          <WifiOff size={40} className="text-zinc-800 dark:text-zinc-100" />
        </div>
      </div>

      <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Connection Lost
      </h1>
      <p className="max-w-70 text-zinc-500 dark:text-zinc-400">
        Oops! It looks like you're currently offline. Please check your internet
        connection.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-10 rounded-full bg-zinc-900 px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Retry Connection
      </button>
    </div>
  );
};

export default Offline;

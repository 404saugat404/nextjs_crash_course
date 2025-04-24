'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}

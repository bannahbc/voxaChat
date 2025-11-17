function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go back to Login
      </a>
    </div>
  );
}

export default NotFound;

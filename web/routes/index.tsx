export default function Home() {
  return (
    <div class="bg-blue-500 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">plzify</h1>
        <div>
          <a href="/login">
            <button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 rounded mr-2">
              Login
            </button>
          </a>
          <a href="/signup">
            <button class="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 rounded">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

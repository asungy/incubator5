const buttonStyle = "bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 rounded";

interface BannerProps {
  loggedIn: boolean;
}

/// Banner to be displayed when user is not logged in.
function DefaultBanner() {
  return (
    <div class="bg-blue-500 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">plzify</h1>
        <div>
          <a href="/login">
            <button class={buttonStyle + " mr-2"}>
              Login
            </button>
          </a>
          <a href="#">
            <button class={buttonStyle}>
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

/// Banner to be displayed when user is logged in.
function AuthorizedBanner() {
  return (
    <div class="bg-blue-500 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">plzify</h1>
      </div>
    </div>
  );
}

export default function Banner(props: BannerProps) {
  if (props.loggedIn) {
    return <AuthorizedBanner />;
  }
  return <DefaultBanner/>;
}

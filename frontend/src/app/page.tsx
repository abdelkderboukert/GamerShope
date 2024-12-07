import HomePage from "./home/page";
import ProtectedRoute from "./_utils/ProtectedRoute";

export default function Home() {
  return (
    <>
      <HomePage />
      <ProtectedRoute href="/shope">shope</ProtectedRoute>
    </>
  );
}

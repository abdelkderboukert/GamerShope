import HomePage from "./home/page";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function Home() {
  return (
    <>
      <HomePage/>
      <ProtectedRoute herf="/shope"></ProtectedRoute>
    </>
    
  );
}

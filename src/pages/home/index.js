import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import AuctionForm from "./auctionForm";

function HomeRoute() {
  return (
    <div>
      <Nav />
      <h1>Home Page</h1>
      <AuctionForm />
    </div>
  );
}
export default HomeRoute;

import { Link } from "react-router-dom";
import error from "../../assets/images/error/Frame.png";
const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <img src={error} alt="" />
      </div>
      <div className="relative">
        <Link to="/">
          <button className="btn absolute bottom-32 text-3xl h-20 btn-error btn-outline w-full">
            Go Back Home!
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;

import PageNotImage from "../../assets/zoro_error.png";
import Button from "../../components/Button/Button";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div>
        <img
          className="error-image"
          draggable="false"
          src={PageNotImage}
          alt="zoro"
        />
        <h1 className="error-heading">404 Error</h1>
        <p className="error-p">Oops! We can't find this page.</p>
        <Button link="home" text="Back to homepage" />
      </div>
    </div>
  );
};

export default PageNotFound;

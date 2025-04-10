import { useNavigate } from "react-router-dom";

const Offer = ({ offer }) => {
  const navigate = useNavigate();
  const handleAplyButton = () => {
    navigate(-1);
  };

  return (
    <div
      className="card px-3 py-2 my-2"
      style={{
        width: "27rem",
        color: "#fffafa",
        background: "#8fbc8f",
        border: "#808080",
      }}
    >
      <div className="card-img-top">
        <h4>{offer.offername}</h4>
      </div>
      <div className="card-body">
        <h4 className="card-title">{offer.discount}</h4>
        <h6 className="card-subtitle">{offer.offerTime}</h6>
        <button
          className="button  mt-2"
          style={{ background: "#2f4f4f", color: "white" }}
          onClick={handleAplyButton}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
export default Offer;

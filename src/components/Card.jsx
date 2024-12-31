/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "250px",
        height: "300px",
        background: "#0073ad",
        borderRadius: "20px",
      }}
    >
      <img
        width={100}
        height={100}
        loading="lazy"
        src={data.image}
        alt="sorry"
      />
      <h4>{data.name}</h4>
      <p>{data.current_price}$</p>
    </div>
  );
};

export default Card;

import { SyncLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const Loader = ({ loading }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "30px",
      }}
    >
      {loading && <SyncLoader color="#0073ad" />}
    </div>
  );
};

export default Loader;

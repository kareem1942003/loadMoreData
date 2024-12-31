import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const stopRender = useRef(true);
  let api = `http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setData((prev) => [...prev, ...data]);
      } catch (error) {
        console.log("error", error);
      } finally {
        stopRender.current = true;
      }
    };

    if (stopRender.current) {
      stopRender.current = false;
      console.log("fetching data");
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight &&
      loading === false
    ) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <h1 style={{ width: "100%", textAlign: "center" }}>Currency Gallery</h1>
        {data.length === 0 && <Loader loading={true} />}
        <div
          style={{
            padding: "30px 0",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {data && data.map((curr, i) => <Card key={i} data={curr} />)}
        </div>
        <Loader loading={loading} />
      </div>
    </>
  );
}

export default App;

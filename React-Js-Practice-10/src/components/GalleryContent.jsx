import React, { useEffect, useState } from "react";
import axios from "axios";
const GalleryContent = () => {
  const [dataArr, setDataArr] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${pagination}&limit=18`,
      );
      const apiDataStorage = res.data;
      setDataArr(apiDataStorage);
      console.log(apiDataStorage);
    } catch (err) {
      console.error("Error Found.!" + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [pagination]);

  return (
    <React.Fragment>
      <div className="w-screen h-screen">
        {" "}
        <div className="flex flex-wrap gap-2 justify-center items-center h-full py-10">
          {loading && <h1>Loading...</h1>}

          {loading ||
            dataArr.map((element) => {
              return (
                <div className="w-1/7 h-60">
                  <img
                    src={element.download_url}
                    className="w-full h-full object-cover "
                  />
                  <span className="m-0 p-0">{element.author}</span>
                </div>
              );
            })}
        </div>
        <div className="flex justify-center gap-10 bg-black">
          <button
            onClick={() => {
              setPagination(pagination - 1);
            }}
            className="bg-red-400 py-2 px-4 active:bg-red-500 active:scale-97 rounded"
          >
            Prev Page
          </button>
          <span>Page: {pagination}</span>
          <button
            onClick={() => {
              setPagination(pagination + 1);
            }}
            className="bg-red-400 py-2 px-4 active:bg-red-500 active:scale-97 rounded"
          >
            Next Page
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GalleryContent;

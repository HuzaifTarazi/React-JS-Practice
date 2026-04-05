import React, { useEffect, useState } from "react";
import axios from "axios";
const PracticeSet2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataArray, setDataArray] = useState([]);

  const fetchUserData = (e) => {
    setLoading(true);
    setInputValue(e.target.value);
  };

  const fetchApi = async () => {
    try {
      const fetchApi = await axios.get(
        `https://dummyjson.com/products/search?q=${inputValue}`,
      );
      const apiStorage = fetchApi.data.products;
      setDataArray(apiStorage);
      console.log(apiStorage);
    } catch (err) {
      console.error("Error..!" + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!inputValue.trim()) {
      setDataArray([]);
      return;
    }
    fetchApi();
  }, [inputValue]);

  return (
    <div className="w-1/4">
      <h2 className="py-1">Practice Set - 2</h2>
      <input
        onChange={fetchUserData}
        type="text"
        placeholder="Fetch Data"
        className="border bg-gray-200 py-1 px-2 text-black outline-none rounded"
        value={inputValue}
      />

      {loading && (
        <div className="my-2">
          <ul className="bg-gray-600 w-full py-2 px-2 rounded outline-purple-600 outline-2">
            <li className="py-1">LOADING...</li>
          </ul>
        </div>
      )}

      {dataArray.map((element) => {
        return (
          <div className="my-2">
            <ul className="bg-gray-600 w-full py-2 px-2 rounded outline-purple-600 outline-2">
              <li className="py-1">{element.title}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PracticeSet2;

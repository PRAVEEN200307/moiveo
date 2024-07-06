import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">

      <div className="fixed left-3  right-3 pr-10 top-16 w-full z-20">
         <input 
           type="text"
           placeholder="Search here..."
           onChange={(e)=>navigate(`?q=${e.target.value}`)}
           className="px-4 py-3 outline-none  text-neutral-800 rounded-full w-full "
          />
      </div>

      <div className="container mx-auto pt-36 pl-2">
        <h3 className="capitalize lg:text-xl my-2  font-semibold text-lg">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search" + index}
                media_type={data.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

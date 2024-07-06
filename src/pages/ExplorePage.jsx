import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };


  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(()=>{
    setPageNo(1);
  },[params.explore])

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className=" container mx-auto">
        <h3 className="capitalize lg:text-xl my-2 font-semibold text-lg">
          Popular {params.explore} Show
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'">
           {
             data.map((exploreData,index)=>{
               return(
                  <Card  data={exploreData} key={exploreData.id+"ExploreSection"+index}  media={params.explore} />
               )
             })
           }
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;

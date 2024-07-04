import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData || []);
  const {data:nowPlaying} =useFetch('/movie/now_playing');
  const {data:toRatedData} = useFetch('./movie/top_rated');
  const {data:popularTvShowData} = useFetch('/tv/popular');
  const {data:onTheAir} = useFetch('/tv/on_the_air');

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}  />
      <HorizontalScrollCard data={nowPlaying} heading={"Now playing"} media={'movie'}/>
      <HorizontalScrollCard data={toRatedData} heading={"Top Rated Movies"} media={'movie'} />
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media={'tv'} />
      <HorizontalScrollCard data={onTheAir} heading={"On The Air"} media={'tv'} />


    </div>
  );
};

export default Home;

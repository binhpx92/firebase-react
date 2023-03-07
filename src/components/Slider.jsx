import React, { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useNavigate } from "react-router";
export default function Slider() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
      console.log(listings);
    }
    fetchListings();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  if (listings.length === 0) {
    return <></>;
  }
  return (
    listings && (
      <>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 4000 }}
        >
          {listings.map(({ data, id }) => {
            return (
              <SwiperSlide
                key={id}
                onClick={() => navigate(`/category/${data.type}/${id}`)}
              >
                <div
                  style={{
                    background: `url(${data.imgUrls[0]}) center, no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[300px] relative overflow-hidden"
                ></div>
                <p className="text-white absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 rounded-br-2xl">
                  {data.name}
                </p>
                <p className="text-white absolute left-1 bottom-3 font-semibold max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 rounded-tr-2xl">
                  ${data.discountedPrice ?? data.regularPrice}
                  {data.type === "rent" && " / month"}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    )
  );
}

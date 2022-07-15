import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetPicturesApiQuery } from "../store/apis/HumorPicturesApi";

export default function PictureDetail() {
  const { id } = useParams();
  const { data } = useGetPicturesApiQuery({
    refetchOnMountOrArgChange: true,
  });
  const pictureData =
    data?.data?.memes &&
    data?.data?.memes?.filter((f) => f?.id === id)[0] &&
    data?.data?.memes?.filter((f) => f?.id === id)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="picture-detail-root">
      <div className="picture-detail-wrapper">
        <div className="text-item">
          <p>{pictureData.name}</p>
        </div>
        <div className="img-item">
          <img src={pictureData.url} alt={pictureData.name} />
        </div>
      </div>
    </div>
  );
}

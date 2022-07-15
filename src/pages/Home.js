import React from "react";
import { useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";

import { useGetPicturesApiQuery } from "../store/apis/HumorPicturesApi";

import * as ROUTES from "../constants/routePath";

export default function Home() {
  const navigate = useNavigate();
  const { data } = useGetPicturesApiQuery({
    refetchOnMountOrArgChange: true,
  });

  const columns = [
    {
      name: "",
      cell: (row) => (
        <div className="cell-root" onClick={() => onClick(row.id)}>
          <div className="img-item">
            <img src={row.url} alt={row.id} />
          </div>
          <p className="text">{row.name}</p>
        </div>
      ),
    },
  ];

  const onClick = (id) => {
    navigate(`${ROUTES.PICTUREDETAIL_WITHOUT_PARAM}/${id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={data?.data?.memes ? data?.data?.memes : []}
      highlightOnHover
    />
  );
}

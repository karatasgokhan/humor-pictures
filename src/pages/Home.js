import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";

import * as ROUTES from "../constants/routePath";

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.data.memes);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "",
      cell: (row) => (
        <div className="cell-root">
          <div className="img-item">
            <img src={row.url} alt={row.id} />
          </div>
          <p className="text" onClick={() => onClick(row.id)}>
            {row.name}
          </p>
        </div>
      ),
    },
  ];

  const onClick = (id) => {
    navigate(`${ROUTES.PICTUREDETAIL_WITHOUT_PARAM}/${id}`);
  };

  return (
    <DataTable columns={columns} data={data ? data : []} highlightOnHover />
  );
}

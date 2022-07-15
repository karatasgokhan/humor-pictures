import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

import * as ROUTES from "../constants/routePath";

export default function NotFoundPage() {
  return (
    <div className="not-found-root">
      <div className="not-found-wrapper">
        <div className="not-found-text-block">
          <h2>Hata! Aradığınız sayfayı bulamıyoruz</h2>
        </div>
        <div className="not-found-button-block">
          <FontAwesomeIcon icon={faArrowDownLong} />
          <a href={ROUTES.HOME}>Ana Sayfaya Dönmek İçin Tıklayın</a>
        </div>
      </div>
    </div>
  );
}

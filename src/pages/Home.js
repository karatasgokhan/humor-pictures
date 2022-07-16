import React, { useState } from "react";
import Modal from "../components/Modal/Modal";

import useInfiniteScroll from "../helper/useInfiniteScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

import { useGetPicturesApiQuery } from "../store/apis/HumorPicturesApi";
import Loading from "../components/Loading/Loading";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [cellIndex, setCellIndex] = useState(-1);

  const { data } = useGetPicturesApiQuery({
    refetchOnMountOrArgChange: true,
  });

  const halfDataLength = data?.data?.memes?.length / 2;
  const allDataLength = data?.data?.memes?.length;
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  const [listItems, setListItems] = useState(
    data?.data?.memes.slice(0, halfDataLength)
  );

  function fetchMoreListItems() {
    if (listItems.length >= data?.data?.memes?.length) {
      setIsFetching(false);
    } else {
      setTimeout(() => {
        setListItems((prevState) => [
          ...prevState,
          ...data?.data?.memes.slice(halfDataLength, allDataLength),
        ]);
        setIsFetching(false);
      }, 2000);
    }
  }

  return (
    <>
      <ul className="table-root">
        {listItems.map((listItem, index) => (
          <div
            key={index}
            className="cell-root"
            onClick={() => {
              setCellIndex(index);
              setIsOpen(true);
            }}
          >
            <div className="cell-wrapper">
              <div className="img-item">
                <img src={listItem.url} alt={listItem.id} />
              </div>
              <div className="text-item">
                <p>{listItem.name}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="scroll-item" onClick={() => window.scrollTo(0, 0)}>
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </div>
      {isFetching && <Loading />}
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          url={data?.data?.memes[cellIndex]?.url}
          id={data?.data?.memes[cellIndex]?.id}
        />
      )}
    </>
  );
}

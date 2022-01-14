import { Page, PageContent } from "components/layout/page";
import { useFetchUser, useFetchAlbums } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUsers } from "stores/reducer/user-reducer";
import { selectAlbums, addAlbums } from "stores/reducer/album-reducer";
import { useEffect, useState } from "react";

export function PhotoDetail({ match }) {
  const album = useSelector(selectAlbums);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!album) {
      dispatch(addUsers(album));
    }
    console.log(
      album?.filter((val) => val.id == parseInt(match.params.photoId))[0].title
    );
  }, [album]);

  return (
    <Page>
      <PageContent>
        <div className="flex flex-col py-8 space-y-6 lg:px-8">
          <p className="font-medium text-lg">
            {
              album?.filter(
                (val) => val.id == parseInt(match.params.photoId)
              )[0].title
            }
          </p>
          <img
            className="hover:scale-125 hover:cursor-zoom-in"
            src={
              album?.filter(
                (val) => val.id == parseInt(match.params.photoId)
              )[0].url
            }
            alt={
              album?.filter(
                (val) => val.id == parseInt(match.params.photoId)
              )[0].title
            }
          />
        </div>
      </PageContent>
    </Page>
  );
}

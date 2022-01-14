import { Page, PageContent } from "components/layout/page";
import { useFetchUser, useFetchAlbums } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUsers } from "stores/reducer/user-reducer";
import { selectAlbums, addAlbums } from "stores/reducer/album-reducer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function fetchPhoto(albumId) {
  return axios(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_page=0&_limit=6`
  ).then((res) => res.data);
}

export function UserDetail({ match }) {
  const { data: user } = useFetchUser();
  const { data: album } = useFetchAlbums({ userId: match.params.userId });

  const users = useSelector(selectUsers);
  // const albums = useSelector(selectAlbums);
  const [albums, setAlbums] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(addUsers(user));
    }
  }, [user]);
  const handlePhoto = async (album) => {
    const data = await fetchPhoto(album.id);
    setAlbums(data);
    console.log(data);
    dispatch(addAlbums(data));
  };

  return (
    <Page>
      <PageContent>
        <div className="flex flex-col py-8 space-y-6 lg:px-8">
          <div className="flex flex-col space-y-3">
            <p className="font-medium font-primary text-base text-left md:text-base">
              User :{" "}
              <span className="p-1 bg-red-300">
                {
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.name
                }
              </span>
            </p>
            <p className="font-medium font-primary text-base text-left md:text-base">
              E-mail :{" "}
              <span className="p-1 bg-green-300">
                {
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.email
                }
              </span>
            </p>
            <p className="font-medium font-primary text-base text-left md:text-base">
              Address :{" "}
              <span className="p-1 bg-orange-300">
                {`${
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.address.street
                } St, ${
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.address.suite
                }, ${
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.address.city
                }, ZIP : ${
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.address.zipcode
                }`}
              </span>
            </p>

            <p className="font-medium font-primary text-base text-left md:text-base">
              Company :{" "}
              <span className="p-1 bg-blue-300">
                {
                  users?.filter(
                    (user) => user.id === parseInt(match.params?.userId)
                  )[0]?.company?.name
                }
              </span>
            </p>
          </div>
          <p className="text-lg font-bold">Albums</p>

          <ul className="grid grid-cols-2 gap-4">
            {albums?.map((album) => (
              <Link
                to={`/photo/${album.id}`}
                className="bg-white duration-200 flex flex-col p-3 rounded-lg shadow-lg space-y-4 transition-colors hover:bg-gray-200 cursor-pointer"
                key={album.id}
              >
                <p>{album.title}</p>
                <img src={album.thumbnailUrl} />
              </Link>
            ))}
          </ul>
          <button
            className="btn btn-block btn-info"
            onClick={() => handlePhoto(album[0])}
          >
            Load Albums
          </button>
        </div>
      </PageContent>
    </Page>
  );
}

import { useState, useEffect, useRef, Fragment } from "react";
import { useFetchPost, useFetchUser } from "hooks";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUsers } from "stores/reducer/user-reducer";

export function PostList() {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(0);
  const { data: user } = useFetchUser();
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const {
    data: post,
    error,
    isLoading,
    isFetching,
  } = useFetchPost({ page, limit });

  const handleLoadMore = () => {
    setLimit(limit + 94);
  };

  useEffect(() => {
    if (user) {
      dispatch(addUsers(user));
    }
  }, [user]);

  return (
    <div className="flex flex-col py-8 space-y-3 lg:px-8">
      <p className="text-base font-bold text-left font-primary md:text-lg">
        Latest Post
      </p>
      {isLoading || isFetching ? (
        <div className="flex items-center justify-center">
          <div
            className="inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin"
            role="status"
          ></div>
        </div>
      ) : null}
      <div className="space-y-2">
        {post?.map((item) => (
          <Link
            className="flex flex-col p-3 space-y-4 transition-colors duration-200 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-200"
            key={item.id}
            to={`/post/${item.id}`}
          >
            <div className="flex flex-col items-center bg-emerald-500">
              <div className="flex flex-row px-2 py-1 rounded-md">
                <p className="text-xs font-bold text-center text-gray-800 font-primary md:text-sm">
                  {item.title}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-xs font-bold text-gray-800 font-primary md:text-sm">
                User :{" "}
                <span className="p-1 bg-red-300">
                  {users[item?.userId - 1]?.name}
                </span>
              </p>
              <p className="text-xs font-bold text-gray-800 font-primary md:text-sm">
                Company:{" "}
                <span className="p-1 bg-blue-300">
                  {users[item.userId - 1]?.company.name}
                </span>
              </p>
            </div>
            <p className="text-xs text-gray-600 md:text-sm">{item?.body}</p>
          </Link>
        ))}
        <button className="btn btn-block btn-info" onClick={handleLoadMore}>
          Load All News
        </button>
      </div>
    </div>
  );
}

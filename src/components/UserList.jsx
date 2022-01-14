import { useEffect, useRef, Fragment } from "react";
import { useFetchUser } from "hooks";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUsers } from "stores/reducer/user-reducer";

export function UserList() {
  const { data: user } = useFetchUser();
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(addUsers(user));
    }
  }, [user]);

  return (
    <div className="flex flex-col space-y-3 lg:px-8">
      <p className="font-bold font-primary text-base text-left md:text-lg">
        User List
      </p>

      <div className="space-y-2">
        {users?.map((user) => (
          <Link
            className="bg-white duration-200 flex flex-col p-3 rounded-lg shadow-lg space-y-4 transition-colors hover:bg-gray-200 cursor-pointer"
            key={user.id}
            to={`/user/${user.id}`}
          >
            <div className="flex flex-col items-center bg-emerald-500">
              <div className="flex flex-row w-max  px-2 py-1 rounded-md">
                <p className="font-bold font-primary text-gray-800 text-xs md:text-sm  text-center">
                  {user.name}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold font-primary text-gray-800 text-xs md:text-sm">
                Company :{" "}
                <span className="p-1 bg-red-300">{user.company.name}</span>
              </p>
              <p className="font-bold font-primary text-gray-800 text-xs md:text-sm">
                Email: <span className="p-1 bg-blue-300">{user.email}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

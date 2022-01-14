import { Page, PageContent } from "components/layout/page";
import { useFetchPostById, useFetchUser } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUsers } from "stores/reducer/user-reducer";
import { useEffect, useState } from "react";

export function PostDetail({ match }) {
  const {
    data: post,
    isLoading,
    error,
  } = useFetchPostById({ id: match.params.id });
  const { data: user } = useFetchUser();
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(addUsers(user));
    }
  }, [user]);
  return (
    <Page>
      <PageContent>
        <div className="flex flex-col py-8 space-y-3 lg:px-8">
          <div className="flex flex-col space-y-3">
            <p className="font-bold font-primary text-base text-left md:text-lg">
              {post?.title}
            </p>
            <p className="font-medium font-primary text-base text-left md:text-base">
              User :{" "}
              <span className="p-1 bg-red-300">
                {users?.filter((user) => user.id === post?.userId)[0]?.name}
              </span>
            </p>
            <p className="font-medium font-primary text-base text-left md:text-base">
              Company :{" "}
              <span className="p-1 bg-blue-300">
                {
                  users?.filter((user) => user.id === post?.userId)[0]?.company
                    ?.name
                }
              </span>
            </p>
            <p>{post?.body}</p>
          </div>

          <div className="space-y-2"></div>
        </div>{" "}
      </PageContent>
    </Page>
  );
}

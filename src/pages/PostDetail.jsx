import { Page, PageContent } from "components/layout/page";
import { useFetchPostById, useFetchUser, useFetchComments } from "hooks";
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
  const { data: comments } = useFetchComments({ postId: match.params.id });
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
        <div className="flex flex-col py-8 space-y-6 lg:px-8">
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
            <p className="text-lg">{post?.body}</p>
            <div className="flex flex-col space-y-3">
              <p className="text-lg font-bold">Comments</p>
              <ul className="flex flex-col space-y-4">
                {comments?.map((comment) => (
                  <li key={comment.id}>
                    <p className="p-1 bg-blue-300 font-medium">
                      {comment.name}
                    </p>
                    <p className="">{comment.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-2"></div>
        </div>{" "}
      </PageContent>
    </Page>
  );
}

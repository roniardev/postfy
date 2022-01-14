import { Page, PageContent } from "components/layout/page";
import { useFetchPostById } from "hooks";

export function PostDetail({ match }) {
  const {
    data: post,
    isLoading,
    error,
  } = useFetchPostById({ id: match.params.id });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Page>
      <PageContent>
        <div className="flex flex-col py-8 space-y-3 lg:px-8">
          <div className="flex flex-col space-y-3">
            <p className="font-bold font-primary text-base text-left md:text-lg">
              {post.title}
            </p>
          </div>

          <div className="space-y-2"></div>
        </div>{" "}
      </PageContent>
    </Page>
  );
}

import { Page, PageContent } from "components/layout/page";
import { PostList } from "components";

function Home() {
  return (
    <Page>
      <PageContent>
        <div className="flex flex-col items-center px-3 py-8 space-y-2 lg:px-8">
          <PostList />
        </div>
      </PageContent>
    </Page>
  );
}

export default Home;

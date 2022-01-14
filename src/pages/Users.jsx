import { Page, PageContent } from "components/layout/page";
import { UserList } from "components";

function Users() {
  return (
    <Page>
      <PageContent>
        <div className="flex flex-col items-center px-3 py-8 space-y-2 lg:px-8">
          <UserList />
        </div>
      </PageContent>
    </Page>
  );
}

export default Users;

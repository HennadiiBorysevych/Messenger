import SideBar from "../components/sidebar/SideBar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

export default async function Userslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </SideBar>
  );
}

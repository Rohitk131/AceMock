import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-5">
      <h3>Interview generation</h3>
      <Agent
        userName={user!.name}
        userId={user?.id}
        profileImage={user?.profileURL}
        type="generate"
      />
    </div>
  );
};

export default Page;
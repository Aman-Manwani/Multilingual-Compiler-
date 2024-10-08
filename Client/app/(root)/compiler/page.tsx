import { currentUser } from "@clerk/nextjs/server";
import EditorComponent from "./Editor";
import { redirect } from "next/navigation";

const CodeEditor: React.FC = async() => {

  const user = await currentUser();

  if(!user) {
    redirect('/sign-in');
  }

  return (
    <div className="pb-4 bg-[rgb(15,10,25)]">
      <EditorComponent />
    </div>
  );
};

export default CodeEditor;

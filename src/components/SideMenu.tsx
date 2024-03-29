type ObjType = {
  name: string;
  dateOfYear: string;
  isVerified: boolean;
  tag: string;
  description: string;
};

type PropType = {
  id: number;
  title: string;
  buttonText: string;
  contents: Array<ObjType>;
};

export const SideMenu = ({
  data,
  state,
}: {
  data: PropType;
  state: (arg0: number) => void;
}) => {
  return (
    <div
      onClick={() => state(data.id)}
      className={`${
        data.title === "Financial" ? "border-none" : "border-b"
      } border-black text-xl hover:text-2xl hover:text-red-600 duration-[0.3s] h-10 px-3`}
    >
      <button>{data.title}</button>
    </div>
  );
};

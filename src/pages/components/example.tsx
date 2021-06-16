import { Dispatch, FC, SetStateAction } from "react";

interface Estado {
  name?: string;
}

interface Props {
  title?: string;
  name?: string;
  state: [state: Estado, setstate: Dispatch<SetStateAction<Estado>>];
}

const Index: FC<Props> = ({ state, name }) => {
  const [componentState, setComponentState] = state;
  return (
    <div>
      <h1>{name}</h1>
      <button></button>
    </div>
  );
};

export default Index;

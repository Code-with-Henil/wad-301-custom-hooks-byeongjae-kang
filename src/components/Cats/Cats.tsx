import { useCatsContext } from "../../context/cats-context";
import { Button } from "../core/Button/Button";

export const Cats = () => {
  // use the context
  const { cats, remove } = useCatsContext();

  return (
    <ul>
      {cats.map(({ id, url }) => (
        <li key={id}>
          <div>
            <img src={url} alt="" />
          </div>
          <Button onClick={() => remove(id)}>remove this cat!</Button>
        </li>
      ))}
    </ul>
  );
};

import { useId } from "react";
import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const id = useId();
  const contacts = useSelector((state) => state.contacts.items);
  const value = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      {contacts.length > 0 && (
        <>
          {" "}
          <label htmlFor={id}>Find contacts by name</label>
          <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </>
      )}
    </div>
  );
};

export default SearchBox;

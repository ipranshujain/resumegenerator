import { AiFillPlusCircle } from "react-icons/ai";

export default function AddIcon({ children, onClick }) {
  return (
    <div className="add-icon-container" onClick={onClick}>
      <div className="add-icon">
        <AiFillPlusCircle size={30} />
      </div>
      <div className="add-icon-title">{children}</div>
    </div>
  );
}

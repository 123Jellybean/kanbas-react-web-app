import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentHeaderButtons() {
  return (
    <div className="float-end">
      <div className="wd-assignment-weight">
      40% of Total
    </div>
      <FaPlus className="fs-4 ms-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

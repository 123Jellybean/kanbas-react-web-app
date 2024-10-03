import { CiNoWaitingSign } from "react-icons/ci";

export default function NoWaiting() {
  return (
    <span className="me-1 position-relative">
      <CiNoWaitingSign
        style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5"
      />
      <CiNoWaitingSign className="text-white me-1 fs-6" />
    </span>
  );
}

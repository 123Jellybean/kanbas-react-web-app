const squares = [1, 4, 16, 25, 36];
export default function JsonStringify() {
  return (
    <div className="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <hr />
    </div>
  );
}
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function SearchBar() {
  return (
    <div>
      <Input placeholder="Search Pokemon" />
      <Button text="Search" />
    </div>
  );
}

export default SearchBar;
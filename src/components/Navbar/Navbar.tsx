import { Link } from "react-router-dom";
import "./Navbar.css";
import Matrix from "../Matrix/Matrix";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/vision/">عروسک</Link>
            </li>
            <li>
              <Link to="/vision/quiz">آزمون</Link>
            </li>
            <li>
              <Link to="/vision/election">انتخابات</Link>
            </li>
            <span
              onClick={() => alert("این بخش بعدا راهندازی می شود")}
              className="switch"
            >
              ???
            </span>
          </ul>
        </nav>
      </header>

      <div className="searchbox">
        <div className="inputarea">
          <input type="text" name="q" id="q" placeholder="فرم جستجوی پیشرفته" />
          <span className="searchIcon fa-duotone fa-telescope"></span>
        </div>
      </div>

      <div className="container">
        <button className="physic filterize">فیزیوتراپی</button>
        <button className="creative filterize">لپ تاپ سونی</button>
        <button className="charity filterize">خیریه</button>
        <button className="politics filterize">سیاست</button>
      </div>
    </>
  );
};

export default Navbar;

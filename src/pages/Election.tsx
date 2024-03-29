import { FormEvent, useRef, useState } from "react";
import "./Election.css";
import Navbar from "../components/Navbar/Navbar";

const Election = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const favoriteScienceRef = useRef<HTMLInputElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const errors: string[] = [];

    if (!nameRef.current?.value.trim()) {
      errors.push("نام و نام خانوادگی را وارد کنید.");
    }
    if (!titleRef.current?.value.trim()) {
      errors.push("عنوان را وارد کنید.");
    }
    if (!favoriteScienceRef.current?.value.trim()) {
      errors.push("علم مورد علاقه را وارد کنید.");
    }

    setFormErrors(errors);

    if (errors.length === 0) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact">
        <form onSubmit={onSubmit} method="post">
          <div className="mb-3">
            <label htmlFor="name">متن ارسالی جهت قدردانی</label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="نام و نام خانوادگی"
            />
            {formErrors.includes("نام و نام خانوادگی را وارد کنید.") && (
              <p className="error">نام و نام خانوادگی را وارد کنید.</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="title">عنوان</label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              placeholder="عنوان رو بنویس"
            />
            {formErrors.includes("عنوان را وارد کنید.") && (
              <p className="error">عنوان را وارد کنید.</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="favoriteScience">علم مورد علاقه</label>
            <input
              ref={favoriteScienceRef}
              type="text"
              name="favoriteScience"
              placeholder="علم مورد علاقم اینه"
            />
            {formErrors.includes("علم مورد علاقه را وارد کنید.") && (
              <p className="error">علم مورد علاقه را وارد کنید.</p>
            )}
          </div>
          <div className="caption">
            <div>
              <label htmlFor="description">توضیحات</label>
            </div>
            <textarea
              name="description"
              cols={30}
              rows={4}
              placeholder="چی میخوای بنویسی برام جوان؟"
            ></textarea>
          </div>
          <button className="filterize submit" type="submit">
            ثبت نتیجه
          </button>
        </form>
        {isVisible && (
          <div>
            <p className="success">با موفقیت کیر شدید دوست عزیز!</p>
            <p className="sendmessage">
              حالا برام اسکرین شات بگیر از صفحه بفرست
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Election;

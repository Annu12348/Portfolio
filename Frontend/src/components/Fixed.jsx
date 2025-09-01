import React, { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Fixed = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-black fixed text-white text-[10px] w-fit right-3 px-3 py-1 z-40 top-[94%] rounded font-semibold capitalize">
      <h1 className="flex items-center text-amber-200 gap-1">
        edit with{" "}
        <span>
          <CiBellOn />
        </span>{" "}
        lovable
      </h1>
      <span
        onClick={() => setVisible(false)}
        className="right-0.5 absolute top-[1%] cursor-pointer"
      >
        <IoMdClose />
      </span>
    </div>
  );
};

export default Fixed;

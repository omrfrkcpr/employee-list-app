import React from "react";
import { RiFileInfoLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const List = ({ employees }) => {
  console.log(employees);

  const navigate = useNavigate();

  return (
    <>
      {employees.map(({ id, name, age, image, email, cv, salary }) => (
        <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>

            <button
              onClick={() =>
                navigate(`/Person/${name}`, {
                  state: { id, name, age, image, email, cv, salary },
                })
              }
            >
              <RiFileInfoLine style={{ fontSize: "20px", width: "45px" }} />
            </button>

            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;

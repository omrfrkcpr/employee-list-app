import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../helper/data";

const Person = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [money, setMoney] = useState("en");

  const exchangeRateFromDollarToEuro = 0.95;

  const handleMoneyChange = (e) => {
    setMoney(e.target.value);
  };

  return (
    <main>
      <section
        className="container"
        style={{
          textAlign: "center",
          margin: "5rem auto",
          border: "1px solid lightgrey",
          padding: "0.5rem 2rem",
          backgroundColor: "whitesmoke",
        }}
      >
        {data.map(
          ({ name, email, image, id, cv, salary }) =>
            name === username && (
              <div key={id}>
                <img src={image} alt="" />
                <h3 style={{ textDecoration: "underline" }}>{name}</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem 0",
                  }}
                >
                  <h3>
                    Salary :{" "}
                    <span style={{ color: "red" }}>
                      {money === "en" && "$"}
                      {money === "en"
                        ? salary
                        : salary * exchangeRateFromDollarToEuro}
                      {money === "de" && "€"}
                    </span>
                  </h3>
                  <select
                    value={money}
                    onChange={handleMoneyChange}
                    style={{
                      height: "25px",
                      marginLeft: ".5rem",
                      outline: "none",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <option selected value="en">
                      💵Dollar
                    </option>
                    <option value="de">💶Euro</option>
                  </select>
                </div>
                <h4
                  style={{
                    width: "60%",
                    margin: "1rem auto",
                    backgroundColor: "white",
                  }}
                >
                  <a href={`mailto:${email}`}>{email}</a>
                </h4>
                <h5 style={{ fontFamily: "italic" }}>
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bolder",
                      textDecoration: "underline",
                    }}
                  >
                    CV:
                  </span>{" "}
                  {cv}
                </h5>
                <button
                  onClick={() => navigate(-1)}
                  style={{
                    padding: "0.2rem 0.7rem",
                    border: "none",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  GO HOME
                </button>
              </div>
            )
        )}
      </section>
    </main>
  );
};

export default Person;

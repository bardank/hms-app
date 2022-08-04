import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="w-screen h-screen">
      <div className="p-2 lg:p-8">
        <h2 className="text-xl font-semibold text-center py-4">
          Pick your table
        </h2>
        <div className="flex justify-center flex-wrap">
          {tables.map((item, i) => (
            <div className="p-4 shrink-0" key={i}>
              <Link
                className="border-primary text-primary border-2 rounded-md p-2"
                to={`/table/${item}`} >
                Table {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Table;

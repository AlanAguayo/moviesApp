import Link from "next/link";

interface InterfacePaginate {
  currentPage: number;
  totalPages: number;
}

const Paginate = ({ currentPage, totalPages }: InterfacePaginate) => {
  return (
    <div className="flex justify-center gap-4"> 
      {currentPage > 1 && ( //&& hace que renderice dependiendo de la condicional
        <Link
          href={`/movies/popular/?page=${Number(currentPage) - 1}`}
          className="bg-gray-800 font-bold py-2 px-4">
          Prev 
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          href={`/movies/popular/?page=${Number(currentPage) + 1}`}
          className="bg-gray-800 font-bold py-2 px-4">
          Next
        </Link>
      )}
    </div>
  );
};

export default Paginate;

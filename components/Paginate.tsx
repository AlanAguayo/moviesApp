import Link from "next/link";

interface InterfacePaginate {
  currentPage: number;
  totalPages: number;
}

const Paginate = ({ currentPage, totalPages }: InterfacePaginate) => {
  return (
    <div className="flex justify-center gap-4 mt-6 mb-6">
      {currentPage > 1 && ( //&& hace que renderice dependiendo de la condicionalg
        <Link
          href={`/movies/popular/?page=${Number(currentPage) - 1}`}
          className="bg-cyan-900 text-white font-bold py-2 px-4 rounded-r">
          Prev 
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          href={`/movies/popular/?page=${Number(currentPage) + 1}`}
          className="bg-cyan-900 text-white font-bold py-2 px-4 rounded-l">
          Next
        </Link>
      )}
    </div>
  );
};

export default Paginate;

import "../../css/pagination.css";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination-container">
        {pages.map((page) => (
          <li
            key={page}
            className={`pagination-item ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

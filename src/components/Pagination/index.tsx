import IconButton from "components/IconButton";
import ChevronLeft from "public/icon/chevron-left.svg";
import ChevronRight from "public/icon/chevron-right.svg";
import "twin.macro";

interface PaginationProps {
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  variant?: "start" | "center" | "end";
}

function Pagination({
  onPageChange,
  currentPage,
  totalPages,
  variant = "center",
}: PaginationProps): JSX.Element {
  const backButton = (
    <IconButton
      icon={<ChevronLeft />}
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    />
  );

  const nextButton = (
    <IconButton
      icon={<ChevronRight />}
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    />
  );

  const pageInfo = (
    <p tw="typography-body2">
      Página <span tw="font-medium">{currentPage}</span> de{" "}
      <button
        onClick={() => onPageChange(totalPages)}
        tw="font-medium hover:underline"
      >
        {totalPages}
      </button>
    </p>
  );

  return {
    start: (
      <div tw="flex items-center gap-16">
        <div tw="flex gap-8">
          {backButton}
          {nextButton}
        </div>

        {pageInfo}
      </div>
    ),
    center: (
      <div tw="flex items-center gap-16">
        {backButton}
        {pageInfo}
        {nextButton}
      </div>
    ),
    end: (
      <div tw="flex items-center gap-16">
        {pageInfo}

        <div tw="flex gap-8">
          {backButton}
          {nextButton}
        </div>
      </div>
    ),
  }[variant];
}

export default Pagination;

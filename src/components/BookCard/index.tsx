import Image from "next/image";
import { Fragment } from "react";
import "twin.macro";

interface BookCardProps {
  title: string;
  authors: Array<string>;
  pages: number;
  publishingCompany: string;
  publicationYear: number;
}

function BookCard({
  title,
  authors,
  pages,
  publishingCompany,
  publicationYear,
}: BookCardProps): JSX.Element {
  return (
    <button
      tw="w-full flex items-stretch gap-16 p-16 rounded bg-white shadow-card hover:shadow-card-hover transition-shadow duration-75"
      type="button"
    >
      <div tw="w-80 relative flex-shrink-0 filter drop-shadow-book">
        <Image
          alt="Livro"
          src="/img/book.png"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div tw="flex flex-col text-left">
        <h3 title={title} tw="typography-title2 font-medium line-clamp-2">
          {title}
        </h3>

        <p tw="leading-5 text-lighter-pink">
          {authors.slice(0, 2).map((author) => (
            <Fragment key={author}>
              {author}
              <br />
            </Fragment>
          ))}
        </p>

        <p tw="leading-5 text-gray mt-8 flex-1 flex items-end">
          {pages} página{pages > 1 && "s"}
          <br />
          Editora {publishingCompany}
          <br />
          Publicado em {publicationYear}
        </p>
      </div>
    </button>
  );
}

export default BookCard;

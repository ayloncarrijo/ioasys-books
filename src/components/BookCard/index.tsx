import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import "twin.macro";

interface BookCardProps extends ComponentPropsWithoutRef<"button"> {
  title: string;
  authors: Array<string>;
  pages: number;
  publishingCompany: string;
  publicationYear: number;
  imageSrc?: string;
}

function BookCard({
  title,
  authors,
  pages,
  publishingCompany,
  publicationYear,
  imageSrc,
  ...props
}: BookCardProps): JSX.Element {
  return (
    <button
      tw="w-full flex items-stretch gap-16 p-16 rounded bg-white shadow-card hover:shadow-card-hover transition-shadow duration-75"
      type="button"
      {...props}
    >
      <div tw="w-80 relative flex-shrink-0 filter drop-shadow-book">
        <Image
          alt="Livro"
          src={imageSrc ?? "/img/book.png"}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div tw="min-w-0 flex flex-col text-left">
        <h3 title={title} tw="typography-title2 font-medium line-clamp-2">
          {title}
        </h3>

        <div tw="leading-5 text-lighter-pink">
          {authors.slice(0, 2).map((author) => (
            <p key={author}>
              {author}
              <br />
            </p>
          ))}
        </div>

        <div tw="leading-5 text-gray mt-8 flex-1 flex items-end">
          <div tw="min-w-0">
            <p>
              {pages} página{pages > 1 && "s"}
            </p>
            <p
              title={publishingCompany}
              tw="whitespace-nowrap overflow-ellipsis overflow-hidden"
            >
              Editora {publishingCompany}
            </p>
            <p>Publicado em {publicationYear}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default BookCard;

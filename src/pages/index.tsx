import Api from "api";
import Blockquote from "components/Blockquote";
import BookCard from "components/BookCard";
import Container from "components/Container";
import MessageBox from "components/MessageBox";
import Modal from "components/Modal";
import Pagination from "components/Pagination";
import Header from "containers/Header";
import useAsyncCallback from "hooks/useAsyncCallback";
import useBreakpoint from "hooks/useBreakpoint";
import getUser from "middlewares/getUser";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Dots from "public/icon/dots.svg";
import { useCallback, useEffect, useState } from "react";
import "twin.macro";
import { theme } from "twin.macro";
import { AppPage, Status } from "types";
import type { Book, Paginated } from "types/api";

const Home: AppPage = () => {
  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const [books, setBooks] = useState<Array<Book>>([]);

  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  const isSmScreen = useBreakpoint(theme("screens.sm"));

  const fetchBooks = useAsyncCallback(
    useCallback(async () => {
      const { data } = await Api.DEFAULT.get<Paginated<Book>>("/books", {
        params: {
          page: currentPage,
          amount: itemsPerPage,
        },
      });

      setBooks(data.data);
      setTotalPages(Math.ceil(data.totalPages));
    }, [currentPage])
  );

  useEffect(() => {
    fetchBooks();

    return () => {
      fetchBooks.abort();
    };
  }, [fetchBooks]);

  return (
    <div
      tw="min-h-screen bg-no-repeat bg-top bg-cover bg-fixed py-40"
      css={{ backgroundImage: "url(/img/home-bg.png)" }}
    >
      {currentBook && (
        <Modal onDismiss={() => setCurrentBook(null)}>
          <div tw="flex flex-col gap-24 p-24 lg:(w-768 gap-48 p-48 flex-row)">
            <div tw="lg:(flex-1 h-auto) h-240 relative">
              <Image
                alt="Livro"
                src={currentBook.imageUrl ?? "/img/book.png"}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div tw="lg:flex-1">
              <h3 tw="line-clamp-2 typography-title1 font-medium">
                {currentBook.title}
              </h3>
              <p tw="mb-32 text-lighter-pink">
                {currentBook.authors.join(", ")}
              </p>

              <h4 tw="mb-16 font-medium uppercase">Informações</h4>

              <table tw="mb-32 w-full leading-5">
                <tbody>
                  {[
                    {
                      title: "Páginas",
                      data: `${currentBook.pageCount} páginas`,
                    },
                    { title: "Editora", data: currentBook.publisher },
                    { title: "Publicação", data: currentBook.published },
                    { title: "Idioma", data: currentBook.language },
                    { title: "Título Original", data: currentBook.title },
                    { title: "ISBN-10", data: currentBook.isbn10 },
                    { title: "ISBN-13", data: currentBook.isbn13 },
                  ].map(({ title, data }) => (
                    <tr key={title}>
                      <th tw="p-0 text-left font-medium">{title}</th>
                      <td tw="p-0 text-right text-gray">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h4 tw="mb-16 font-medium uppercase">Resenha da editora</h4>

              <Blockquote>{currentBook.description}</Blockquote>
            </div>
          </div>
        </Modal>
      )}

      <Container>
        <Header />

        <section tw="mt-40">
          {
            {
              [Status.LOADING]: (
                <MessageBox>
                  <Dots tw="w-64 h-64" />
                </MessageBox>
              ),
              [Status.ERROR]: (
                <MessageBox>
                  <p>Algo deu errado. Por favor, tente novamente.</p>
                </MessageBox>
              ),
              [Status.SUCCESS]:
                books.length > 0 ? (
                  <div tw="grid gap-16 grid-cols-auto-fit-272">
                    {books.map((book) => (
                      <BookCard
                        onClick={() => setCurrentBook(book)}
                        key={book.id}
                        title={book.title}
                        authors={book.authors}
                        publicationYear={book.published}
                        publishingCompany={book.publisher}
                        pages={book.pageCount}
                        imageSrc={book.imageUrl}
                      />
                    ))}
                  </div>
                ) : (
                  <MessageBox>
                    <p>Oops... Nenhum livro encontrado.</p>
                  </MessageBox>
                ),
              [Status.IDLE]: null,
            }[fetchBooks.status]
          }

          {totalPages > 1 && (
            <div tw="mt-16 flex justify-center sm:justify-end">
              <Pagination
                onPageChange={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
                variant={isSmScreen ? "end" : "center"}
              />
            </div>
          )}
        </section>
      </Container>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = getUser;

export { getServerSideProps };
export default Home;

import BookCard from "components/BookCard";
import Container from "components/Container";
import Pagination from "components/Pagination";
import Header from "containers/Header";
import useBreakpoint from "hooks/useBreakpoint";
import getUser from "middlewares/getUser";
import type { GetServerSideProps } from "next";
import { useState } from "react";
import "twin.macro";
import { theme } from "twin.macro";
import type { AppPage } from "types";

let id = 0;

const books = [
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
  {
    id: id++,
    title: "Don't make me Think",
    authors: ["Mary Johnson", "Aylon"],
    pages: 150,
    publishingCompany: "Loyola",
    publicationYear: 2020,
  },
];

const Home: AppPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const isSmScreen = useBreakpoint(theme("screens.sm"));

  return (
    <div
      tw="min-h-screen bg-no-repeat bg-top bg-cover bg-fixed py-40"
      css={{ backgroundImage: "url(/img/home-bg.png)" }}
    >
      <Container>
        <Header />

        <section tw="mt-40">
          <ul tw="grid gap-16 grid-cols-auto-fit-272">
            {books.map((book) => (
              <li key={book.id}>
                <BookCard {...book} />
              </li>
            ))}
          </ul>

          <div tw="mt-16 flex justify-center sm:justify-end">
            <Pagination
              onPageChange={setCurrentPage}
              currentPage={currentPage}
              totalPages={100}
              variant={isSmScreen ? "end" : "center"}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = getUser;

export { getServerSideProps };
export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Results } from "@/components/Results";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Navigator } from "@/components/Navigator";
import { useNav } from "@/context/navigator";

interface Inputs {
  query: string;
}

const Home: NextPage = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const searchWorks = async () => {
    const query = getValues("query");
    const { data } = await axios.get<string[]>(
      `${BACKEND_URL}/search?q=${query}`
    );
    return data;
  };

  const {
    data: results,
    isRefetching,
    refetch,
  } = useQuery(["query"], searchWorks, {
    enabled: false,
    staleTime: Infinity,
  });

  const { setOffset } = useNav();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (!hasSearched) {
      setHasSearched(true);
    }
    await refetch();
    setOffset(0);
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center py-10 text-neutral-50"
      style={{ scrollbarGutter: "both-edges" }}
    >
      <Head>
        <title>ShakeSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-[full] flex-col gap-3 px-6 sm:w-[80%] sm:px-4 md:w-3/4 lg:w-1/2">
        <h1 className="text-4xl font-bold">ShakeSearch</h1>
        <div className="flex items-center gap-2 text-neutral-500">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full focus-within:text-neutral-50"
          >
            <input
              className="w-full rounded-full bg-neutral-700 py-3.5 pl-14 pr-6 outline-none ring-neutral-50 transition-all placeholder:text-neutral-500"
              {...register("query")}
              placeholder="Search the entire works of Shakespeare"
            />
            <MagnifyingGlassIcon className="pointer-events-none absolute top-1/2 left-5 h-6 w-6 -translate-y-1/2 transform transition-all" />
          </form>
          <Navigator results={results} />
        </div>
        <Results
          query={getValues("query")}
          hasSearched={hasSearched}
          isRefetching={isRefetching}
          results={results}
        />
      </main>
    </div>
  );
};

export default Home;

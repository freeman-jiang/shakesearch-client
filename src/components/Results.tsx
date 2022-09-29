import { RESULTS_PER_PAGE } from "@/constants";
import { useNav } from "@/context/navigator";
import { Entry } from "./Entry";
import { Skeleton } from "./Skeleton";

interface Props {
  hasSearched: boolean;
  results?: string[];
  query: string;
  isRefetching: boolean;
}

export const Results = ({
  hasSearched,
  results,
  isRefetching,
  query,
}: Props) => {
  const { offset } = useNav();

  if (!hasSearched) {
    return null;
  }

  if (isRefetching) {
    return (
      <div className="mt-4 flex animate-pulse flex-col gap-5">
        {[...Array(8)].map(() => (
          <Skeleton />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-2 flex flex-col gap-4 text-gray-300">
      {results && results.length > 0 ? (
        results
          .slice(0 + offset, RESULTS_PER_PAGE + offset)
          .map((result) => <Entry key={result} query={query} result={result} />)
      ) : (
        <p>Looks like we didn't find anything :(</p>
      )}
    </div>
  );
};

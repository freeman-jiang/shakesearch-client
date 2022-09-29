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
  if (!hasSearched) {
    return <p>Try searching now</p>;
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
          .slice(0, 3)
          .map((result) => <Entry key={result} query={query} result={result} />)
      ) : (
        <p>Looks like we didn't find anything :(</p>
      )}
    </div>
  );
};

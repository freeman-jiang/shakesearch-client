import { RESULTS_PER_PAGE } from "@/constants";
import { useNav } from "@/context/navigator";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  results?: string[];
}

export const Navigator = ({ results }: Props) => {
  const { offset, setOffset } = useNav();

  if (!results || results.length === 0) {
    return null;
  }

  const incrementOffset = () => {
    setOffset(offset + 1);
  };

  const decrementOffset = () => {
    setOffset(offset - 1);
  };

  const decrementDisabled = offset <= 0;
  const incrementDisabled = offset * RESULTS_PER_PAGE >= results.length - 1;

  return (
    <div className="flex gap-1 text-neutral-500">
      <button
        disabled={decrementDisabled}
        onClick={decrementOffset}
        className={`rounded-full p-2 text-neutral-300 transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:text-neutral-500 disabled:hover:bg-inherit`}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        disabled={incrementDisabled}
        onClick={incrementOffset}
        className={`rounded-full p-2 text-neutral-300 transition-all  hover:bg-neutral-800 disabled:cursor-not-allowed disabled:text-neutral-500 disabled:hover:bg-inherit`}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

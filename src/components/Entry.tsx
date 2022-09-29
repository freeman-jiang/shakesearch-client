interface Props {
  result: string;
  query: string;
}

export const Entry = ({ query, result }: Props) => {
  const surrounding = result.split(query);

  return (
    <div className="rounded-lg bg-neutral-800 p-6">
      {surrounding.map((text, i) => (
        <span key={text} className="whitespace-pre-wrap">
          {text}
          {i < surrounding.length - 1 && (
            <span className="bg-emerald-300 text-neutral-900">{query}</span>
          )}
        </span>
      ))}
    </div>
  );
};

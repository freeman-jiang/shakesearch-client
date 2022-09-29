export const Skeleton = () => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 h-2 rounded bg-slate-200"></div>
        <div className="col-span-1 h-2 rounded bg-slate-200"></div>
      </div>
      <div className="h-2 rounded bg-slate-200" />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 h-2 rounded bg-slate-200"></div>
        <div className="col-span-2 h-2 rounded bg-slate-200"></div>
      </div>
    </div>
  );
};

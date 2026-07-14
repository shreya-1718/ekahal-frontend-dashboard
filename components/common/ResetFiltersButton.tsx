interface Props {
  onClick: () => void;
}

export default function ResetFiltersButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 cursor-pointer"
    >
      Reset Filters
    </button>
  );
}
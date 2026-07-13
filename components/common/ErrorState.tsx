interface Props {
  message: string;
}

export default function ErrorState({
  message,
}: Props) {
  return (
    <div className="rounded-xl bg-red-50 p-8 text-center">
      <p className="text-red-600">{message}</p>
    </div>
  );
}
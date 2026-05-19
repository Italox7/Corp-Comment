type ErrorProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorProps) {
  return <div>{message}</div>;
}

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  message,
}: {
  firstName: string;
  message: string;
}) {
  return (
    <div>
      <h1>Message from {firstName}</h1>
      <p>{message}</p>
    </div>
  );
}

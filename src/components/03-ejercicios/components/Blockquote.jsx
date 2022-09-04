export const Blockquote = ({quote, author}) => {
  return (
    <figure className="text-end">
      <blockquote className="blockquote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="blockquote-footer">{author}</figcaption>
    </figure>
  );
};

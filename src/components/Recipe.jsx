import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
  console.log(props.recipe)
  return (
    <section className="prose my-10 leading-8">
      <h2 className="mb-4 text-xl font-semibold">Chef AI recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}

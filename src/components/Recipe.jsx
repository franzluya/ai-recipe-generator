import Markdown from 'react-markdown'

export default function Recipe(props) {
  const customComponents = {
    h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({children}) => <h2 className="text-2xl font-semibold mb-3 mt-6">{children}</h2>,
    p: ({children}) => <p className="mb-4 text-gray-600">{children}</p>,
    ul: ({children}) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    ol: ({children}) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
    li: ({children}) => <li className="mb-2">{children}</li>,
  }
  return (
    <section className="prose my-10 leading-8">
      <h2 className="mb-4 text-xl font-semibold">Chef AI recommends:</h2>
      <Markdown components={customComponents}>{props.recipe}</Markdown>
    </section>
  );
}

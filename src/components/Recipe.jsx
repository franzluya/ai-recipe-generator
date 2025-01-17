import React from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  const components = {
    h1: ({ children }) => (
      <h1 className="mb-6 text-xl font-bold text-slate-800">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-xl font-bold text-slate-800">{children}</h2>
    ),
    strong: ({ children }) => (
      <strong className="mb-3 text-xl font-semibold text-slate-800">{children}</strong>
    ),
    p: ({ children }) => <p className="mb-4 text-slate-600">{children}</p>,
    ul: ({ children }) => (
      <ul className="mb-4 list-disc pl-6 text-slate-600">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal pl-6 text-slate-600">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
  };
  return (
    <section className="my-10 leading-8">
      <ReactMarkdown components={components}>{props.recipe}</ReactMarkdown>
    </section>
  );
}

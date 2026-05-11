type AllHtmlTags = keyof HTMLElementTagNameMap;

export default function createElement(type: AllHtmlTags, props: any, ...children: any) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

import * as ReactDOM from "react-dom";

declare module "react-dom" {
  interface Root {
    render: (element: React.ReactNode) => void;
    unmount: () => void;
  }

  function createRoot(
    container: Element | Document | DocumentFragment | Comment,
    options?: ReactDOM.RootOptions
  ): Root;
}

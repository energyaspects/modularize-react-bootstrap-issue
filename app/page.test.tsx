import { createRenderer } from "react-test-renderer/shallow";

import Home from "./page";

export function shallowSetup(Component, partialProps = {}) {
  const renderer = createRenderer();

  return {
    ...renderer,
    tree: renderer.render(<Component {...partialProps} />),
  };
}

test("showcase the error on import in test", () => {
  const element = shallowSetup(<Home />);
});

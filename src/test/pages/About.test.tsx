import renderer from "react-test-renderer";
import { test, expect } from "vitest";
import { Router } from "@tanstack/react-location";
import { routes, location } from "~/router/routes";

import { About } from "~/pages/About";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("About page render", () => {
  const component = renderer.create(
    <Router routes={routes} location={location}>
      <About />
    </Router>
  );
  const domtree = toJson(component);
  // console.log(JSON.stringify(domtree));
  expect(domtree.type).toBe("div");
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  expect((domtree.children![0] as any).children[0].children[0]).toBe("this is about page");
});

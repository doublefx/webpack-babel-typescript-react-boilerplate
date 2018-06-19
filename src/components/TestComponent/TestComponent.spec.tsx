import * as React from "react";
import * as renderer from "react-test-renderer";
import { ThemeProvider } from "display";
import TestComponent from "./TestComponent";

const createRenderer = () =>
  renderer.create(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>,
  );

it("renders loads subcomponent asynchronously", done => {
  const component = createRenderer();

  // Renders component without subcomponent <AsyncLoadedComponentTitle />
  expect(component.toJSON()).toMatchSnapshot();

  setTimeout(() => {
    // Renders asynchronously loaded subcomponent
    expect(component.toJSON()).toMatchSnapshot();

    setTimeout(() => {
      // Increments timer count
      expect(component.toJSON()).toMatchSnapshot();
      done();
    }, 1000);
  }, 100);

});


function doubleSay (str:string) :string {
    return str + ", " + str;
}
function capitalize (str:string):string {
    return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str:string):string {
    return str + '!';
}
/*  let result:string = exclaim(capitalize(doubleSay("hello")));
    result //=> "Hello, hello!"*/

it("understands pipe operator", () => {
    const test:string = "hello"
        |> doubleSay
        |> capitalize
        |> exclaim;

    expect(test).toEqual("Hello, hello!");
});
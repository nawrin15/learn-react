import React from 'react';
import { ReactElement, ReactNode } from 'react';
import './App.css';

const HeadingFC: React.FC<{title: string}> = ({title}) => <h1>{title}</h1>;

//Conventional props
function Heading({ title }: {title: string;}) {
  return <h1>{title}</h1>;
}
function HeadingWithContent({ children }: {children: string;}) {
  console.log(children)
  return <h1>{children}</h1>;
}
function HeadingWithJsx({ children }: {children: ReactNode}): ReactElement {
  console.log(children)
  return <h1>{children}</h1>;
}


// Defaults Props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = {children: ReactNode} & typeof defaultContainerProps;

// function Container({heading, children}: {heading: ReactNode, children: ReactNode} & typeof defaultContainerProps): ReactElement {
//   return <div><h1>{heading}</h1></div>;
// }
function Container({heading, children}: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
Container.defaultProps = defaultContainerProps;


// Functional Props
function TextWithNumber({
  header,
  children
}: {
  // for optional parameter we use <props>?
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  // const [state, stateSet] = React.useState<number | null>(null);
  const [state, stateSet] = React.useState<number>(1);
  return (
    <div>
      {/* {check the header exist or not othewise taking margin padding for h2 tag} */}
      {header && <h2>{header?.(state)}</h2>}
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  );
}
//List
function List<ListItem>({
  items,
  render,
} : {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}
//Class Component 
class MyHeader extends React.Component<{
  title: ReactNode,
}> {
   render() {
    return (
      <h1>{this.props.title}</h1>
    )
   }
}
function App() {
  return (
    <div>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>Hi!</HeadingWithContent>
      <HeadingWithJsx><strong>Hi!</strong></HeadingWithJsx>
      <Container>Foo</Container>
      <HeadingFC title="zxc"></HeadingFC>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Count: {num}</div>}
      </TextWithNumber>
      <TextWithNumber>
        {(num: number) => <div>Count: {num}</div>}
      </TextWithNumber>
      <List 
        items={["apple", "pear", "cherry"]} 
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
      <MyHeader title="fdfd"></MyHeader>
    </div>
  );
}

export default App;

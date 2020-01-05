import React, { Component } from "react";
import { Counter } from "./Counter";

//DEFINE STATE TYPE HERE
interface Props {}
interface State {
  counter: number;
}

//USING CLASS COMPONENT HERE
export class ReactCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      //UNCOMMENTING LINE 15 WILL THROW AN ERROR
      counter: 0
    };

    // this.increment = this.increment.bind(this)
  }

  // //This runs upon first render
  // componentDidMount() {
  //   console.log("You mounted react counter component!");
  // }

  // //This runs everytime state is updated
  // componentDidUpdate() {
  //   console.log("You updated state!");
  // }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
      //UNCOMMENTING LINE 34 WILL THROW AN ERROR
      // counter: "this.state.counter + 1"
    });
  };

  //COUNTER COMPONENT EXPECTS NAME, CURRENTCOUNT, INCREMENT FUNC
  render() {
    return (
      <Counter
        name="React Counter"
        currentCounter={this.state.counter}
        increment={this.increment}
        //ADDING A RANDOM KEY WILL THROW ERROR
        // random ={this.increment}
      ></Counter>
    );
  }
}

////EXTENSION - USING HOOKS LOL
// export const ReactCounter: FunctionComponent<Props> = () => {
//   const [counter, setCounter] = useState<number>(0);

//   return (
//     <Counter
//       name="React Counter"
//       currentCounter={counter}
//       increment={() => setCounter(counter + 1)}
//     ></Counter>
//   );
// };

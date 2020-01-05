import * as React from "react";
import { Counter } from "./Counter"

export interface MainBodyProps { incrementor: Number }


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class MainBody extends React.Component<MainBodyProps, {counter: number}> {

  constructor(props:any, context:any) {
    super(props, context);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    console.log('You mounted Mainbody component!');
  }

  componentDidUpdate() {
    console.log('You updated state!');
  }

  increment() {
    this.setState(
      {
        counter: this.state.counter + 1
      }
    )
  }

    render() {
        return <div>
          <Counter counter={this.state.counter}/>
          <button onClick={this.increment} >
            Click me to increment!
          </button>
        </div>
    }
}
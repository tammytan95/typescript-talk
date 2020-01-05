import * as React from "react";

export interface CounterProps { counter: Number }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Counter extends React.Component<CounterProps, {}> {
    render() {
        return <div>
          <p>
            {this.props.counter}
          </p>
        </div>
    }
}
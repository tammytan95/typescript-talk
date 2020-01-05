import * as React from "react";

export interface HeaderProps { compiler: string; framework: string; name1: string; name2: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return <div>
             <h1>
              Hello from {this.props.compiler} and {this.props.framework}!
             </h1>
             <h2>
              {this.props.name1} and {this.props.name2}'s Typescript 
             </h2>
          </div>
    }
}
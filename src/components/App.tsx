import * as React from "react";

import { Header } from './Header'
import { MainBody } from './MainContainer'

export interface AppProps { App: Boolean }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, {}> {
    render() {
        return <div>
          <div>
            <Header compiler="TypeScript" framework="React" name1="Tammy" name2="Kenny"/>
            <MainBody incrementor= {1} />
          </div>
        </div>
    }
}
import { Component, ReactNode } from "react";
import  Button from '../Button'

type MyState ={
    currentValue: number;
}


class Calculator extends Component {
    state: MyState = { 
        currentValue: 0
     }

   render() {
    return (
        <div className="container_calculator">
            <div className="container_display">
                {this.state.currentValue}
            </div>
            <div className="container_buttons">
                <Button 
                  handleClick={this.handleClick}
                >
                    7 
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    8
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    9
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    DEL
                </Button>
                <br />
                <Button 
                  handleClick={this.handleClick}
                >
                    4
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    5
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    6
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    +
                </Button>
                <br />
                <Button 
                  handleClick={this.handleClick}
                >
                    1
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    2
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    3
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    -
                </Button>
                <br />
                <Button 
                  handleClick={this.handleClick}
                >
                    .
                </Button>
            
                <Button 
                  handleClick={this.handleClick}
                >
                    0
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    /
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    *
                </Button>
                <br />
                <Button 
                  handleClick={this.handleClick}
                >
                    RESET
                </Button>
                <Button 
                  handleClick={this.handleClick}
                >
                    =
                </Button>
            </div>
        </div>
    )
   }
   handleClick = (item: ReactNode) => {
    console.log(item);

    this.setState(() => ({
        currentValue: item,
      }));

   }
}

export default Calculator;
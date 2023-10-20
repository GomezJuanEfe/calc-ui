import { Component, ReactNode } from "react";
import  Button from '../Button'
import Screen from "../Screen";
import { pressButton } from "../../utils/calculator";
import './Calculator.scss'

type MyState = {
  currentValue: string,
  previousValue: string,
  operator: string | null,
  secondNumber: boolean,
  resetNext: boolean,
}


class Calculator extends Component {
    state: MyState = { 
      currentValue: '0',
      previousValue: '',
      operator: null,
      secondNumber: false,
      resetNext: false,
    }

   render() {
    return (
        <section className="calculator-container">

            <div className="calculator-wrapper">
              <Screen currentValue={this.state.currentValue}/>
              <div className="container-buttons">
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
                    className={'green'}
                  >
                      +
                  </Button>

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
                    className={'green'}
                  >
                      -
                  </Button>

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
                    className={'green'}
                  >
                      *
                  </Button>

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
                    className={'blue'}
                  >
                      C
                  </Button>
                  <Button 
                    handleClick={this.handleClick}
                    className={'green'}
                  >
                      /
                  </Button>

                  <Button 
                    handleClick={this.handleClick}
                    className={'w-50 gray'}
                  >
                      RESET
                  </Button>
                  <Button 
                    handleClick={this.handleClick}
                    className={'w-50 pink'}
                  >
                      =
                  </Button>
              </div>
            </div>

        </section>
    )
   }
  handleClick = (item: ReactNode) => {
    const button = item as string

    const params = {
      currentValue: this.state.currentValue,
      previousValue: this.state.previousValue,
      operator: this.state.operator,
      secondNumber: this.state.secondNumber,
      resetNext: this.state.resetNext
    }

    const result = pressButton(params, button)

    this.setState(() => ({
      currentValue: result.currentValue,
      previousValue: result.previousValue,
      operator: result.operator,
      secondNumber: result.secondNumber,
      resetNext: result.resetNext,
    }));
  }
}

export default Calculator;
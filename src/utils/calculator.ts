interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operator: string | null;
  secondNumber: boolean;
  resetNext: boolean;
}

function evaluateExpression(expression: string): string | null {
  try {
    return String(eval(expression));
  } catch (error: any) {
    return  error.message;
  }
}

function pressButton(state: CalculatorState, button: string): CalculatorState {
  if (/[\d.]/.test(button)) {
    if (state.resetNext) {
      return { ...state, currentValue: button, resetNext: false };
    }
    const currentValue = state.currentValue === '0' ? button : state.currentValue + button;
    return { ...state, currentValue };
  }

  if (/[+*/-]/.test(button)) {
    if (state.secondNumber && state.operator) {
      const expression = `${state.previousValue} ${state.operator} ${state.currentValue}`;
      const result = evaluateExpression(expression);
      if (result) {
        return {
          ...state,
          currentValue: result,
          previousValue: result,
          operator: button,
          resetNext: true,
        };
      }
    } else {
      return {
        ...state,
        previousValue: state.currentValue,
        operator: button,
        resetNext: true,
        secondNumber: true,
      };
    }
  }

  if (button === '=') {
    if (state.operator) {
      const expression = `${state.previousValue} ${state.operator} ${state.currentValue}`;
      const result = evaluateExpression(expression);
      if (result) {
        return {
          ...state,
          currentValue: result,
          previousValue: result,
          operator: null,
          resetNext: true,
        };
      }
    }
  }

  if (button === 'C') {
    if (state.currentValue.length === 1) {
      return { ...state, currentValue: '0' };
    } else {
      return { ...state, currentValue: state.currentValue.slice(0, -1) };
    }
  }

  if (button === 'RESET') {
    return {
      currentValue: '0',
      previousValue: '',
      operator: null,
      secondNumber: false,
      resetNext: false,
    };
  }

  return state;
}

export { pressButton }
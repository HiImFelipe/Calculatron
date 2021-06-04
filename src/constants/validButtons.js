export const numbers = [
  {display: '1', type: 'number'},
  {display: '2', type: 'number'},
  {display: '3', type: 'number'},
  {display: '4', type: 'number'},
  {display: '5', type: 'number'},
  {display: '6', type: 'number'},
  {display: '7', type: 'number'},
  {display: '8', type: 'number'},
  {display: '9', type: 'number'},
];

export const mathOperations = [
  {display: '+', type: 'mathOperation', relativeOperator: '+'},
  {display: '-', type: 'mathOperation', relativeOperator: '-'},
  {display: '÷', type: 'mathOperation', relativeOperator: '/'},
  {display: 'x', type: 'mathOperation', relativeOperator: '*'},
  {display: '=', type: 'mathOperation', relativeOperator: '='},
];

export const consoleOperations = [
  {display: 'CE', operation: () => {}},
  {
    display: 'C',
    operation: (setPrompt) => {
      setPrompt({value: '0', hasJustStarted: true});
    },
  },
  {
    display: 'Back',
    operation: (setPrompt) => {
      setPrompt((prevPrompt) => {
        if (prevPrompt.value.length > 1) return {...prevPrompt, value: prevPrompt.value.slice(0, -1)};

        if (parseInt(prevPrompt.value) > 0) return {...prevPrompt, value: '0', hasJustStarted: true};

        return prevPrompt;
      });
    },
  },
];

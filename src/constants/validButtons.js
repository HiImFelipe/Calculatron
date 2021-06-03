export const numbers = [
  {display: '1'},
  {display: '2'},
  {display: '3'},
  {display: '4'},
  {display: '5'},
  {display: '6'},
  {display: '7'},
  {display: '8'},
  {display: '9'},
];

export const mathOperations = [{display: '+'}, {display: '-'}, {display: '/'}, {display: 'x'}, {display: '='}];

export const consoleOperations = [
  {display: 'CE', operation: () => {}},
  {
    display: 'C',
    operation: (setPrompt) => {
      setPrompt({value: 0, hasJustStarted: true});
    },
  },
  {
    display: 'Back',
    operation: (setPrompt) => {
      setPrompt((prevPrompt) => {
        if (prevPrompt.value.length > 1) return {...prevPrompt, value: prevPrompt.value.slice(0, -1)};

        if (prevPrompt.value > 0) return {...prevPrompt, value: 0, hasJustStarted: true};

        return prevPrompt;
      });
    },
  },
];

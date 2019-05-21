export const onChangeSubmit = handleSubmit => {
  let timerIdle;
  return function(e) {
    clearTimeout(timerIdle);
    timerIdle = setTimeout(() => {
      handleSubmit();
    }, 1000);
  };
};

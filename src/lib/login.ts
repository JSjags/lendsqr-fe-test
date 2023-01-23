let handleLogin: Function;

handleLogin = (e: Event, nav: Function) => {
  e.preventDefault();
  nav("/dashboard");
};

export { handleLogin };

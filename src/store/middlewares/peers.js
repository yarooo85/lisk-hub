const peersMiddleware = () => next => (action) => {
  next(action);
};

export default peersMiddleware;

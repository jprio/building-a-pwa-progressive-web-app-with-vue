navigator.serviceWorker.register(
  '/service-worker.js',
  {
    scope: "/",
  }
);
document.querySelector('button').addEventListener('click', async () => {
  const { sayHello } = await import('./async-loaded.js');
  sayHello();
});

// Grabbing the parameter from the url
//e.g http://localhost:3000/#access_token=BQCFv8_mHptkarE1d0p8N1cXTkU5iwQuaSe_Dlsezw9T2m59sff.........
export const getHashParams = () => {
  const hashParams: any = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

// Higher-order function for async/await error handling
export const catchErrors = (fn: any) =>
  function (...args: any) {
    return fn(...args).catch((err: Error) => {
      console.error(err);
    });
  };

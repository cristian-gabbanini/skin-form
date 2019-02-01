import React, { useState } from "react";

function useAsyncComponent() {
  const [component, setComponent] = useState(() => () => <></>);
  function _setComponent(componentObject) {
    setComponent(() => componentObject);
  }
  return [component, _setComponent];
}

export default useAsyncComponent;

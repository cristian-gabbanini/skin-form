import React, { useEffect } from "react";
import useAsyncComponent from "./hooks/useAsyncComponent";
const importSkin = skin => import(`./skins/${skin}/${skin}.js`);

function BookingForm({ skin }) {
  const [ArrivalComponent, setArrivalComponent] = useAsyncComponent();
  const [Departure, setDeparture] = useAsyncComponent();

  useEffect(
    () => {
      importSkin(skin).then(module => {
        const { Arrival, Departure = () => <></> } = module.default;
        setArrivalComponent(Arrival);
        setDeparture(Departure);
      });
    },
    [skin]
  );

  function onArrivalClick() {
    alert("Hey! you selected a new arrival!");
  }

  function onDepartureClick() {
    alert("Hey! you selected a new departure!");
  }

  return (
    <form>
      <ArrivalComponent onClick={onArrivalClick} />
      <Departure onClick={onDepartureClick} />
    </form>
  );
}

export default BookingForm;

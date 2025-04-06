import React from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { settingsValue, StatusCheck } from "./statusCheck";

const Status = () => {
  const [batteryStatus, setBatteryStatus] = React.useState<number | string>(0);

  React.useEffect(() => {
    if ((navigator as any).getBattery) {
      (navigator as any).getBattery().then((battery: any) => {
        // Set initial battery status
        setBatteryStatus(Math.round(battery.level * 100));

        // Define event handlers
        const handleLevelChange = () => {
          setBatteryStatus(Math.round(battery.level * 100));
        };

        const handleChargingChange = () => {
          setBatteryStatus(Math.round(battery.level * 100));
        };

        // Listen to battery level changes
        battery.addEventListener("levelchange", handleLevelChange);

        // Listen to charging status changes
        battery.addEventListener("chargingchange", handleChargingChange);

        // Cleanup listeners on unmount
        return () => {
          battery.removeEventListener("levelchange", handleLevelChange);
          battery.removeEventListener("chargingchange", handleChargingChange);
        };
      });
    } else {
      setBatteryStatus("Your browser does not support Battery Status API");
    }
  }, []);
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);
  return (
    <>
      <Field className="mt-4 max-w-4xl">
        <h1>
          {time.toLocaleTimeString()}, {time.toLocaleDateString()}
        </h1>
        <FieldLabel
          className={StatusCheck(
            typeof batteryStatus === "number" ? batteryStatus : 0,
          )}
          htmlFor="input-field-username"
        >
          Battery
        </FieldLabel>
        <Input
          id="input-field-username"
          type="text"
          placeholder="Your Battery Status"
          value={batteryStatus + "%"}
        />
        <FieldDescription>
          Your current battery status percentage.
        </FieldDescription>
      </Field>
      <Field className="grid  md:grid-cols-2  gap-4">
        {settingsValue.map((setting) => {
          return (
            <Field className="mt-4 max-w-4xl" key={setting.id}>
              <FieldLabel htmlFor={`input-field-${setting.id}`}>
                {setting.name}
              </FieldLabel>
              <Input
                id={`input-field-${setting.id}`}
                type="text"
                placeholder={`Your ${setting.name}`}
                value={setting.value}
              />
              <FieldDescription>
                Your current {setting.name} setting.
              </FieldDescription>
            </Field>
          );
        })}
      </Field>
    </>
  );
};

export default Status;

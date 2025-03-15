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

        // Listen to battery level changes
     const handleChange = () =>    battery.addEventListener("levelchange", () => {
          setBatteryStatus(Math.round(battery.level * 100));
        });

        // Listen to charging status changes
      const handleCharging = () =>   battery.addEventListener("chargingchange", () => {
          setBatteryStatus(Math.round(battery.level * 100));
        });
        return () => {
            battery.removeEventListener("levelchange", handleChange);
            battery.removeEventListener("chargingchange", handleCharging);
        }
    
      });
      
    
    } else {
      setBatteryStatus("Your browser does not support Battery Status API");
    }

  }, []);
  return (
    <>
      <Field className="mt-4 max-w-4xl">
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
      
      {
        settingsValue.map((setting) => {
            return (
                <Field className="mt-4 max-w-4xl" key={setting.id}>
                  <FieldLabel
                    htmlFor={`input-field-${setting.id}`}
                  >
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
            )
        })
      }
    </>
  );
};

export default Status;

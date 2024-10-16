import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import "../api/Mirage";


type Appliance = {
  id: number;
  type: "TV" | "Kettle" | "AC" | "Speaker" | "WiFi" | "Fan";
  room: string;
  status: "on" | "off";
  energyMonitoring: boolean;
};

interface DeviceCardProps {
  device: Appliance;
  onToggle: (id: number, newState: "on" | "off") => void;
}

const DeviceCard = ({ device, onToggle }: DeviceCardProps) => {
  const [isOn, setIsOn] = useState(device.status === "on");

  useEffect(() => {
    setIsOn(device.status === "on");
  }, [device.status]);

  const handleToggle = () => {
    const newState = isOn ? "off" : "on";
    setIsOn(newState === "on");
    onToggle(device.id, newState);

    fetch(`/api/appliances/${device.id}/toggle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newState }),
    })
      .then((res) => res.json())
      .then((updatedDevice) => {
        // if i decide to do something different with the updated device
      });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{device.type}</h3>
        <Switch
          checked={isOn}
          onChange={handleToggle}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "black",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "black",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DeviceCard;

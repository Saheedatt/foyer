import { useEffect, useState } from 'react';
import DeviceCard from './DeviceCard';

type Appliance = {
  id: number;
  type: "TV" | "Kettle" | "AC" | "WiFi" | "Fan";
  room: string;
  status: "on" | "off";
  energyMonitoring: boolean;
};

const DeviceGrid = () => {
  const [devices, setDevices] = useState<Appliance[]>([]);

  useEffect(() => {
    fetch('/api/appliances')
      .then((res) => res.json())
      .then((data) => {
        setDevices(data.appliances);
      });
  }, []);

  const toggleAppliances = (id: number, newState: "on" | "off") => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, status: newState } : device
      )
    );

    fetch(`/api/appliances/${id}/toggle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newState }),
    }).then((res) => {
      if (!res.ok) {
        console.error("Failed to update status");
       
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} onToggle={toggleAppliances} />
      ))}
    </div>
  );
};

export default DeviceGrid;

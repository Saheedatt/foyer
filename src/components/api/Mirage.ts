import { createServer, Model, Server } from "miragejs";
import Schema from "miragejs/orm/schema";

type Light = {
  id: number;
  room: string;
  status: "on" | "off";
  brightness?: number;
  color?: string;
  schedule?: string | null;
};

type Temperature = {
  id: number;
  room: string;
  temperature: number;
  status: "on" | "off";
  schedule?: string | null;
  energy: number;
};

type Humidifier = {
  id: number;
  room: string;
  status: "on" | "off";
  schedule?: string | null;
  energy: number;
};

type SecuritySystem = {
  id: number;
  type: "Camera" | "Motion Detector" | "Alarm";
  room: string;
  status: "active" | "inactive";
  remoteAccess: boolean;
};

type SmartLock = {
  id: number;
  location: string;
  status: "locked" | "unlocked";
  remoteAccess: boolean;
};

type Appliance = {
  id: number;
  type: "TV" | "Kettle" | "AC" | "WiFi" | "Fan";
  room: string;
  status: "on" | "off";
  energy: number;
};

type Speaker = {
  id: number;
  room: string;
  status: "playing" | "off";
  volume: number;
  energy: number;
};

type SmartPlug = {
  id: number;
  room: string;
  status: "on" | "off";
  energy: number;
};

type AppSchema = {
  light: Light;
  temperature: Temperature;
  humidifier: Humidifier;
  securitySystem: SecuritySystem;
  smartLock: SmartLock;
  appliance: Appliance;
  speaker: Speaker;
  smartPlug: SmartPlug;
};

export function makeServer({ environment = "development" } = {}): Server {
  return createServer({
    environment,

    models: {
      light: Model.extend<Partial<Light>>({}),
      temperature: Model.extend<Partial<Temperature>>({}),
      humidifier: Model.extend<Partial<Humidifier>>({}),
      securitySystem: Model.extend<Partial<SecuritySystem>>({}),
      smartLock: Model.extend<Partial<SmartLock>>({}),
      appliance: Model.extend<Partial<Appliance>>({}),
      speaker: Model.extend<Partial<Speaker>>({}),
      smartPlug: Model.extend<Partial<SmartPlug>>({}),
    },

    seeds(server) {
      server.create("appliance", {
        id: "1",
        type: "TV",
        room: "Living Room",
        status: "off",
        energyMonitoring: true,
      });
      server.create("appliance", {
        id: "2",
        type: "Kettle",
        room: "Kitchen",
        status: "off",
        energyMonitoring: false,
      });
      server.create("appliance", {
        id: "3",
        type: "AC",
        room: "Bedroom",
        status: "on",
        energyMonitoring: true,
      });
      server.create("appliance", {
        id: "4",
        type: "AC",
        room: "Living Room",
        status: "on",
        energyMonitoring: true,
      });
      server.create("appliance", {
        id: "5",
        type: "Heater",
        room: "Bathroom",
        status: "on",
        energyMonitoring: true,
      });
      server.create("appliance", {
        id: "6",
        type: "Speaker",
        room: "Living Room",
        status: "playing",
        volume: 75,
        multiRoom: true,
      });
      server.create("appliance", {
        id: "7",
        type: "WiFi",
        room: "Bedroom",
        status: "on",
        energyMonitoring: true,
      });
      server.create("appliance", {
        id: "8",
        type: "Fan",
        room: "Bedroom",
        status: "off",
        energyMonitoring: false,
      });
      server.create("appliance", {
        id: "8",
        type: "Fan",
        room: "Living Room",
        status: "off",
        energyMonitoring: false,
      });
      server.create("light", {
        id: "1",
        room: "Living Room",
        status: "off",
        brightness: 50,
        color: "white",
        schedule: null,
      });

      server.create("light", {
        id: "2",
        room: "Kitchen",
        status: "off",
        brightness: 50,
        color: "white",
        schedule: null,
      });

      server.create("light", {
        id: "3",
        room: "Bedroom",
        status: "off",
        brightness: 50,
        color: "white",
        schedule: null,
      });
      server.create("light", {
        id: "4",
        room: "Dining Room",
        status: "off",
        brightness: 50,
        color: "white",
        schedule: null,
      });
      server.create("temperature", {
        id: "1",
        room: "Living Room",
        temperature: 22,
        status: "on",
        schedule: "6:00 AM",
        energyEfficiency: true,
      });
      server.create("temperature", {
        id: "2",
        room: "Dining Room",
        temperature: 22,
        status: "on",
        schedule: "6:00 AM",
        energyEfficiency: true,
      });
      server.create("temperature", {
        id: "3",
        room: "Kitchen",
        temperature: 22,
        status: "on",
        schedule: "6:00 AM",
        energyEfficiency: true,
      });
      server.create("humidifier", {
        id: "1",
        room: "Bathroom",
        status: "on",
        schedule: "7:00 AM",
        energyEfficiency: true,
      });
      server.create("humidifier", {
        id: "2",
        room: "Bedroom",
        status: "on",
        schedule: "7:00 AM",
        energyEfficiency: true,
      });
      server.create("securitySystem", {
        id: "1",
        type: "Camera",
        room: "Outdoor",
        status: "active",
        remoteAccess: true,
      });
      server.create("smartLock", {
        id: "1",
        location: "Front Door",
        status: "locked",
        remoteAccess: true,
      });
      server.create("smartLock", {
        id: "2",
        location: "Back Door",
        status: "locked",
        remoteAccess: true,
      });
      server.create("smartPlug", {
        id: "1",
        room: "Kitchen",
        status: "off",
        energyMonitoring: true,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/lights", (schema: Schema<AppSchema>) => schema.all("light"));
      this.get("/temperature", (schema: Schema<AppSchema>) =>
        schema.all("temperature")
      );
      this.get("/humidifiers", (schema: Schema<AppSchema>) =>
        schema.all("humidifier")
      );
      this.get("/securitySystems", (schema: Schema<AppSchema>) =>
        schema.all("securitySystem")
      );
      this.get("/smartLocks", (schema: Schema<AppSchema>) =>
        schema.all("smartLock")
      );
      this.get("/appliances", (schema: Schema<AppSchema>) =>
        schema.all("appliance")
      );
      this.get("/speakers", (schema: Schema<AppSchema>) =>
        schema.all("speaker")
      );
      this.get("/smartPlugs", (schema: Schema<AppSchema>) =>
        schema.all("smartPlug")
      );

      this.post("/lights/:id/toggle", (schema: Schema<AppSchema>, request) => {
        const id = request.params.id;
        const light = schema.find("light", id);

        if (light) {
          const newStatus = light.status === "on" ? "off" : "on";
          return schema.db.lights.update(id, { status: newStatus });
        }
        return null;
      });

      this.post(
        "/appliances/:id/toggle",
        (schema: Schema<AppSchema>, request) => {
          const id = request.params.id;
          const appliance = schema.find("appliance", id);

          if (appliance) {
            const newStatus = appliance.status === "on" ? "off" : "on";
            appliance.update({ status: newStatus });
            return appliance;
          }
          return null;
        }
      );

      this.post(
        "/temperature/:id/toggle",
        (schema: Schema<AppSchema>, request) => {
          const id = request.params.id;
          const temperature = schema.find("temperature", id);

          if (temperature) {
            const newStatus = temperature.status === "on" ? "off" : "on";
            return schema.db.temperature.update(id, { status: newStatus });
          }
          return null;
        }
      );
    },
  });
}

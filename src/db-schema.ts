import { Device } from "./device";
import { Sensor } from "./sensor";
import { Rule } from "./rule";
import { User } from "./user";

export interface DBSchema {
  devices: {
    [deviceName: string]: Device;
  };
  sensors: {
    [sensorName: string]: Sensor;
  };
  rules: {
    [ruleName: string]: Rule
  },
  users: {
    [key: string]: User;
  }
}
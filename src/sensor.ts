export type sensorType = 'dht' | 'netatmo';
export type sensorValueName = 'temperature' | 'humidity';

export interface Sensor {
  key: string;
  name: string;
  type: sensorType;
  data: SensorData | { [valueName in keyof sensorValueName]: number | string };
}

export interface SensorData {
  [key: string]: {
    [valueName in keyof sensorValueName]: number | string;
  };
}
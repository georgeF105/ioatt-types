export type sensorType = 'dht' | 'netatmo';
export type sensorValueName = 'temperature' | 'humidity';

export interface Sensor {
  name: string;
  type: sensorType;
  data: {
    [key: string]: {
      [valueName in keyof sensorValueName]: number | string;
    }
  }
}
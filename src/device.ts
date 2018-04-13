export interface Device {
  id: string;
  name: string;
  state: DeviceState;
  type: string;
  sensor?: string;
}

export interface SwitchDevice extends Device {
  type: 'switch';
}

export interface DeviceState {
  pwmValue: number;
  switch: boolean;
}
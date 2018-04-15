export interface Device {
  id: string;
  name: string;
  state: boolean | number;
  type: string;
  sensor?: string;
}
export type DeviceType = 'switch' | 'pwmValue';

export interface DeviceState {
  pwmValue?: number;
  switch?: boolean;
}
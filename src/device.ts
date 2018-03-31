
export interface Device {
  id: string;
  name: string;
  state: any;
  type: string;
  sensor?: string;
}

export interface SwitchDevice extends Device {
  type: 'switch';
  state: boolean;
}

export interface AnnouncementDevice extends Device {
  type: 'announcement';
  state: any;
} 
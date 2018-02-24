export interface Rule {
  $key: string;
  active: boolean;
  conditions: Array<TemperatureRuleCondition | TimeRuleCondition | WeekDayRuleCondition>;
  linkedDeviceKey: string;
  name: string;
}

export type logicOperator = 'and' | 'or' | 'xor' | 'xand';
export type RuleTypes = 'temperature' | 'time' | 'weekDay';

export interface RuleCondition {
  linkedDeviceKey: string;
  logicOperator: logicOperator;
  type: RuleTypes;
}

export interface TemperatureRuleCondition extends RuleCondition {
  sensorDataKey: string;
  sensorKey: string;
  type: 'temperature';
  value: number;
}

export interface TimeRuleCondition extends RuleCondition {
  startTime: string;
  endTime: string;
  type: 'time';
}

export interface WeekDayRuleCondition extends RuleCondition {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  type: 'weekDay';
}
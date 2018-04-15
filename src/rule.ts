export interface Rule {
  key: string;
  active: boolean;
  conditions: Array<RuleCondition>;
  linkedDeviceKey: string;
  name: string;
  lastUpdated: number;
}

export type logicOperator = 'and' | 'or' | 'xor' | 'xand';
export type RuleTypes = 'temperature' | 'time' | 'weekDay' | 'pwmValue';

export interface RuleConditionBase {
  linkedDeviceKey: string;
  logicOperator: logicOperator;
  type: RuleTypes;
}

export interface TemperatureRuleCondition extends RuleConditionBase {
  sensorDataKey: string;
  sensorKey: string;
  type: 'temperature';
  value: number;
}

export interface TimeRuleCondition extends RuleConditionBase {
  startTime: string;
  endTime: string;
  type: 'time';
}

export enum weekDayEnum {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6
}

export interface WeekDayRuleCondition extends RuleConditionBase {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  type: 'weekDay';
}

export interface PWMValueCondition extends RuleConditionBase {
  maxValue: number;
  timeToMax: number;
  logicOperator: 'and'
  type: 'pwmValue';
}

export type RuleCondition = TemperatureRuleCondition
  | TimeRuleCondition
  | WeekDayRuleCondition
  | PWMValueCondition;

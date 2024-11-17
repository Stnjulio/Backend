// src/interfaces/activity.ts
export interface IActivity {
    id: string;
    name: string;
    description: string;
    startDate: Date | string;
    endDate: Date | string;
  }
import { ScheduleModule } from './schedule';
import { WorkoutsModule } from './workouts';
import { MealsModule } from './meals';

export const modules: any[] = [ScheduleModule, WorkoutsModule, MealsModule];

export * from './schedule';
export * from './workouts';
export * from './meals';

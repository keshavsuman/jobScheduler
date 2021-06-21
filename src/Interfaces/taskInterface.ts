export interface Task{
    taskName:taskName,
    creationTimestamp:number,
    scheduledTimestamp:number,
    payload:string,
    taskType:string,
    callbackUrl:string,
    scheduleType:scheduleType
}

enum taskName{
    COURSE = "COURSE",
    APPOINTMENT="APPOINTMENT",
    REMINDER="REMINDER",
    SESSION="SESSION",
    EVENT="EVENT"
}

enum scheduleType{
    EVERY_DAY = 'EVERYDAY',
    EVERY_MONDAY = 'EVERY_MONDAY',
    EVERY_TUESDAY = 'EVERY_TUESDAY',
    EVERY_WEDNESDAY = 'EVERY_WEDNESDAY',
    EVERY_THURSDAY = 'EVERY_THURSDAY',
    EVERY_FRIDAY= 'EVERY_FRIDAY',
    EVERY_SATURDAY= 'EVERY_SATURDAY',
    EVERY_SUNDAY = 'EVERY_SUNDAY'
}
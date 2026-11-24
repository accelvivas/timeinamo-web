import Dexie, { type EntityTable } from 'dexie'
import type {
  ActivityLog,
  AppSettings,
  AttendanceCorrection,
  AttendanceSession,
  Profile,
  WorkSettings,
} from '../types/domain'

class TimeInamoDatabase extends Dexie {
  profiles!: EntityTable<Profile, 'id'>
  workSettings!: EntityTable<WorkSettings, 'id'>
  attendanceSessions!: EntityTable<AttendanceSession, 'id'>
  attendanceCorrections!: EntityTable<AttendanceCorrection, 'id'>
  activityLogs!: EntityTable<ActivityLog, 'id'>
  appSettings!: EntityTable<AppSettings, 'id'>

  constructor() {
    super('timeinamo')

    // Keep each schema version additive and add upgrade functions when data
    // transformations are required. Never remove a version in a shipped app.
    this.version(1).stores({
      profiles: 'id, fullName, createdAt, updatedAt',
      workSettings: 'id, &profileId, internshipStartDate, timezone',
      attendanceSessions:
        'id, profileId, workDate, [profileId+workDate], status, timeIn, timeOut, source, isAdjusted',
      attendanceCorrections: 'id, attendanceSessionId, correctedAt',
      activityLogs:
        'id, profileId, activityDate, [profileId+activityDate], createdAt, updatedAt',
      appSettings: 'id',
    })
  }
}

export const database = new TimeInamoDatabase()

export type EntityId = string
export type ISODate = string
export type ISODateTime = string
export type LocalTime = string

export interface Profile {
  id: EntityId
  fullName: string
  companyName: string
  department: string
  createdAt: ISODateTime
  updatedAt: ISODateTime
}

export interface WorkSettings {
  id: EntityId
  profileId: EntityId
  requiredHours: number
  internshipStartDate: ISODate
  workStart: LocalTime
  workEnd: LocalTime
  workingDays: number[]
  defaultBreakMinutes: number
  timezone: string
}

export type AttendanceStatus = 'in-progress' | 'completed'
export type AttendanceSource = 'timer' | 'manual'

export interface AttendanceSession {
  id: EntityId
  profileId: EntityId
  workDate: ISODate
  timeIn: ISODateTime
  timeOut?: ISODateTime
  breakMinutes: number
  status: AttendanceStatus
  source: AttendanceSource
  isAdjusted: boolean
}

export type AttendanceCorrectionValues = Partial<
  Pick<AttendanceSession, 'workDate' | 'timeIn' | 'timeOut' | 'breakMinutes' | 'status'>
>

export interface AttendanceCorrection {
  id: EntityId
  attendanceSessionId: EntityId
  previousValues: AttendanceCorrectionValues
  updatedValues: AttendanceCorrectionValues
  reason: string
  correctedAt: ISODateTime
}

export interface ActivityLog {
  id: EntityId
  profileId: EntityId
  activityDate: ISODate
  title: string
  description: string
  notes: string
  createdAt: ISODateTime
  updatedAt: ISODateTime
}

export interface AppSettings {
  id: 'app'
  onboardingCompleted: boolean
  preferredDateFormat: string
  preferredTimeFormat: '12-hour' | '24-hour'
}

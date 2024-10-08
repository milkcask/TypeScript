interface TemporalConstructor {
    /**
     * A reference to the namespace interfaces.
     */
    Now: Temporal.Now,
    Instant: Temporal.Instant,
    ZonedDateTime: Temporal.ZonedDateTime,
    PlainDateTime: Temporal.PlainDateTime,
    PlainDate: Temporal.PlainDate,
    PlainTime: Temporal.PlainTime,
    PlainYearMonth: Temporal.PlainYearMonth,
    PlainMonthDay: Temporal.PlainMonthDay,
    Duration: Temporal.Duration,
}

declare var Temporal: TemporalConstructor;

declare namespace Temporal {
    interface Now {
        instant(): Instant;
        timeZoneId(): string;
        plainDateTimeISO(timeZone: object | string): PlainDateTime
        plainDateISO(timeZone: object | string): PlainDate
        plainTimeISO(timeZone: object | string): PlainTime
    }

    interface Instant {
    }

    interface ZonedDateTime {
    }

    interface PlainDateTime {
    }

    interface PlainDate {
    }

    interface PlainTime {
    }

    interface PlainYearMonth {
    }

    interface PlainMonthDay {
    }

    interface Duration {
    }
}

export type AnyCase<_ extends string> = true;
export const anyCase = <T extends string>(_: T) => true as AnyCase<T>;

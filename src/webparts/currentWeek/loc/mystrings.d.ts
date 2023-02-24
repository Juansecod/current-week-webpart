declare interface ICurrentWeekWebPartStrings {
  WPTitleText: string;
  WPSubtitleText: string;
  WPFormat: string;
  WPstartDate: string;
}

declare module 'CurrentWeekWebPartStrings' {
  const strings: ICurrentWeek;
  export = strings;
}

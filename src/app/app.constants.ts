// These constants are injected via webpack DefinePlugin variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

declare const __DEBUG_INFO_ENABLED__:boolean ;
declare const __VERSION__: string;

export const VERSION = "v1.0.0.1";
export const DEBUG_INFO_ENABLED = true;

export class Logger {
  static log(message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
    const timestamp = new Date().toISOString();
    const prefix = {
      info: '[INFO]',
      warn: '[WARN]',
      error: '[ERROR]',
    }[level];
    console.log(`${timestamp} ${prefix} ${message}`);
  }

  static info(message: string): void {
    this.log(message, 'info');
  }

  static warn(message: string): void {
    this.log(message, 'warn');
  }

  static error(message: string): void {
    this.log(message, 'error');
  }
}
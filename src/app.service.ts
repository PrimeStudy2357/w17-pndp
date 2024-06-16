import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  /** 로깅 모듈 */
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    // 각 로깅 방법의 차이를 확인해보자.
    console.log('the application generaged a message : Hello World!');
    this.logger.log('Hello World!');
    this.logger.debug('Hello World!');
    this.logger.error('Hello World!');
    this.logger.fatal('Hello World!');
    this.logger.verbose('Hello World!');
    this.logger.warn('Hello World!');

    return 'Hello World!';
  }
}

import { PipeTransform } from '@nestjs/common';

export class SkipValidationPipe implements PipeTransform {
  transform(value: any) {
    return value; // Don't validate, accept raw form-data
  }
}

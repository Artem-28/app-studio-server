import { Injectable } from '@nestjs/common';
import * as resource from '@/database/seeds/resource/attributes.json';
import { AttributeAggregate, IAttribute } from '@/models/attribute';

@Injectable()
export class AttributeService {
  public async attributes() {

  }
}

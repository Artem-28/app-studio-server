import { Controller, Get } from '@nestjs/common';
import { AttributeService } from '@/modules/attribute/attribute.service';

@Controller('api/public/v1/attributes')
export class AttributeController {
  constructor(readonly attributeService: AttributeService) {}

  @Get()
  public list() {
    return this.attributeService.attributes();
  }
}

import { IsDefined, IsNumber, validateSync } from 'class-validator';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DomainError } from '@/common/error';
import { ParamScript } from '@/common/param/param-script.transformer';

export class ParamBlock extends ParamScript {
  @IsNumber()
  @IsDefined()
  block_id: number;
}

export const ParamBlockTransformer = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const param = new ParamBlock();
    param.project_id = Number(request.params.project_id);
    param.script_id = Number(request.params.script_id);
    param.block_id = Number(request.params.block_id);

    const errors = validateSync(param, { whitelist: true });
    if (!!errors.length) {
      throw new DomainError(errors);
    }
    return param;
  },
);

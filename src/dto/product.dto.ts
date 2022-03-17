import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty()
    readonly nombre: string;
    @ApiProperty()
    readonly precio: number;
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly foto: string;
}
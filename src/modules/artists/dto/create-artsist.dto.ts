import { IsNotEmpty, IsString } from "class-validator";

export class CreateArtsistsDto{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    role?:string

    @IsString()
    bio?:string

    @IsString()
    image_url?:string
}